import {QuizModule} from "../types/quiz";

export const quizModules: QuizModule[] = [
    {
        id: "java",
        name: "Java",
        questions: [
            {
                id: 1,
                question: "What is the default value of an int in Java?",
                options: ["0", "1", "null", "undefined"],
                correctAnswer: "0",
            },
            // Add more questions...
        ],
    },
    {
        id: "javascript",
        name: "JavaScript",
        questions: [
            {
                id: 1,
                question: "What is the result of `typeof null` in JavaScript?",
                options: ["object", "null", "undefined", "string"],
                correctAnswer: "object",
            },
        ],
    },
    {
        id: "python",
        name: "Python",
        questions: [
            {
                id: 1,
                question: "What is the output of `print(type([]))` in Python?",
                options: ["list", "tuple", "dict", "set"],
                correctAnswer: "list",
            },
        ],
    },
];