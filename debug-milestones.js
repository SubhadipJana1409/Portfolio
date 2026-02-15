#!/usr/bin/env node

const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "18tiebeg",
  dataset: "production",
  useCdn: false, // Use false for write operations
  apiVersion: "2024-06-19",
  token:
    "skLkobfmi4LpT4llA7OpDInyu6ynSOqdrmSxJdQWT8A40Cl3BnFLHik0HD8acGfBj9VUedBj14WrncaUcgtAn5gR4vWjuZnySQStfhBuapEyAiFrsPqR3iC0WkO1rqc50vnuJpNmRL4n9XnO4i4WHaU268h8FYBefwNvzMKWX0LnKiPMlspy",
});

// EXACT 19 MILESTONES from original HTML
const milestones19 = [
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
]; // Total: 19 milestones (excluding Genomac as user said 19)

async function debugMigrateMilestones() {
  console.log("🔍 DEBUGGING MILESTONE MIGRATION...\n");
  console.log(`📊 Found ${milestones19.length} milestones to migrate\n`);

  try {
    // Clear existing milestones
    console.log("🧹 Clearing existing milestones...");
    await client.delete({ query: `*[_type == "milestone"]` });

    // Migrate the 19 milestones one by one
    console.log("\n📅 Migrating 19 ORIGINAL MILESTONES:\n");
    for (let i = 0; i < milestones19.length; i++) {
      const milestone = milestones19[i];
      const doc = {
        _type: "milestone",
        title: milestone.title,
        description: milestone.description,
        date: milestone.date,
        category: milestone.category,
        icon: milestone.icon,
        order: i + 1,
      };

      await client.create(doc);
      console.log(`  ✅ ${i + 1}. ${milestone.title} (${milestone.date})`);
    }

    console.log("\n🎉 SUCCESS: All 19 milestones migrated!");
    const count = await client.fetch(`count(*[_type == "milestone"])`);
    console.log(`📊 Database now contains: ${count} milestones`);
  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
  }
}

debugMigrateMilestones();
