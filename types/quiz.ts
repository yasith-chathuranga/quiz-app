export type ModuleId = "java" | "javascript" | "python";

export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizModule {
    id: ModuleId;
    name: string;
    questions: QuizQuestion[];
}

export interface QuizState {
    currentQuestion: number;
    score: number;
    showResult: boolean;
}