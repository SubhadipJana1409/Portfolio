// COMPLETE content to migrate - ALL sections - INCLUDING ALL 20 ORIGINAL MILESTONES
const contentData = {
  skills: [
    {
      name: "Metagenomic Analysis",
      description:
        "Analyzed high-throughput sequencing data to assess aquatic microbial biodiversity and map environmental antibiotic resistance.",
      category: "bioinformatics",
    },
    {
      name: "Resistome Profiling",
      description:
        "Generated comprehensive resistome profiles from riverine eDNA using MetaPhlAn4 and KBase analysis platforms.",
      category: "bioinformatics",
    },
    {
      name: "R for Bioinformatics",
      description:
        "Developing and optimizing bioinformatic pipelines for microbial genomics and AMR gene identification.",
      category: "bioinformatics",
    },
    {
      name: "16S rRNA Analysis",
      description:
        "Used 16S rRNA gene sequencing for precise taxonomic identification of bioactive actinomycetes isolated from soil.",
      category: "bioinformatics",
    },
    {
      name: "Plasmid-Mediated AMR Analysis",
      description:
        "Investigated hospital effluent, performing plasmid isolation and restriction digestion to link plasmids to community-acquired AMR.",
      category: "bioinformatics",
    },
    {
      name: "Data Analytics & Visualization",
      description:
        "Utilized Advanced Excel, including pivot tables and macros, to clean datasets and create dashboards for trend analysis.",
      category: "bioinformatics",
    },
    {
      name: "PCR Protocol Design",
      description:
        "Designed and executed custom PCR protocols for the molecular detection of critical resistance genes like blaNDM.",
      category: "lab",
    },
    {
      name: "eDNA Extraction",
      description:
        "Proficient in extracting high-quality metagenomic DNA from challenging environmental samples, including river water.",
      category: "lab",
    },
    {
      name: "Antibiotic Susceptibility Testing",
      description:
        "Expertly performed Kirby-Bauer disk diffusion and MIC assays to profile resistance against ESBL-producing E. coli and Klebsiella.",
      category: "lab",
    },
    {
      name: "Selective Microbial Culturing",
      description:
        "Employed selective enrichment and direct plating to successfully isolate carbapenem- and penicillin-resistant bacteria.",
      category: "lab",
    },
    {
      name: "Phenotypic Characterization",
      description:
        "Applied a suite of biochemical assays (Gram staining, catalase, oxidase) for detailed bacterial classification.",
      category: "lab",
    },
    {
      name: "Phytochemical Screening",
      description:
        "Prepared ethanolic extracts from medicinal plants and evaluated their synergistic effects with commercial antibiotics.",
      category: "lab",
    },
    {
      name: "Anthelmintic Assays",
      description:
        "Conducted comparative studies on Acacia nilotica extracts, demonstrating 60% higher efficacy than the standard drug Albendazole.",
      category: "lab",
    },
    {
      name: "Scientific Writing & Presentation",
      description:
        "Authored dissertation sections and presented complex research findings in multiple academic seminars.",
      category: "professional",
    },
    {
      name: "Public Health Outreach",
      description:
        "As an ASM Global Outreach Volunteer, I develop WHO-aligned materials and promote antibiotic stewardship in community settings.",
      category: "professional",
    },
    {
      name: "Environmental Field Sampling",
      description:
        "Executed systematic water sample collection, including in-situ preservation and cold-chain transport to ensure sample integrity.",
      category: "professional",
    },
    {
      name: "Agricultural Science Consultation",
      description:
        "Gained grassroots insights by advising farmers on cropping cycles, soil health, and sustainable inputs like neem-based biopesticides.",
      category: "professional",
    },
  ],

  experiences: [
    {
      position:
        "Summer Research Intern (Bioinformatics and Microbial Genomics)",
      dates: "June 2025 – Jul 2025",
      organization: "BioPractify (Remote)",
      description: [
        "Conducted Illumina sequencing data analysis: performed quality control using FastQC, adapter trimming with Cutadapt, and genome assembly.",
        "Executed prokaryotic genome annotation using Prokka, identifying gene features and 16S rRNA copy numbers across multiple bacterial genomes.",
        "Performed BLAST-based genus-level classification using 16S sequences; generated taxonomic profiles for eight bacterial isolates.",
        "Applied the Mann–Whitney U test to assess 16S rRNA copy number differences between bacterial groups; visualized results with plots.",
      ],
      category: "internship",
      icon: "fa-solid fa-microscope",
    },
    {
      position:
        "International Virtual Research Intern (Genomics and Bioinformatics)",
      dates: "June 2025 (Ongoing)",
      organization: "Genomac Institute Inc. (Remote)",
      description: [
        "Advanced training in genomic data analysis and bioinformatics pipelines.",
        "Developing expertise in next-generation sequencing data interpretation.",
      ],
      category: "internship",
      icon: "fa-solid fa-dna",
    },
    {
      position: "Data Analytics Intern",
      dates: "Jun 2020 – Jul 2020",
      organization: "Forage (Remote)",
      description: [
        "Analyzed and cleaned datasets using Microsoft Excel for actionable insights.",
        "Applied formulas and pivot tables for data summarization and created dashboards for visual reporting.",
        "Automated tasks using macros to streamline data workflows.",
      ],
      category: "internship",
      icon: "fa-solid fa-chart-line",
    },
    {
      position: "Dissertation Student",
      dates: "Mar 2024 – Jul 2024",
      organization: "Omics Lab, University of North Bengal",
      description: [
        "Conducted a culture-based and eDNA metagenomic study on antibiotic resistance in the Mahananda River.",
        "Designed and executed PCR protocols for detection of resistance genes (e.g., blaNDM) and analyzed sequencing outputs using MetaPhlAn4.",
        "Drafted dissertation sections and presented findings in departmental seminars, enhancing scientific communication skills.",
      ],
      category: "research",
      icon: "fa-solid fa-flask",
    },
    {
      position: "Project Assistant",
      dates: "Jun 2019 – Jun 2019",
      organization:
        "Karry Mullis Molecular Biology Lab, Panskura Banamali College",
      description: [
        "Conducted comparative study on the anthelmintic effects of Acacia nilotica extracts; observed 60% higher efficacy vs control (Albendazole).",
        "Compared extract efficacy with standard drug Albendazole.",
        "Conducted phytochemical screening of Acacia nilotica.",
      ],
      category: "research",
      icon: "fa-solid fa-flask",
    },
    {
      position: "Subject Matter Expert",
      dates: "Aug 2024 – Present",
      organization: "Course Hero",
      description: [
        "Provide academic assistance in biotechnology and life sciences subjects.",
        "Create high-quality, accurate explanations and solutions for complex topics.",
      ],
      category: "professional",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      position: "Agricultural Input Retail Associate",
      dates: "Mar 2019 – Nov 2022 & Aug 2024 – Present",
      organization: "Family-Run Fertilizer Shop (Self-Employed)",
      description: [
        "Gained grassroots insights into fertilizer use, pest management, and farmer decision-making.",
        "Observed the effects of government subsidy schemes and market fluctuations on purchasing behavior.",
        "Facilitated discussions with farmers about sustainable alternatives, soil health, and long-term productivity.",
      ],
      category: "professional",
      icon: "fa-solid fa-seedling",
    },
  ],

  scholarships: [
    {
      title: "Swami Vivekananda Merit-cum-Means Scholarship",
      level: "Postgraduate Level (2023 – 2024)",
      description:
        "Awarded for my M.Sc. studies, providing crucial support for my dissertation research on environmental antibiotic resistance at the University of North Bengal.",
      featured: true,
      icon: "fa-solid fa-trophy",
    },
    {
      title: "Swami Vivekananda Merit-cum-Means Scholarship",
      level: "Undergraduate Level (2019 – 2022)",
      description: "Merit-based scholarship covering academic expenses.",
      featured: false,
      icon: "fa-solid fa-award",
    },
    {
      title: "Swami Vivekananda Merit-cum-Means Scholarship",
      level: "Higher Secondary Level (2017 – 2019)",
      description: "Merit-based scholarship for high school studies.",
      featured: false,
      icon: "fa-solid fa-award",
    },
  ],

  volunteers: [
    {
      role: "Global Outreach - Student Member",
      organization: "American Society for Microbiology",
      dates: "Aug 2024 - Present",
      description: [
        "Engaged in international scientific networking and knowledge-sharing through ASM Connect and webinars.",
        "Assisted in organizing microbiology awareness activities in academic and local community settings.",
        "Promoted antimicrobial resistance (AMR) awareness through digital campaigns aligned with WHO's AMR Week.",
        "Contributed to an ASM-supported public health initiative to increase awareness of antibiotic stewardship in India.",
      ],
      icon: "fa-solid fa-people-group",
    },
    {
      role: "Cadet",
      organization: "National Cadet Corps (NCC)",
      dates: "Jan 2015 - Jan 2017",
      description: [
        "Participated in extensive community development and social service activities, including adult education, tree plantation, and blood donation drives.",
        "Contributed to disaster management and relief efforts during natural calamities.",
        "Organized and led awareness campaigns on critical social issues like public health and environmental protection.",
        "Actively involved in national initiatives such as the Swachh Bharat Abhiyan (Clean India Mission).",
      ],
      icon: "fa-solid fa-shield-halved",
    },
  ],

  milestones: [
    {
      title: "Completed Secondary Education",
      description:
        "Graduated from Byabattarhat Adarsha High School (61.71%), establishing a strong foundation in core science subjects.",
      date: "2017",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Swami Vivekananda Scholarship (HS)",
      description:
        "Awarded throughout higher-secondary studies for academic excellence, covering tuition and expenses.",
      date: "2017 – 2019",
      category: "award",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "Completed Higher Secondary Education",
      description:
        "Graduated from Basudevpur Maharaj Nandakumar High School (81%), solidifying my decision to pursue biotechnology.",
      date: "2019",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Enrolled in B.Sc. Biotechnology",
      description:
        "Commenced undergraduate studies at Panskura Banamali College, gaining hands-on experience in microbial techniques and experimental design.",
      date: "2019",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Agricultural Input Retail Associate",
      description:
        "Managed a family-run fertilizer shop, advising farmers on nutrient blends, pest-management, and sustainable amendments.",
      date: "Mar 2019 – Nov 2022",
      category: "professional",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Project Assistant, Karry Mullis Lab",
      description:
        "Conducted in vitro phytochemical screening and anthelmintic assays of Acacia nilotica extracts.",
      date: "Jun 2019 – Aug 2019",
      category: "research",
      icon: "fa-solid fa-flask-vial",
    },
    {
      title: "Swami Vivekananda Scholarship (UG)",
      description:
        "Renewed scholarship supporting my B.Sc., enabling full engagement in research and coursework.",
      date: "2019 – 2022",
      category: "award",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "Remote Data Analytics Intern, Forage",
      description:
        "Cleaned and analyzed datasets using Excel (pivot tables, macros), built interactive dashboards, and automated workflows.",
      date: "Jun 2020 – Jul 2020",
      category: "professional",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Graduated B.Sc. in Biotechnology",
      description:
        "Conferred B.Sc. degree with honours from Panskura Banamali College.",
      date: "2022",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Commenced M.Sc. in Biotechnology",
      description:
        "Enrolled at the University of North Bengal, focusing on microbial genetics and planning a thesis on antibiotic-resistance.",
      date: "2022",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Swami Vivekananda Scholarship (PG)",
      description:
        "Awarded for my M.Sc. studies, supporting dissertation research on environmental antibiotic resistance.",
      date: "2023 – 2024",
      category: "award",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "Project: Screening Soil Isolates",
      description:
        "Isolated soil actinomycetes, performed agar-diffusion assays against MDR bacteria, and sequenced 16S rRNA for identification.",
      date: "2023",
      category: "research",
      icon: "fa-solid fa-flask-vial",
    },
    {
      title: "Project: AMR in Hospital Wastewater",
      description:
        "Collected effluent samples, isolated E. coli, extracted and characterized resistance plasmids, and correlated profiles with source data.",
      date: "2023",
      category: "research",
      icon: "fa-solid fa-flask-vial",
    },
    {
      title: "Project: Medicinal Plant Extracts",
      description:
        "Prepared extracts, determined MICs against ESBL-producing bacteria, and evaluated synergy with standard antibiotics.",
      date: "2023",
      category: "research",
      icon: "fa-solid fa-flask-vial",
    },
    {
      title: "Dissertation Student, Omics Lab",
      description:
        "Conducted culture-based and eDNA metagenomic analyses; designed PCR protocols for blaNDM detection; profiled the riverine resistome using MetaPhlAn4.",
      date: "Mar 2024 – Jul 2024",
      category: "research",
      icon: "fa-solid fa-flask-vial",
    },
    {
      title: "Graduated M.Sc. in Biotechnology",
      description:
        "Conferred M.Sc. degree with honours from University of North Bengal, focusing on microbial genetics and completed a thesis on antibiotic-resistance.",
      date: "2024",
      category: "academic",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Agricultural Input Retail Associate",
      description:
        "Resumed business operations, refining procurement, expanding advisory services, and integrating digital record-keeping.",
      date: "Aug 2024 – Present",
      category: "professional",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "ASM Global Outreach Volunteer",
      description:
        "Organized antibiotic resistance awareness campaigns, developing WHO-aligned educational materials and coordinating workshops.",
      date: "2024 – Present",
      category: "professional",
      icon: "fa-solid fa-users",
    },
    {
      title: "Remote Research Intern, BioPractify",
      description:
        "Developing and optimizing bioinformatic pipelines for microbial genomics and AMR gene identification.",
      date: "Jun 2025 – Present",
      category: "professional",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Virtual Research Intern, Genomac Institute",
      description:
        "Participating in large-scale metagenomic dataset analyses and computational modeling of microbial communities.",
      date: "Jun 2025 – Present",
      category: "professional",
      icon: "fa-solid fa-briefcase",
    },
  ],

  projects: [
    {
      title: "AMR in the Mahananda River",
      description:
        "This M.Sc. dissertation comprehensively assesses antibiotic resistance (AMR), particularly carbapenem-resistant strains, in the Mahananda River. Utilizing both culture-based and eDNA metagenomic methods, the study identifies the prevalence of resistant bacteria and diverse antibiotic resistance genes (ARGs).",
      tags: ["Metagenomics", "Microbiology", "Antibiotic Resistance"],
      featured: true,
      order: 1,
    },
    {
      title: "Anthelmintic Activity of Acacia nilotica",
      description:
        "An in-vitro study investigating the phytochemical profile and anthelmintic efficacy of Acacia nilotica extracts against Pheretima posthuma.",
      tags: ["Phytochemistry", "Pharmacology", "In-Vitro Assays"],
      featured: true,
      order: 2,
    },
    {
      title: "Screening Soil Isolates for Antibiotic Production",
      description:
        "A bioprospecting project to isolate and screen soil bacteria for antimicrobial compounds effective against multidrug-resistant pathogens.",
      tags: ["Bioprospecting", "Antimicrobial Screening", "Drug Discovery"],
      featured: true,
      order: 3,
    },
    {
      title: "Plasmid-Mediated AMR in Hospital Wastewater",
      description:
        "An investigation into plasmid-mediated antibiotic resistance in E. coli isolated from hospital effluents, linking clinical waste to environmental AMR.",
      tags: [
        "Microbial Genetics",
        "Plasmid Analysis",
        "Wastewater Surveillance",
      ],
      featured: false,
      order: 4,
    },
    {
      title: "Antimicrobial Properties of Medicinal Plant Extracts",
      description:
        "A study exploring the antimicrobial activity of plant extracts against ESBL-producing strains of E. coli and Klebsiella pneumoniae.",
      tags: ["Natural Product Research", "Phytochemistry", "Microbiology"],
      featured: false,
      order: 5,
    },
  ],
};
