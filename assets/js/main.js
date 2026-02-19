// --- PART 1: IMPORT SANITY CLIENT ---
      import { createClient } from "https://cdn.jsdelivr.net/npm/@sanity/client/+esm";

      // --- PART 2: GLOBAL VARIABLES & INITIALIZATION ---
      let allBlogPosts = []; // Will store combined posts from all sources
      // Initialize Animate-On-Scroll library
      // When navigating back via hash anchor (e.g. from projects.html → index.html#projects),
      // disable all AOS animations so the page renders instantly at the target section.
      // We also strip the hash from the URL to prevent the browser's native scroll
      // (which fires before dynamic content loads, causing a wrong scroll position).
      const savedHash = window.location.hash;
      const hasHashNav = savedHash.length > 1;
      if (hasHashNav) {
        // Strip hash immediately so browser doesn't try to scroll to it
        history.replaceState(null, '', window.location.pathname + window.location.search);
        // Force scroll to top to prevent any residual scroll from the hash
        window.scrollTo(0, 0);
      }
      AOS.init({
        offset: 100,
        once: true,
        duration: hasHashNav ? 0 : 600,
        disable: hasHashNav,
      });

      // --- PART 3: SETUP FUNCTIONS (for static page elements) ---

      // Initializes the "typed.js" animation in the hero section
      function setupTypedJs() {
        if (document.getElementById("typed-output")) {
          new Typed("#typed-output", {
            strings: [
              "Bioinformatics specialist",
              "Biotechnologist",
              "Researcher",
              "Science Communicator",
            ],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            backDelay: 1000,
          });
        }
      }

      // Sets up all event listeners for elements that are NOT dynamically loaded
      function highlightActiveNav() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll('.modern-nav-links .nav-item[href^="#"]');
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100; // Adjust for nav height
          const sectionBottom = sectionTop + section.offsetHeight;
          if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionBottom
          ) {
            currentSection = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (href === "#" + currentSection) {
            link.classList.add("active");
          }
        });
      }

      function setupStaticEventListeners() {
        // Mobile Menu toggle
        window.hamburg = () => {
          document.querySelector(".dropdown").style.transform = "translateY(0)";
        };
        window.cancel = () => {
          document.querySelector(".dropdown").style.transform =
            "translateY(-110%)";
        };

        // Theme Toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
          htmlElement.setAttribute('data-theme', 'dark');
        }
        
        // Toggle theme on button click
        if (themeToggle) {
          themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            if (newTheme === 'dark') {
              htmlElement.setAttribute('data-theme', 'dark');
            } else {
              htmlElement.removeAttribute('data-theme');
            }
            localStorage.setItem('theme', newTheme);
          });
        }

        // Add scroll event for active nav highlighting
        window.addEventListener("scroll", highlightActiveNav);

        // Logic for all modal pop-ups
        const allModalButtons = document.querySelectorAll(
          "[data-modal-target]"
        );
        const modalOverlay = document.getElementById("modal-overlay");
        const openModal = (modal) => {
          if (modal) {
            modal.classList.add("active");
            modalOverlay.classList.add("active");
          }
        };
        const closeModal = () => {
          const activeModal = document.querySelector(".modal.active");
          if (activeModal) {
            activeModal.classList.remove("active");
            modalOverlay.classList.remove("active");
          }
        };
        allModalButtons.forEach((button) =>
          button.addEventListener("click", () => {
            openModal(document.querySelector(button.dataset.modalTarget));
          })
        );
        if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
        document
          .querySelectorAll(".close-btn")
          .forEach((btn) => btn.addEventListener("click", closeModal));

        // Logic for all filterable sections (Timeline, Skills, etc.)
        const setupFilter = (containerSelector, btnSelector, itemSelector) => {
          const container = document.querySelector(containerSelector);
          if (!container) return;
          container.addEventListener("click", (e) => {
            if (!e.target.matches(btnSelector)) return;
            container
              .querySelectorAll(btnSelector)
              .forEach((btn) => btn.classList.remove("active"));
            e.target.classList.add("active");
            const filter = e.target.dataset.filter;
            container.querySelectorAll(itemSelector).forEach((item) => {
              item.style.display =
                filter === "all" || item.dataset.category === filter
                  ? "block"
                  : "none";
            });
            if (window.AOS) AOS.refresh();
          });
        };
        setupFilter(".skills-left-panel", ".skill-filter-btn", ".skill-bubble");
        setupFilter(
          ".experience-container",
          ".exp-filter-btn",
          ".experience-item"
        );

        // Logic for the interactive Skills Info Box
        const skillInfoBox = document.getElementById("skill-info-box");
        const skillCloud = document.querySelector(".skill-cloud");
        if (skillInfoBox && skillCloud) {
          skillCloud.addEventListener("click", (e) => {
            if (!e.target.matches(".skill-bubble")) return;
            skillInfoBox.innerHTML = `<h3>${e.target.textContent}</h3><p>${e.target.dataset.tooltip}</p>`;
            skillCloud
              .querySelectorAll(".skill-bubble")
              .forEach((b) => b.classList.remove("active"));
            e.target.classList.add("active");
          });
        }
      }

      // --- PART 4: BLOG-SPECIFIC FUNCTIONS ---

      // Fetches posts you wrote in your Sanity Studio
      async function fetchSanityPosts(client) {
        try {
          const query = `*[_type == "post"]{ _id, title, "imageUrl": mainImage.asset->url, publishedAt, "excerpt": pt::text(body), "slug": slug.current, source }`;
          const posts = await client.fetch(query);
          return posts.map((p) => ({ ...p, source: p.source || "sanity" })); // Add source for identification
        } catch (error) {
          console.error("Sanity fetch failed:", error);
          return []; // Return empty array on failure
        }
      }

      // --- PART 5: PORTFOLIO CONTENT FUNCTIONS ---

      // Renders About section stat cards dynamically — only shows cards with count >= 1
      function renderAboutStats({ projects, experiences, scholarships, publications, presentations, webinars }) {
        const container = document.getElementById('about-stats');
        if (!container) return;

        const statConfig = [
          { data: projects, icon: 'fa-solid fa-flask-vial', label: 'Research Projects', href: '#projects', suffix: '+' },
          { data: experiences.filter(e => e.category === 'internship'), icon: 'fa-solid fa-briefcase', label: 'Internships', href: '#experience', suffix: '+' },
          { data: scholarships, icon: 'fa-solid fa-trophy', label: 'Scholarships & Awards', href: '#scholarship', suffix: '' },
          { data: publications, icon: 'fa-solid fa-book-open', label: 'Publications', href: '#publications', suffix: '' },
          { data: presentations, icon: 'fa-solid fa-chalkboard-user', label: 'Presentations', href: '#presentations', suffix: '' },
          { data: webinars, icon: 'fa-solid fa-video', label: 'Webinars', href: '#webinars', suffix: '' },
        ];

        const visible = statConfig.filter(s => s.data.length > 0);
        container.innerHTML = '';

        visible.forEach((stat, i) => {
          const card = document.createElement('a');
          card.href = stat.href;
          card.className = 'stat-card';
          card.setAttribute('data-aos', 'fade-up');
          card.setAttribute('data-aos-delay', String(i * 100));
          card.innerHTML = `
            <div class="stat-icon"><i class="${stat.icon}"></i></div>
            <span class="stat-number">0</span>
            <span class="stat-label">${stat.label}</span>
          `;
          container.appendChild(card);

          // Count-up animation
          const numEl = card.querySelector('.stat-number');
          const value = stat.data.length;
          const suffix = stat.suffix;
          const duration = 1200;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            numEl.textContent = Math.floor(progress * value) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        });
      }

      // Fetches skills
      async function fetchSkills(client) {
        try {
          const query = `*[_type == "skill"] | order(order asc){ _id, name, description, category, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Skills fetch failed:", error);
          return [];
        }
      }

      // Fetches experience items
      async function fetchExperiences(client) {
        try {
          const query = `*[_type == "experience"] | order(order desc){ _id, position, dates, organization, description, category, icon, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Experiences fetch failed:", error);
          return [];
        }
      }

      // Fetches scholarships/awards
      async function fetchScholarships(client) {
        try {
          const query = `*[_type == "scholarship"] | order(order asc){ _id, title, level, description, featured, icon, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Scholarships fetch failed:", error);
          return [];
        }
      }

      // Fetches volunteering activities
      async function fetchVolunteers(client) {
        try {
          const query = `*[_type == "volunteer"] | order(order desc){ _id, role, organization, dates, description, icon, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Volunteers fetch failed:", error);
          return [];
        }
      }

      // Fetches featured projects
      async function fetchFeaturedProjects(client) {
        try {
          const query = `*[_type == "project" && featured == true] | order(order desc){ _id, title, description, "imageUrl": image.asset->url, tags }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Featured projects fetch failed:", error);
          return [];
        }
      }

      // Fetches publications
      async function fetchPublications(client) {
        try {
          const query = `*[_type == "publication"] | order(order desc){ _id, title, authors, journal, volume, pages, year, doi, link, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Publications fetch failed:", error);
          return [];
        }
      }

      // Fetches certifications
      async function fetchCertifications(client) {
        try {
          const query = `*[_type == "certification"] | order(order desc){ _id, title, organization, keySkills, certificateLink, completionDate, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Certifications fetch failed:", error);
          return [];
        }
      }

      // Fetches presentations
      async function fetchPresentations(client) {
        try {
          const query = `*[_type == "presentation"] | order(order desc){ _id, title, type, event, description, detailsLink, date, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Presentations fetch failed:", error);
          return [];
        }
      }

      // Fetches webinars
      async function fetchWebinars(client) {
        try {
          const query = `*[_type == "webinar"] | order(order desc){ _id, title, host, topic, link, date, order }`;
          return await client.fetch(query);
        } catch (error) {
          console.error("Webinars fetch failed:", error);
          return [];
        }
      }

      // Rendering functions
      function renderSkills(skills) {
        const container = document.querySelector(".skill-cloud");
        if (!container) return;
        container.innerHTML = "";
        skills.forEach((skill) => {
          const html = `
            <div class="skill-bubble" data-category="${skill.category}" data-aos="zoom-in" data-tooltip="${skill.description}">
              ${skill.name}
            </div>
          `;
          container.insertAdjacentHTML("beforeend", html);
        });
      }

      function renderExperiences(experiences) {
        const container = document.querySelector(".experience-list");
        if (!container) return;
        container.innerHTML = "";
        experiences.forEach((exp, index) => {
          const desc = exp.description
            .map((item) => `<li>${item}</li>`)
            .join("");
          const html = `
            <div class="experience-item" data-category="${exp.category}" data-aos="fade-up">
              <div class="experience-header">
                <h4>${exp.position}</h4>
                <span class="experience-dates">${exp.dates}</span>
              </div>
              <p class="experience-org">${exp.organization}</p>
              <ul>${desc}</ul>
            </div>
          `;
          container.insertAdjacentHTML("beforeend", html);
        });
      }

      function renderScholarships(scholarships) {
        const featuredContainer = document.querySelector(".featured-award");
        const secondaryContainer = document.querySelector(
          ".secondary-awards-grid"
        );
        if (!featuredContainer || !secondaryContainer) return;

        const featured = scholarships.find((s) => s.featured);
        if (featured) {
          const html = `
            <div class="award-icon featured-icon">
              <i class="${featured.icon}"></i>
            </div>
            <h3 class="award-title">${featured.title}</h3>
            <p class="award-level">${featured.level}</p>
            <p class="award-description">${featured.description}</p>
          `;
          featuredContainer.innerHTML = html;
        }

        secondaryContainer.innerHTML = "";
        const secondary = scholarships.filter((s) => !s.featured);
        secondary.forEach((scholarship, index) => {
          const html = `
            <div class="secondary-award" data-aos="fade-up" data-aos-delay="${
              100 + index * 100
            }">
              <div class="award-icon">
                <i class="${scholarship.icon}"></i>
              </div>
              <h4 class="award-title">${scholarship.title}</h4>
              <p class="award-level">${scholarship.level}</p>
            </div>
          `;
          secondaryContainer.insertAdjacentHTML("beforeend", html);
        });
      }

      function renderVolunteers(volunteers) {
        const container = document.querySelector(".volunteering-grid");
        if (!container) return;
        container.innerHTML = "";
        volunteers.forEach((volunteer, index) => {
          const desc = volunteer.description
            .map((item) => `<li>${item}</li>`)
            .join("");
          const html = `
            <div class="volunteer-card" data-aos="fade-up" data-aos-delay="${
              index * 100
            }">
              <div class="volunteer-icon">
                <i class="${volunteer.icon}"></i>
              </div>
              <div class="volunteer-header">
                <h3>${volunteer.role}</h3>
                <p class="volunteer-org">${volunteer.organization}</p>
                <span class="volunteer-dates">${volunteer.dates}</span>
              </div>
              <div class="volunteer-body">
                <ul>${desc}</ul>
              </div>
            </div>
          `;
          container.insertAdjacentHTML("beforeend", html);
        });
      }

      function renderFeaturedProjects(projects) {
        const container = document.querySelector(".project-grid");
        if (!container) return;
        container.innerHTML = "";
        projects.forEach((project, index) => {
          const tagsHtml = project.tags
            .map((tag) => `<span>${tag}</span>`)
            .join("");
          const imageUrl =
            project.imageUrl || "assets/images/project-placeholder.png";
          const html = `
            <a href="projects.html" class="project-preview-card" data-aos="fade-up" data-aos-delay="${
              index * 100
            }">
              <img src="${imageUrl}" alt="${project.title}" />
              <div class="preview-card-content">
                <h4>${project.title}</h4>
                <div class="card-tags">${tagsHtml}</div>
              </div>
            </a>
          `;
          container.insertAdjacentHTML("beforeend", html);
        });
      }

      function renderPublications(publications) {
        const container = document.querySelector("#publications .container");
        if (!container || publications.length === 0) return;

        let html =
          '<h2 class="section-title">Publications</h2><ul class="publication-list" style="max-width: 800px; margin: 0 auto; padding: 20px;">';
        publications.forEach((pub) => {
          const citation = `${pub.authors}. ${pub.title}. <em>${pub.journal}</em>`;
          const volumePages = pub.volume
            ? ` ${pub.volume}:${pub.pages}`
            : pub.pages
            ? ` ${pub.pages}`
            : "";
          const doiLink = pub.doi
            ? `. DOI: <a href="https://doi.org/${pub.doi}" target="_blank">${pub.doi}</a>`
            : "";
          const fullCitation = `${citation}${volumePages}. (${pub.year})${doiLink}`;

          html += `<li style="margin-bottom: 15px; line-height: 1.6;">${fullCitation}</li>`;
        });
        html += "</ul>";

        container.innerHTML = html;
      }
      // Fetches posts from your Medium feed
      async function fetchMediumPosts() {
        try {
          const apiUrl =
            "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent("https://medium.com/feed/@subhadipjana1409");
          const res = await fetch(apiUrl);
          if (!res.ok) return []; // Fail gracefully
          const data = await res.json();
          return data.items.map((item, index) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description;
            const imageTag = tempDiv.querySelector("img");
            const imageUrl = imageTag ? imageTag.src : null;
            return {
              _id: `medium_${index}`,
              title: item.title,
              link: item.link,
              imageUrl,
              publishedAt: new Date(item.pubDate).toISOString(),
              excerpt: tempDiv.textContent.substring(0, 150) + "...",
              source: "medium",
            };
          });
        } catch (e) {
          console.error("Medium fetch failed:", e);
          return []; // Return empty array on failure
        }
      }
      // Creates the HTML string for a single blog card
      function createPostCardHTML(post) {
        const postLink =
          post.source === "medium" ? post.link : `blog.html?slug=${post.slug}`;
        const imageUrl =
          post.imageUrl || "https://via.placeholder.com/800x600?text=Article";
        const postDate = new Date(post.publishedAt).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long", day: "numeric" }
        );
        const excerpt =
          (post.excerpt || "Read more...").substring(0, 150) + "...";
        const sourceInfo =
          post.source === "medium"
            ? '<span><i class="fa-brands fa-medium"></i> On Medium</span>'
            : '<span><i class="fa-solid fa-pen"></i> Original Post</span>';
        return `
            <div class="blog-card" data-aos="fade-up">
                <a href="${postLink}" class="blog-card-img" target="_blank" rel="noopener noreferrer"><img src="${imageUrl}" alt="Thumbnail for ${
          post.title || ""
        }"></a>
                <div class="blog-card-content">
                    <div class="blog-meta">${sourceInfo}    <span><i class="fa-regular fa-calendar"></i> ${postDate}</span></div>
                    <h3 class="blog-title"><a href="${postLink}" target="_blank" rel="noopener noreferrer">${
          post.title || "Untitled"
        }</a></h3>
                    <p class="blog-excerpt">${excerpt}</p>
                    <div class="blog-card-footer">
                        <div class="clap-container" data-id="${
                          post._id
                        }"><button class="clap-btn">👏</button><span class="clap-count">0</span></div>
                        <div class="share-links">
                            <a href="#" class="share-twitter" target="_blank" aria-label="Share on Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="#" class="share-linkedin" target="_blank" aria-label="Share on LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
      }
      // Takes a list of posts and displays them in the provided container
      function renderBlogCards(posts, container) {
        if (!container) return;
        container.innerHTML = ""; // Clear container
        if (!posts || posts.length === 0) {
          container.innerHTML =
            '<p style="text-align:center; width:100%;">No articles to display.</p>';
          return;
        }
        posts.forEach((post) => {
          const cardHTML = createPostCardHTML(post);
          container.insertAdjacentHTML("beforeend", cardHTML);
        });
        attachInteractivityToCards();
        if (window.AOS)
          setTimeout(() => {
            AOS.refresh();
          }, 100);
      }
      // Makes the clap and share buttons work after they've been rendered
      function attachInteractivityToCards() {
        document.querySelectorAll(".clap-container").forEach((container) => {
          const blogId = container.dataset.id;
          if (!blogId) return;
          const clapBtn = container.querySelector(".clap-btn");
          const countSpan = container.querySelector(".clap-count");
          if (localStorage.getItem(`clapped_${blogId}`) === "true")
            clapBtn.classList.add("clapped");
          countSpan.textContent = localStorage.getItem(`claps_${blogId}`) || 0;
          clapBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let isClapped = clapBtn.classList.toggle("clapped");
            let count = parseInt(countSpan.textContent, 10);
            count = isClapped ? count + 1 : count > 0 ? count - 1 : 0;
            countSpan.textContent = count;
            localStorage.setItem(`claps_${blogId}`, count);
            localStorage.setItem(`clapped_${blogId}`, isClapped);
          });
        });
        document.querySelectorAll(".blog-card").forEach((card) => {
          const titleEl = card.querySelector(".blog-title a");
          if (titleEl) {
            const title = encodeURIComponent(titleEl.textContent);
            const url = encodeURIComponent(titleEl.href);
            const twitterLink = card.querySelector(".share-twitter");
            if (twitterLink) {
              twitterLink.href = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
              twitterLink.onclick = (e) => e.stopPropagation();
            }
            const linkedinLink = card.querySelector(".share-linkedin");
            if (linkedinLink) {
              linkedinLink.href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
              linkedinLink.onclick = (e) => e.stopPropagation();
            }
          }
        });
      }
      // --- PART 6: MAIN EXECUTION FLOW ON PAGE LOAD ---
      document.addEventListener("DOMContentLoaded", async () => {
        setupTypedJs();
        setupStaticEventListeners();

        const sanityClient = createClient({
          projectId: "18tiebeg",
          dataset: "production",
          useCdn: true,
          apiVersion: "2024-06-19",
        });

        try {
          // Fetch all content in parallel
          const [
            skills,
            experiences,
            scholarships,
            volunteers,
            featuredProjects,
            publications,
            presentations,
            webinars,
            sanityPosts,
            mediumPosts,
          ] = await Promise.all([
            fetchSkills(sanityClient),
            fetchExperiences(sanityClient),
            fetchScholarships(sanityClient),
            fetchVolunteers(sanityClient),
            fetchFeaturedProjects(sanityClient),
            fetchPublications(sanityClient),
            fetchPresentations(sanityClient),
            fetchWebinars(sanityClient),
            fetchSanityPosts(sanityClient),
            fetchMediumPosts(),
          ]);

          // Render all sections
          renderAboutStats({ projects: featuredProjects, experiences, scholarships, publications, presentations, webinars });
          renderSkills(skills);
          renderExperiences(experiences);
          renderScholarships(scholarships);
          renderVolunteers(volunteers);
          renderFeaturedProjects(featuredProjects);
          renderPublications(publications);

          // Render blog cards
          allBlogPosts = [...sanityPosts, ...mediumPosts].sort(
            (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
          );
          const gridContainer = document.getElementById("latest-posts-grid");
          renderBlogCards(allBlogPosts.slice(0, 6), gridContainer); // Renders latest 6

          // Refresh AOS after dynamic content is loaded
          setTimeout(() => {
            if (window.AOS) AOS.refresh();
          }, 100);

          // If we arrived via hash navigation (back arrow), scroll to the target section
          // now that all dynamic content is rendered and section heights are correct.
          if (hasHashNav && savedHash.length > 1) {
            const hashId = decodeURIComponent(savedHash.substring(1));
            const target = document.getElementById(hashId);
            if (target) {
              // Restore hash for correct URL display, then scroll
              history.replaceState(null, '', savedHash);
              // Double-rAF ensures layout is fully recalculated after content render
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  target.scrollIntoView({ behavior: 'instant' });
                });
              });
            }
          }
        } catch (error) {
          console.error("Error loading portfolio content:", error);
          // Gracefully handle errors - content will stay with hardcoded fallback
        }
      });