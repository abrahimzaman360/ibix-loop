// Question types
export type ExamCategory = "DP-700" | "Python" | "SQL";

export interface Question {
    id: string;
    category: ExamCategory;
    questionText: string;
    scenario?: string;
    options: string[];
    correctOptionIndex: number;
    explanation: string;
}

// Import all question sets
import { dp700Questions } from "./dp700-questions";
import { dp700QuestionsSet2 } from "./dp700-questions-2";
import { dp700QuestionsSet3 } from "./dp700-questions-3";
import { dp700QuestionsSet4 } from "./dp700-questions-4";
import { pythonQuestions } from "./python-questions";
import { sqlQuestions } from "./sql-questions";

// Combine all DP-700 questions
const allDp700Questions: Question[] = [
    ...dp700Questions,
    ...dp700QuestionsSet2,
    ...dp700QuestionsSet3,
    ...dp700QuestionsSet4,
];

// Export combined question bank
export const allQuestions: Record<ExamCategory, Question[]> = {
    "DP-700": allDp700Questions,
    "Python": pythonQuestions,
    "SQL": sqlQuestions,
};

// Export individual arrays for direct access
export {
    dp700Questions,
    dp700QuestionsSet2,
    dp700QuestionsSet3,
    dp700QuestionsSet4,
    pythonQuestions,
    sqlQuestions,
};
