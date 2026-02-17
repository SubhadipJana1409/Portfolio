// Migration script to populate all 5 research projects into Sanity
// Run with: npx sanity exec scripts/migrate-projects.mjs --with-user-token

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "18tiebeg",
  dataset: "production",
  apiVersion: "2024-06-19",
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

// Helper to generate unique keys for Portable Text blocks
let keyCounter = 0;
function key() {
  return `k${Date.now().toString(36)}${(keyCounter++).toString(36)}`;
}

// Helper functions to build Portable Text blocks
function span(text, marks = []) {
  return { _type: "span", _key: key(), text, marks };
}

function heading(level, text) {
  return {
    _type: "block",
    _key: key(),
    style: `h${level}`,
    markDefs: [],
    children: [span(text)],
  };
}

function para(...children) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: children,
  };
}

function bulletItem(children, level = 1) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level,
    markDefs: [],
    children: Array.isArray(children) ? children : [span(children)],
  };
}

function numberItem(children, level = 1) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "number",
    level,
    markDefs: [],
    children: Array.isArray(children) ? children : [span(children)],
  };
}

// =================================================================
// PROJECT 1: AMR in the Mahananda River
// =================================================================
const project1 = {
  _type: "project",
  title: "AMR in the Mahananda River",
  fullTitle:
    "Comprehensive Assessment of Antibiotic Resistance in the Mahananda River",
  description:
    "This M.Sc. dissertation comprehensively assesses antibiotic resistance (AMR), particularly carbapenem-resistant strains, in the Mahananda River, a vital water source in Siliguri, India...",
  tags: ["Metagenomics", "Microbiology", "Antibiotic Resistance"],
  featured: true,
  order: 5,
  detailedDescription: [
    heading(4, "Short Summary"),
    para(
      span(
        "This M.Sc. dissertation comprehensively assesses antibiotic resistance (AMR), particularly carbapenem-resistant strains, in the Mahananda River. Utilizing both culture-based and eDNA metagenomic methods, the study identifies the prevalence of resistant bacteria and diverse antibiotic resistance genes (ARGs), highlighting significant public health risks from environmental contamination."
      )
    ),
    heading(4, "Project Objectives"),
    numberItem(
      "To create a database on the abundance of culturable antibiotic-resistant bacteria with special emphasis on carbapenem-resistant strains."
    ),
    numberItem(
      "To isolate and screen carbapenem-resistant and metallo-\u03B2-lactamase (MBL) producing bacterial isolates."
    ),
    numberItem(
      "To explore the river\u2019s antibiotic resistome through whole-metagenome analysis of collected water samples."
    ),
    heading(4, "Methods"),
    para(
      span(
        "The study utilized both culture-dependent and culture-independent methodologies."
      )
    ),
    para(span("Culture-Dependent Methods:", ["strong"])),
    bulletItem([
      span("Sample Collection: ", ["strong"]),
      span(
        "Water samples were collected from a selected middle stream section of the Mahananda River over a three-month period at distinct morning and evening times to assess diurnal variation. Samples were transported in sterilized screw-capped bottles in an icebox to preserve microbial composition."
      ),
    ]),
    bulletItem([
      span("Isolation of Carbapenem-Resistant Bacteria: ", ["strong"]),
      span(
        "Samples underwent 10-fold serial dilutions and were plated on Luria Bertani (LB) agar supplemented with Imipenem-Cilastatin (IC). Morphologically distinct colonies were selected for further analysis."
      ),
    ]),
    bulletItem([
      span("Isolation of Benzylpenicillin-Resistant Bacteria: ", ["strong"]),
      span(
        "Samples were inoculated into an enrichment medium containing benzylpenicillin potassium salt as the sole carbon source to isolate distinct colonies."
      ),
    ]),
    bulletItem([
      span(
        "Screening for Metallo-\u03B2-Lactamase (MBL) Producers: ",
        ["strong"]
      ),
      span(
        "MBL production was screened using the EDTA assay method. Out of 57 initial isolates, 12 were confirmed as MBL producers."
      ),
    ]),
    bulletItem([
      span("Phenotypic Characterization: ", ["strong"]),
      span(
        "Selected isolates underwent biochemical tests (KOH string test, catalase, oxidase, indole, citrate utilization) following Bergey\u2019s Manual of Systematic Bacteriology."
      ),
    ]),
    bulletItem([
      span("Antibiotic Susceptibility Profile: ", ["strong"]),
      span(
        "Susceptibility of MBL-producing strains to a panel of 25 antibiotics was determined using the disk diffusion method, following EUCAST guidelines."
      ),
    ]),
    bulletItem([
      span(
        "Multiple Antibiotic Resistance (MAR) Index Determination: ",
        ["strong"]
      ),
      span(
        "The MAR index was calculated for each isolate, with values >20% indicating high-risk contamination sources."
      ),
    ]),
    para(span("Culture-Independent Methods (Metagenomics):", ["strong"])),
    bulletItem([
      span("Metagenome Extraction: ", ["strong"]),
      span(
        "DNA was extracted from mixed water samples using the QIAGEN DNeasy Power Water Kit."
      ),
    ]),
    bulletItem([
      span("Agarose Gel Electrophoresis: ", ["strong"]),
      span(
        "Used to assess the quality of extracted metagenomic DNA."
      ),
    ]),
    bulletItem([
      span("Metagenome Sequencing: ", ["strong"]),
      span(
        "DNA that passed Quality Control (QC) was fragmented and sequenced using next-generation sequencing platforms (e.g., Illumina)."
      ),
    ]),
    bulletItem([
      span("Metagenome Analysis:", ["strong"]),
    ]),
    bulletItem([
      span("Taxonomy Profiling: ", ["strong"]),
      span("Performed using "),
      span("MetaPhlAn4", ["code"]),
      span(
        " to profile microbial community composition at the species level."
      ),
    ], 2),
    bulletItem([
      span("Detection of ARGs and MGEs: ", ["strong"]),
      span("Data was analyzed using the DOE Systems Biology Knowledgebase ("),
      span("KBase", ["code"]),
      span("), involving trimming reads with "),
      span("Trimmomatic", ["code"]),
      span(", assembling with "),
      span("metaSPAdes", ["code"]),
      span(", and annotating with "),
      span("RASTtk", ["code"]),
      span("."),
    ], 2),
    heading(4, "Key Findings & Outcome"),
    bulletItem([
      span("Prevalence of Carbapenem-Resistant Bacteria: ", ["strong"]),
      span(
        "A significant presence was detected, with the APMG02(A) sample showing the highest incidence at "
      ),
      span("1.63%", ["strong"]),
      span("."),
    ]),
    bulletItem([
      span("MBL-Producing Strains: ", ["strong"]),
      span("Out of 57 selected isolates, "),
      span("12 (21.05%)", ["strong"]),
      span(
        " were confirmed as MBL-producing strains, predominantly Gram-negative bacteria, indicating a high prevalence of this resistance mechanism."
      ),
    ]),
    bulletItem([
      span("Biochemical Characterization: ", ["strong"]),
      span(
        "Most MBL producers were Gram-negative (9/12), oxidase-positive (10/12), and catalase-positive (8/12), suggesting adaptation to aerobic river conditions and reflecting a complex microbial community."
      ),
    ]),
    bulletItem([
      span("High Antibiotic Resistance: ", ["strong"]),
      span(
        "All 12 strains displayed uniform resistance to critical \u03B2-lactam antibiotics and imipenem. Some strains were alarmingly resistant to last-resort antibiotics like vancomycin and linezolid."
      ),
    ]),
    bulletItem([
      span("Multiple Antibiotic Resistance (MAR) Index: ", ["strong"]),
      span(
        "All tested MBL-positive isolates showed MAR index values >20%, indicating high-risk contamination sources. Five strains exhibited very high multiple drug resistance (MAR Index \u2265 60%), with one reaching "
      ),
      span("84%", ["strong"]),
      span("."),
    ]),
    bulletItem([
      span("Categorization of Resistant Strains: ", ["strong"]),
      span("Most isolates (10/12) were classified as extensively drug-resistant ("),
      span("XDR", ["strong"]),
      span("), with only two falling into the multi-drug resistant ("),
      span("MDR", ["strong"]),
      span(") group. No pan-drug resistant (PDR) strains were identified."),
    ]),
    bulletItem([
      span("ARG & MGE Profile: ", ["strong"]),
      span(
        "Metagenomic analysis revealed a diverse range of ARGs (for aminoglycosides, macrolides, \u03B2-lactams, quinolones) and a high prevalence of mobile genetic elements like "
      ),
      span("Integron integrase IntI1", ["strong"]),
      span(
        " and conjugative transposon proteins, underscoring their critical role in horizontal gene transfer."
      ),
    ]),
  ],
};

// =================================================================
// PROJECT 2: Anthelmintic Activity of Acacia nilotica
// =================================================================
const project2 = {
  _type: "project",
  title: "Anthelmintic Activity of Acacia nilotica",
  fullTitle:
    "In-Vitro Phytochemical Analysis and Anthelmintic Activity of Acacia nilotica",
  description:
    "Investigation of the phytochemical and anthelmintic potential of different extracts of Acacia nilotica leaves and flowers.",
  tags: ["Phytochemistry", "Pharmacology", "Natural Products"],
  featured: true,
  order: 4,
  detailedDescription: [
    heading(4, "Introduction"),
    para(
      span(
        "Helminthiasis, caused by various types of worms, is a widespread and hazardous human infection that can lead to internal organ damage, primarily spread through contaminated food. While synthetic drugs are available, they often come with various side effects. There is a growing need to develop efficient anti-helminthic agents from traditional medicine, particularly from plants, which are a valuable resource for tropical developing countries. Acacia nilotica has been historically recognized for its numerous therapeutic activities, including its efficacy against various pathogens and parasitic infections, with its root bark specifically used to cure such ailments. Based on its traditional use by villagers and tribal populations for common diseases, Acacia nilotica was selected for this experimental study. The project\u2019s comprehensive approach aims to contribute to the global effort to find new, effective drugs that can overcome the limitations of current synthetic treatments, particularly those without adverse side effects"
      )
    ),
    heading(4, "Objective"),
    para(
      span(
        "To investigate the phytochemical and anthelmintic potential of different extracts of Acacia nilotica leaves and flowers when applied to the Indian adult earthworm (Pheretima posthuma), which serves as an anatomical model for human roundworm parasites."
      )
    ),
    heading(4, "Methods"),
    para(span("The study employed the following methodologies:")),
    bulletItem([
      span("Material Collection & Preparation: ", ["strong"]),
      span(
        "Acacia nilotica samples (leaves and flowers) were collected from Purba Medinipur, West Bengal. They were shade-dried, crushed, and then subjected to Soxhlet extraction using methanol and water as solvents. The resulting extracts were concentrated using a rotary evaporator."
      ),
    ]),
    bulletItem([
      span("Experimental Model: ", ["strong"]),
      span("Indian adult earthworms ("),
      span("Pheretima posthuma", ["em"]),
      span(
        ") were chosen for the assay due to their physiological similarities to human roundworm parasites."
      ),
    ]),
    bulletItem([
      span("Anthelmintic Activity Assay: ", ["strong"]),
      span(
        "The prepared methanolic and aqueous extracts (at 50 mg/l and 100 mg/l) were tested against the earthworms. Albendazole (100 mg/ml) was used as the standard drug for comparison. The time taken for paralysis and death of the worms was carefully recorded for each group."
      ),
    ]),
    bulletItem([
      span("Phytochemical Analysis: ", ["strong"]),
      span(
        "A qualitative screening of the extracts was conducted to identify key plant compounds using standard methods:"
      ),
    ]),
    bulletItem([
      span("Alkaloid test: ", ["strong"]),
      span("Wagner\u2019s reagent test, indicated by a red-brown precipitate."),
    ], 2),
    bulletItem([
      span("Flavonoid test: ", ["strong"]),
      span(
        "Dilute ammonium and H\u2082SO\u2084 test, indicated by a yellow color."
      ),
    ], 2),
    bulletItem([
      span("Glycosides test: ", ["strong"]),
      span(
        "Ferric chloride and H\u2082SO\u2084 test, indicated by a brown ring."
      ),
    ], 2),
    bulletItem([
      span("Phenol test: ", ["strong"]),
      span(
        "Ferric chloride test, indicated by a blue or green color."
      ),
    ], 2),
    bulletItem([
      span("Terpenoid test: ", ["strong"]),
      span(
        "Chloroform and H\u2082SO\u2084 test, indicated by reddish-brown coloration."
      ),
    ], 2),
    bulletItem([
      span("Anthraquinone test: ", ["strong"]),
      span(
        "Dilute NaOH test, indicated by blue, green, or red coloration."
      ),
    ], 2),
    heading(4, "Key Findings & Outcome"),
    bulletItem([
      span("Effective Anthelmintic Activity: ", ["strong"]),
      span("Both the methanol and aqueous extracts of "),
      span("Acacia nilotica", ["em"]),
      span(" demonstrated significant anthelmintic activity against "),
      span("Pheretima posthuma", ["em"]),
      span("."),
    ]),
    bulletItem([
      span("Comparative Efficacy: ", ["strong"]),
      span(
        "The study revealed nuanced differences in extract performance compared to the standard drug, Albendazole."
      ),
    ]),
    bulletItem([
      span("The "),
      span("aqueous extract (100 mg/ml)", ["strong"]),
      span(
        " resulted in a faster death time (39m 50s) than Albendazole (42m 28s)."
      ),
    ], 2),
    bulletItem([
      span("The "),
      span("methanolic extract (100 mg/ml)", ["strong"]),
      span(" exhibited the fastest paralysis time overall (20m 15s)."),
    ], 2),
    bulletItem([
      span("Phytochemical Constituents Identified: ", ["strong"]),
      span("The extracts were rich in bioactive compounds."),
    ]),
    bulletItem([
      span("Methanolic Extract: ", ["strong"]),
      span(
        "Tested positive for Alkaloids, Flavonoids, Phenol, Terpenoids, and Anthraquinones."
      ),
    ], 2),
    bulletItem([
      span("Aqueous Extract: ", ["strong"]),
      span(
        "Tested positive for Glycosides, Terpenoids, and Anthraquinones."
      ),
    ], 2),
    heading(4, "Conclusion"),
    para(
      span("The study confirmed the traditional use of "),
      span("Acacia nilotica", ["em"]),
      span(
        " in treating helminthiasis, demonstrating its potential as a source of new anthelmintic agents. The methanolic extract showed superior activity compared to the aqueous extract, particularly at the 100 mg/ml concentration. The presence of various phytoconstituents suggests that these compounds may contribute to the observed anthelmintic effects. The study concluded that "
      ),
      span("Acacia nilotica", ["em"]),
      span(
        " possesses promising phytoconstituents and significant anthelmintic activity against the Indian adult earthworm. The 100 mg/ml concentration of both methanolic and aqueous extracts yielded very satisfactory results for both paralysis and death times. This plant is considered to open a new avenue for drug researchers, offering potential for developing important drugs with fewer side effects."
      )
    ),
  ],
};

// =================================================================
// PROJECT 3: Screening Soil Isolates for Antibiotic Production
// =================================================================
const project3 = {
  _type: "project",
  title: "Screening Soil Isolates for Antibiotic Production",
  fullTitle:
    "Screening Soil Isolates for Antibiotic Production Against MDR Strains",
  description:
    "Isolation of soil-dwelling bacteria capable of producing antimicrobial compounds effective against MDR pathogens such as MRSA and ESBL-producing E. coli.",
  tags: ["Antibiotic Discovery", "Soil Microbiology", "MDR Pathogens"],
  featured: true,
  order: 3,
  detailedDescription: [
    heading(4, "1. Abstract"),
    para(
      span(
        "The rise of multidrug-resistant (MDR) bacterial pathogens has triggered a renewed global interest in natural product discovery, especially antibiotics from soil microorganisms. This project aimed to isolate soil-dwelling bacteria capable of producing antimicrobial compounds effective against MDR pathogens such as MRSA, ESBL-producing E. coli, and carbapenem-resistant Klebsiella pneumoniae. Using classical microbiological techniques, promising antibiotic-producing strains were screened and preliminarily characterized. Results demonstrated that soil remains a rich and largely untapped source of novel bioactive metabolites. The project also served as a practical and educational model for undergraduate research on antimicrobial resistance."
      )
    ),
    heading(4, "2. Introduction"),
    para(
      span(
        "Antibiotics revolutionized modern medicine, but their widespread misuse has led to the emergence of bacteria that are resistant to multiple drugs. MDR pathogens now threaten the effectiveness of standard treatments for infections. At the same time, the discovery rate of new antibiotics has declined sharply. Historically, many antibiotics have originated from soil bacteria, particularly actinomycetes like Streptomyces. This project was designed to revisit soil bioprospecting with a focus on discovering antibiotic-producing isolates capable of inhibiting MDR bacteria."
      )
    ),
    heading(4, "3. Objectives"),
    bulletItem(
      "To isolate soil bacteria from different natural environments."
    ),
    bulletItem(
      "To screen isolates for antibacterial activity against known MDR pathogens."
    ),
    bulletItem(
      "To characterize active isolates using basic morphological and biochemical techniques."
    ),
    bulletItem(
      "To evaluate soil as a potential source for discovering new antimicrobial agents."
    ),
    heading(4, "4. Materials and Methods"),
    para(
      span("4.1 Soil Sample Collection: ", ["strong"]),
      span(
        "Soil was collected from various habitats including agricultural fields, forest floors, and organic compost piles. Samples were air-dried and stored at 4\u00B0C."
      )
    ),
    para(
      span("4.2 Microbial Isolation: ", ["strong"]),
      span(
        "Serial dilution followed by spread plating was used on Nutrient Agar (NA), Starch Casein Agar (SCA), and Actinomycete Isolation Agar (AIA). Plates were incubated at 28\u201330\u00B0C for 5\u20137 days."
      )
    ),
    para(
      span("4.3 Morphological and Biochemical Characterization: ", ["strong"]),
      span(
        "Characterization included colony features, Gram staining, and catalase/oxidase tests. Growth patterns were noted to distinguish Streptomyces and Bacillus species."
      )
    ),
    para(
      span("4.4 Antibacterial Screening: ", ["strong"]),
      span(
        "Primary screening was done via the Cross-Streak Method. Secondary screening used the Agar Well Diffusion Assay, where zones of inhibition from cell-free supernatants were measured in mm."
      )
    ),
    para(
      span("4.5 Test Pathogens: ", ["strong"]),
      span(
        "Standard lab or clinical isolates included Escherichia coli (ESBL-producing), Staphylococcus aureus (MRSA), Klebsiella pneumoniae (carbapenem-resistant), and Pseudomonas aeruginosa."
      )
    ),
    heading(4, "5. Results"),
    bulletItem("Total isolates obtained: 50"),
    bulletItem("Preliminary active isolates: 12"),
    bulletItem(
      "Strong antimicrobial activity (zone \u2265 12 mm): 6 isolates"
    ),
    bulletItem(
      "Most active isolates were morphologically consistent with actinomycetes or Bacillus spp."
    ),
    bulletItem(
      "A forest soil isolate showed broad-spectrum activity against all tested MDR strains."
    ),
    bulletItem(
      "Pigment-producing isolates often correlated with positive inhibition results, suggesting secondary metabolite involvement."
    ),
    heading(4, "6. Discussion"),
    para(
      span(
        "Soil ecosystems, particularly in diverse and organic-rich environments, harbor a wealth of bioactive microbes. The ability of certain isolates to inhibit MDR pathogens suggests that they produce novel or underexplored antimicrobial compounds. The project also reinforced the usefulness of simple, low-cost screening techniques for identifying bioactive strains, making them ideal for undergraduate laboratories. Future work could involve molecular characterization (16S rRNA sequencing) and metabolite purification to identify the novel antibiotics produced."
      )
    ),
    heading(4, "7. Conclusion"),
    para(
      span(
        "This mini-project successfully demonstrated that soil microbes, particularly those from undisturbed environments, exhibit significant antimicrobial activity against MDR bacteria. Several isolates showed promising activity that could warrant further purification and chemical characterization, contributing to the broader effort of rediscovering natural antibiotics."
      )
    ),
    heading(4, "8. References"),
    numberItem(
      "Berdy, J. (2012). Thoughts and facts about antibiotics... The Journal of Antibiotics, 65(8), 385\u2013395."
    ),
    numberItem(
      "Wright, G. D. (2014). Something old, something new... Canadian Journal of Microbiology, 60(3), 147\u2013154."
    ),
    numberItem(
      "World Health Organization (2020). Global antimicrobial resistance... (GLASS) report."
    ),
    numberItem(
      "Demain, A. L. (1999). Pharmaceutically active secondary metabolites... Applied Microbiology and Biotechnology, 52(4), 455\u2013463."
    ),
  ],
};

// =================================================================
// PROJECT 4: Plasmid-Mediated AMR in Hospital Wastewater
// =================================================================
const project4 = {
  _type: "project",
  title: "Plasmid-Mediated AMR in Hospital Wastewater",
  fullTitle:
    "Plasmid-Mediated AMR in Environmental E. coli from Hospital Wastewater",
  description:
    "Investigation of plasmid-mediated antibiotic resistance in environmental E. coli isolates from hospital wastewater effluents.",
  tags: ["Molecular Biology", "AMR Surveillance", "Wastewater"],
  featured: true,
  order: 2,
  detailedDescription: [
    heading(4, "1. Abstract"),
    para(
      span(
        "Antimicrobial resistance (AMR) continues to rise globally, with hospital wastewater serving as a critical environmental reservoir for resistant bacteria and mobile genetic elements such as plasmids. This project investigated the presence of plasmid-mediated antibiotic resistance in environmental Escherichia coli isolates from hospital effluents. A combination of microbiological and molecular techniques was used to isolate, characterize, and test the resistance profiles of E. coli, with particular focus on plasmid carriage. Results confirmed the prevalence of multidrug-resistant strains and the role of plasmids in facilitating resistance gene dissemination, highlighting the need for stricter effluent management from healthcare facilities."
      )
    ),
    heading(4, "2. Introduction"),
    para(
      span(
        "Plasmids\u2014extrachromosomal DNA molecules capable of horizontal gene transfer\u2014play a key role in the spread of resistance genes among bacterial populations. Hospital wastewater contains not only pathogenic bacteria but also residual antibiotics, providing ideal conditions for resistance selection. In this context, E. coli serves as a model organism for tracking AMR in the environment due to its prevalence, ease of isolation, and role as a fecal indicator."
      )
    ),
    heading(4, "3. Objectives"),
    bulletItem(
      "To isolate and identify E. coli strains from hospital wastewater."
    ),
    bulletItem(
      "To determine their antibiotic susceptibility profiles."
    ),
    bulletItem(
      "To extract and characterize plasmid DNA from resistant isolates."
    ),
    bulletItem(
      "To establish whether the observed resistance is plasmid-mediated."
    ),
    heading(4, "4. Materials and Methods"),
    para(
      span("4.1 Sample Collection & Isolation: ", ["strong"]),
      span(
        "Hospital wastewater was collected and processed within 2 hours. Samples were plated on Eosin Methylene Blue (EMB) agar, and colonies with a characteristic metallic green sheen were selected. Confirmation was done using standard biochemical tests (IMViC, urease, catalase)."
      )
    ),
    para(
      span("4.2 Susceptibility Testing: ", ["strong"]),
      span(
        "The Kirby-Bauer disk diffusion method was used to test isolates against Ampicillin, Tetracycline, Cefotaxime, Ciprofloxacin, and Gentamicin, with results interpreted per CLSI guidelines."
      )
    ),
    para(
      span("4.3 Plasmid Analysis: ", ["strong"]),
      span(
        "Plasmid DNA was extracted from resistant isolates using an alkaline lysis method. Electrophoresis was performed on 1% agarose gel stained with ethidium bromide to visualize and estimate plasmid sizes."
      )
    ),
    heading(4, "5. Results"),
    bulletItem([
      span("A total of "),
      span("24 E. coli isolates", ["strong"]),
      span(" were confirmed from the collected samples."),
    ]),
    bulletItem([
      span("75% (18 isolates)", ["strong"]),
      span(
        " exhibited resistance to at least one tested antibiotic, with 10 isolates showing multidrug resistance."
      ),
    ]),
    bulletItem(
      "Plasmid DNA (ranging from 2\u201310 kb) was detected in 14 of the resistant isolates."
    ),
    bulletItem(
      "Post-curing experiments confirmed that resistance to ampicillin and tetracycline was plasmid-mediated in selected isolates."
    ),
    heading(4, "6. Discussion"),
    para(
      span(
        "The high prevalence of resistant E. coli in hospital wastewater confirms significant environmental exposure to antibiotic pressure. The identification of plasmid-borne resistance supports the critical role of horizontal gene transfer in MDR proliferation. These results have important implications for environmental AMR surveillance and suggest that wastewater from healthcare settings requires more stringent control measures before discharge."
      )
    ),
    heading(4, "7. Conclusion"),
    para(
      span(
        "This study reveals a high prevalence of plasmid-mediated antibiotic resistance in E. coli from hospital wastewater. The findings emphasize the importance of monitoring environmental reservoirs of AMR. On an educational level, this project provided a comprehensive research experience, combining classical microbiology with modern molecular diagnostics in a real-world context."
      )
    ),
    heading(4, "8. References"),
    numberItem(
      "World Health Organization. (2020). Global Action Plan on Antimicrobial Resistance."
    ),
    numberItem(
      "Martinez, J.L. (2009). Environmental pollution by antibiotics... Environmental Pollution, 157(11), 2893\u20132902."
    ),
    numberItem(
      "Sambrook, J., & Russell, D.W. (2001). Molecular Cloning: A Laboratory Manual."
    ),
    numberItem(
      "CLSI (2023). Performance Standards for Antimicrobial Susceptibility Testing."
    ),
  ],
};

// =================================================================
// PROJECT 5: Antimicrobial Properties of Medicinal Plant Extracts
// =================================================================
const project5 = {
  _type: "project",
  title: "Antimicrobial Properties of Medicinal Plant Extracts",
  fullTitle:
    "Antimicrobial Properties of Medicinal Plant Extracts Against ESBL-Producing Bacteria",
  description:
    "Exploring the antimicrobial activity of aqueous and ethanol extracts from medicinal plants against ESBL-producing strains of E. coli and K. pneumoniae.",
  tags: ["Ethnomedicine", "ESBL", "Drug Discovery"],
  featured: true,
  order: 1,
  detailedDescription: [
    heading(4, "1. Abstract"),
    para(
      span(
        "The emergence of Extended-Spectrum Beta-Lactamase (ESBL)-producing bacteria has rendered many common antibiotics ineffective. This project explored the antimicrobial activity of aqueous and ethanol extracts from selected medicinal plants against ESBL-producing strains of Escherichia coli and Klebsiella pneumoniae. Using standard microbiological techniques, we identified plant extracts with promising inhibitory effects, demonstrating that traditional medicinal plants may provide alternative strategies for combatting resistant bacterial infections."
      )
    ),
    heading(4, "2. Introduction"),
    para(
      span(
        "With antibiotic resistance accelerating globally, ESBL-producing bacteria represent a major clinical concern as they can hydrolyze a broad range of \u03B2-lactam antibiotics. As a result, attention is shifting back to nature for therapeutic alternatives. Medicinal plants, rich in phytochemicals like flavonoids and alkaloids, possess antimicrobial properties. This project aimed to screen selected plant extracts for activity against ESBL strains, highlighting their relevance in the global search for novel antimicrobial agents."
      )
    ),
    heading(4, "3. Objectives"),
    bulletItem(
      "To prepare aqueous and ethanol extracts of selected medicinal plants (Neem, Tulsi, Turmeric)."
    ),
    bulletItem(
      "To test the antimicrobial activity of these extracts against ESBL-producing E. coli and Klebsiella pneumoniae."
    ),
    bulletItem(
      "To compare plant extract efficacy with standard antibiotics."
    ),
    bulletItem(
      "To evaluate the potential of plant-derived compounds in overcoming ESBL-mediated resistance."
    ),
    heading(4, "4. Materials and Methods"),
    para(
      span("4.1 Plant Material & Extraction: ", ["strong"]),
      span(
        "Leaves and rhizomes of Azadirachta indica, Ocimum sanctum, and Curcuma longa were collected, dried, and powdered. Aqueous extracts were prepared by boiling in distilled water, while ethanolic extracts were prepared by soaking in 70% ethanol. Extracts were then filtered and concentrated."
      )
    ),
    para(
      span("4.2 Bacterial Isolates: ", ["strong"]),
      span(
        "Confirmed ESBL-producing strains of E. coli and Klebsiella pneumoniae were obtained from a microbiology lab."
      )
    ),
    para(
      span("4.3 Antimicrobial Testing: ", ["strong"]),
      span(
        "The agar well diffusion method was used on Mueller-Hinton agar. 100 \u00B5L of each extract was added to 6 mm wells. Cefotaxime was used as a positive control and the solvents as negative controls. Plates were incubated and zones of inhibition were measured."
      )
    ),
    heading(4, "5. Results"),
    bulletItem(
      "Ethanolic extracts consistently demonstrated higher efficacy than aqueous extracts for all three plants."
    ),
    bulletItem([
      span("Azadirachta indica (Neem)", ["strong"]),
      span(
        " ethanolic extract showed the highest activity, with inhibition zones up to "
      ),
      span("17 mm", ["strong"]),
      span(" against E. coli and "),
      span("15 mm", ["strong"]),
      span(" against Klebsiella."),
    ]),
    bulletItem([
      span("Ocimum sanctum (Tulsi)", ["strong"]),
      span(
        " also exhibited notable inhibition (approx. 13\u201314 mm), especially in its ethanolic form."
      ),
    ]),
    bulletItem([
      span("Curcuma longa (Turmeric)", ["strong"]),
      span(
        " showed only mild activity in its crude extract form."
      ),
    ]),
    bulletItem(
      "The results confirmed the presence of bioactive phytochemicals capable of inhibiting ESBL-producing bacterial strains."
    ),
    heading(4, "6. Discussion"),
    para(
      span(
        "This study supports the traditional use of medicinal plants as antimicrobial agents. The superior activity of ethanolic extracts is likely due to the better solubility of active phytochemicals. The substantial inhibition of ESBL-producing bacteria indicates that some plant-derived compounds may bypass beta-lactamase-mediated resistance, encouraging further studies on purification and mechanism of action."
      )
    ),
    heading(4, "7. Conclusion"),
    para(
      span(
        "The antimicrobial activity observed in neem and tulsi extracts offers promising leads for natural alternatives against drug-resistant pathogens. While not immediate replacements for antibiotics, they can complement existing therapies or serve as sources for novel drug development. This project emphasized the role of ethnomedicine in modern microbiological research."
      )
    ),
    heading(4, "8. References"),
    numberItem(
      "Cowan, M. M. (1999). Plant products as antimicrobial agents. Clinical Microbiology Reviews, 12(4), 564\u2013582."
    ),
    numberItem(
      "Cheesbrough, M. (2006). District Laboratory Practice in Tropical Countries."
    ),
    numberItem(
      "WHO (2020). Traditional and complementary medicine: report on global strategy."
    ),
    numberItem(
      "CLSI (2023). Performance Standards for Antimicrobial Susceptibility Testing."
    ),
  ],
};

// =================================================================
// Run the migration
// =================================================================
const allProjects = [project1, project2, project3, project4, project5];

async function migrate() {
  console.log("Starting project migration...\n");

  // Step 1: Delete any existing project documents to avoid duplicates
  console.log("Cleaning up existing project documents...");
  try {
    const existing = await client.fetch(`*[_type == "project"]._id`);
    if (existing.length > 0) {
      const tx = client.transaction();
      existing.forEach((id) => tx.delete(id));
      await tx.commit();
      console.log(`  Deleted ${existing.length} existing project(s).\n`);
    } else {
      console.log("  No existing projects found.\n");
    }
  } catch (err) {
    console.warn("  Could not clean up existing projects:", err.message, "\n");
  }

  // Step 2: Create all projects (auto-generated IDs)
  for (const project of allProjects) {
    try {
      const result = await client.create(project);
      console.log(`\u2705 Created: "${result.title}" (ID: ${result._id})`);
    } catch (err) {
      console.error(`\u274C Failed: "${project.title}"`, err.message);
    }
  }

  console.log("\n\uD83C\uDF89 Migration complete! Now upload images via Sanity Studio.");
}

migrate();
