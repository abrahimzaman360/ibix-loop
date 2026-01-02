export interface Course {
    code: string;
    title: string;
    category: string;
    subCategory?: string;
    type: "Required" | "Elective";
    preRequisite?: string;
    creditHours: string;
    specialization?: string;
}

export interface Semester {
    id: number;
    courses: Course[];
}

export const semesters: Semester[] = [
    {
        id: 1,
        courses: [
            { code: "CS101", title: "Introduction to Computing", category: "General Education", subCategory: "Applications of Information and Communication Technologies (ICT)", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ENG101", title: "English Comprehension", category: "General Education", subCategory: "Functional English", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT211", title: "Introduction To Business", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT503", title: "Principles of Management", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ETH202", title: "Ethics (for Non-Muslims)", category: "General Education", subCategory: "Islamic Studies/Religious Education Studies", type: "Elective", creditHours: "2 (Theory:2, Practical:0)" },
            { code: "ISL202", title: "Islamic Studies", category: "General Education", subCategory: "Islamic Studies/Religious Education Studies", type: "Elective", creditHours: "2 (Theory:2, Practical:0)" },
            { code: "VU001", title: "Introduction to e-Learning", category: "Major", type: "Required", creditHours: "1 (Theory:1, Practical:0)" },
        ],
    },
    {
        id: 2,
        courses: [
            { code: "ENG201", title: "Business and Technical English Writing", category: "General Education", subCategory: "Expository Writing", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT101", title: "Financial Accounting", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT301", title: "Principles of Marketing", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT411", title: "Money & Banking", category: "Major", type: "Required", preRequisite: "MGT211", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MTH302", title: "Business Mathematics & Statistics", category: "General Education", subCategory: "Quantitative Reasoning", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "PAK301", title: "Pakistan Studies", category: "General Education", subCategory: "Arts and Humanities", type: "Required", creditHours: "2 (Theory:2, Practical:0)" },
        ],
    },
    {
        id: 3,
        courses: [
            { code: "ACC501", title: "Business Finance", category: "Major", type: "Required", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT401", title: "Financial Accounting II", category: "Major", type: "Required", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "STA301", title: "Statistics and Probability", category: "General Education", subCategory: "Quantitative Reasoning", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ECO302", title: "Principles of Microeconomics", category: "General Education", subCategory: "Arts and Humanities", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ECO401", title: "Economics", category: "General Education", subCategory: "Arts and Humanities", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ECO402", title: "Microeconomics", category: "General Education", subCategory: "Arts and Humanities", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MCM101", title: "Introduction to Mass Communication", category: "General Education", subCategory: "Social Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "PSY101", title: "Introduction to Psychology", category: "General Education", subCategory: "Social Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "SOC101", title: "Introduction to Sociology", category: "General Education", subCategory: "Social Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "PAK522", title: "Ideology and Constitution of Pakistan", category: "General Education", type: "Required", creditHours: "2 (Theory:2, Practical:0)" },
        ],
    },
    {
        id: 4,
        courses: [
            { code: "ACC101", title: "QuickBooks", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ETH100", title: "Effective Citizenship", category: "General Education", subCategory: "Civics and Community Engagement", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT402", title: "Cost & Management Accounting", category: "Major", type: "Required", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT602", title: "Entrepreneurship", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "BIO101", title: "Basic I-Biology", category: "General Education", subCategory: "Natural Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "GSC101", title: "General Science", category: "General Education", subCategory: "Natural Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "PHY101", title: "Physics", category: "General Education", subCategory: "Natural Sciences", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
        ],
    },
    {
        id: 5,
        courses: [
            { code: "ACC311", title: "Fundamentals of Auditing", category: "Major", type: "Required", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "ECO404", title: "Managerial Economics", category: "Interdisciplinary", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "FIN624", title: "Islamic Modes of Finance", category: "Major", type: "Required", preRequisite: "ACC501", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT201", title: "Financial Management", category: "Major", type: "Required", preRequisite: "ACC501", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "STA630", title: "Research Methods", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
        ],
    },
    {
        id: 6,
        courses: [
            { code: "FIN611", title: "Advanced Financial Accounting", category: "Major", type: "Required", preRequisite: "MGT101, MGT401", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT501", title: "Human Resource Management", category: "Major", type: "Required", preRequisite: "MGT503", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT610", title: "Business Ethics", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGTI619", title: "Internship Report-Management", category: "Major", subCategory: "Field Experience / Internship", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MCM301", title: "Communication skills", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MCM601", title: "Media Management", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
        ],
    },
    {
        id: 7,
        courses: [
            { code: "FIN621", title: "Financial Statement Analysis", category: "Major", type: "Required", preRequisite: "ACC501", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT611", title: "Business & Labor Law", category: "Major", type: "Required", preRequisite: "MGT211", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT699", title: "Capstone Project", category: "Major", subCategory: "Capstone Project", type: "Required", preRequisite: "STA630", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "EDU401", title: "Contemporary Issues and Trends in Education", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "EDU406", title: "Critical Thinking and reflective Practice", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT404", title: "Managerial Accounting", category: "Major", type: "Elective", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT502", title: "Organizational Behaviour", category: "Major", type: "Elective", preRequisite: "MGT503", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT605", title: "Advanced Cost and Management Accounting", category: "Major", type: "Elective", preRequisite: "MGT402", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MKT530", title: "Consumer Behaviour", category: "Major", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
        ],
    },
    {
        id: 8,
        courses: [
            { code: "FIN622", title: "Corporate Finance", category: "Major", type: "Required", preRequisite: "ACC501", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT612", title: "Corporate Law", category: "Major", type: "Required", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "FIN623", title: "Taxation Management", category: "Major", type: "Elective", preRequisite: "MGT101", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "FIN630", title: "Investment Analysis & Portfolio Management", category: "Major", type: "Elective", preRequisite: "ACC501", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGMT622", title: "Management Skills", category: "Major", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "MGT601", title: "SME Management", category: "Major", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "PSY405", title: "Personality Psychology", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
            { code: "SOC617", title: "Social Entrepreneurship", category: "Interdisciplinary", type: "Elective", creditHours: "3 (Theory:3, Practical:0)" },
        ],
    },
];
