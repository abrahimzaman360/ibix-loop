export interface Guideline {
    courseCode: string;
    overview: string;
    tips: string[];
    resources: string[];
    importantTopics?: string[];
}

export const courseGuidelines: Record<string, Guideline> = {
    // Mathematics & Statistics
    "MTH302": {
        courseCode: "MTH302",
        overview: "Business Mathematics & Statistics is critical for building the analytical foundation needed for finance. It covers basic arithmetic to more complex statistical concepts tailored for business applications.",
        tips: [
            "Practice daily. Math is a skill, not just knowledge.",
            "Master the financial calculator (if allowed) or Excel functions early.",
            "Focus on understanding 'Why' a formula is used, not just 'How'.",
            "Solve all practice problems in the handouts/book.",
            "Pay special attention to Time Value of Money concepts as they reappear in Finance.",
        ],
        resources: [
            "Khan Academy: Statistics and Probability",
            "PatrickJMT (YouTube) for calculus/algebra specific topics",
            "Vulms recorded lectures (watch at 1.5x speed for review)"
        ],
        importantTopics: [
            "Matrices and Determinants",
            "Linear Equations",
            "Time Value of Money (PV, FV, Annuities)",
            "Measures of Central Tendency",
            "Regression and Correlation"
        ]
    },
    "STA301": {
        courseCode: "STA301",
        overview: "Statistics and Probability introduces the science of data. A 4.0 here requires precision and a strong grasp of probability theory.",
        tips: [
            "Create a formula sheet for quick revision (even if not allowed in exam, making it helps memory).",
            "Distinguish clearly between Permutation and Combination scenarios.",
            "Understand the properties of Normal Distribution thoroughly.",
            "Practice hypothesis testing steps until they are second nature.",
        ],
        resources: [
            "StatTrek.com",
            "Crash Course Statistics (YouTube)",
        ],
        importantTopics: [
            "Probability Distributions (Binomial, Poisson, Normal)",
            "Sampling Distributions",
            "Hypothesis Testing (Z-test, t-test)",
            "Confidence Intervals"
        ]
    },
    "STA630": {
        courseCode: "STA630",
        overview: "Research Methods is less calculation-heavy and more conceptual. It teaches how to conduct valid research, crucial for your final project.",
        tips: [
            "Understand the difference between Qualitative and Quantitative research.",
            "Learn the hierarchy of measurement scales (Nominal, Ordinal, Interval, Ratio).",
            "Read research papers to see these methods in action.",
            "Don't ignore the ethical considerations in research."
        ],
        resources: [
            "Research Methodology (C.R. Kothari) - reference book",
            "Google Scholar for sample papers"
        ],
        importantTopics: [
            "Research Design",
            "Sampling Techniques",
            "Data Collection Methods",
            "APA Referencing Style"
        ]
    },

    // Finance & Accounting
    "MGT101": {
        courseCode: "MGT101",
        overview: "Financial Accounting is the language of business. Everything builds on the Accounting Equation.",
        tips: [
            "Master the Debit/Credit rules immediately. 'ADE LER' mnemonic helps.",
            "Practice journal entries for every possible transaction type.",
            "Understand the flow from Journal -> Ledger -> Trial Balance -> Financial Statements.",
            "Balance sheets must ALWAYS balance. If not, re-check your entries."
        ],
        resources: [
            "AccountingCoach.com",
            "Farhat's Accounting Lectures (YouTube)"
        ],
        importantTopics: [
            "Accounting Equation",
            "Adjusting Entries",
            "Bank Reconciliation Statements",
            "Financial Statements Preparation"
        ]
    },
    "ACC501": {
        courseCode: "ACC501",
        overview: "Business Finance shifts focus from historical recording (Accounting) to future decision making.",
        tips: [
            "Time Value of Money is the heart of this course.",
            "Understand the relationship between Risk and Return.",
            "Practice Cash Flow estimation for capital budgeting.",
        ],
        resources: [
            "Investopedia",
            "Corporate Finance Institute (CFI) free resources"
        ],
        importantTopics: [
            "NPV and IRR",
            "Bond and Stock Valuation",
            "Cost of Capital (WACC)",
            "Ratio Analysis"
        ]
    },

    // General 
    "CS101": {
        courseCode: "CS101",
        overview: "Introduction to Computing. Should be an easy A if you keep up.",
        tips: [
            "Don't just read; do the practical labs.",
            "Understand binary/hexadecimal conversions.",
            "Learn the basics of logic gates."
        ],
        resources: [],
        importantTopics: ["Number Systems", "Web Basics", "Office Automation"]
    },
    "ENG101": {
        courseCode: "ENG101",
        overview: "English Comprehension. Focuses on grammar and reading skills.",
        tips: [
            "Read the handouts. The exam often tests specific vocabulary from them.",
            "Practice reading comprehension passages.",
            "Review basic grammar rules (Tenses, Parts of Speech)."
        ],
        resources: [],
        importantTopics: ["Reading Comprehension", "Grammar", "Vocabulary"]
    },
    "PAK301": {
        courseCode: "PAK301",
        overview: "Pakistan Studies covers history and current affairs.",
        tips: [
            "Dates and events are important. Make a timeline.",
            "Understand the constitutional history.",
        ],
        resources: [],
        importantTopics: ["Two-Nation Theory", "1973 Constitution", "Geography of Pakistan"]
    }
};
