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
            {
                id: 2,
                question: "Which keyword is used to define a class in Java?",
                options:  ["class", "Class", "define", "new"],
                correctAnswer: "class",
            },
            {
                id: 3,
                question: "What is the size of an int in Java?",
                options:  ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
                correctAnswer: "4 bytes",
            },
            {
                id: 4,
                question: "What is the superclass of all Java classes?",
                options:  ["Object", "Super", "Main", "BaseClass"],
                correctAnswer: "Object",
            },
            {
                id: 5,
                question: "What does JVM stand for?",
                options:  ["Java Virtual Machine", "Java Virtual Main", "Java Virtual Method", "Java Virtual Multi"],
                correctAnswer: "Java Virtual Machine",
            },
            {
                id: 6,
                question: "Which of the following is NOT a primitive data type in Java?",
                options:  ["int", "float", "String", "boolean"],
                correctAnswer: "String",
            },
            {
                id: 7,
                question: "How do you create an object in Java?",
                options:  ["MyClass obj = new MyClass();", "MyClass obj = MyClass();", "MyClass obj = new();", "MyClass obj = new MyClass;"],
                correctAnswer: "MyClass obj = new MyClass();",
            },
            {
                id: 8,
                question: "Which keyword is used to inherit a class in Java?",
                options:  ["inheritClass", "inherit", "extendsClass", "extends"],
                correctAnswer: "extends",
            },
            {
                id: 9,
                question: "What is used to define a constant variable in Java?",
                options:  ["const", "final", "static", "constant"],
                correctAnswer: "final",
            },
            {
                id: 10,
                question: "Which method is used to start thread execution in Java?",
                options:  ["run()", "begin()", "start()", "execute()"],
                correctAnswer: "start()",
            }
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
            {
                id: 2,
                question: "How do you declare a variable in JavaScript?",
                options:   ["var", "let", "const", "All of the above"],
                correctAnswer: "All of the above",
            },
            {
                id: 3,
                question: "Which symbol is used for single-line comments in JavaScript?",
                options:   ["//", "/*", "#", "--"],
                correctAnswer: "//",
            },
            {
                id: 4,
                question: "What is the output of Boolean('false')?",
                options:   ["true", "false", "undefined", "null"],
                correctAnswer: "true",
            },
            {
                id: 5,
                question: "What will console.log(2 + '2') output?",
                options:   ["4", "'22'", "NaN", "Error"],
                correctAnswer: "22",
            },
            {
                id: 6,
                question: "Which function is used to print something in JavaScript?",
                options:   ["print()", "console.log()", "log()", "print"],
                correctAnswer: "console.log()",
            },
            {
                id: 7,
                question: "What is the purpose of JSON.parse()? ",
                options:   ["Convert a string to a JavaScript object", "Convert an object to a string", "Parse an array", "Validate JSON"],
                correctAnswer: "Convert a string to a JavaScript object",
            },
            {
                id: 8,
                question: "What is the scope of let in JavaScript?",
                options:   ["Global", "Local", "Block", "Function"],
                correctAnswer: "Block",
            },
            {
                id: 9,
                question: "What is the output of `console.log(1 + '1')`?",
                options:   ["2", "'11'", "11", "Error"],
                correctAnswer: "11",
            },
            {
                id: 10,
                question: "Which keyword is used to declare a function in JavaScript?",
                options:   ["def", "func", "function", "define"],
                correctAnswer: "function",
            }
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
            {
                id: 2,
                question: "Which keyword is used to define a function in Python?",
                options:  ["func", "define", "def", "function"],
                correctAnswer: "def",
            },
            {
                id: 3,
                question: "What will print(2 ** 3) output?",
                options:  ["8", "6", "5", "16"],
                correctAnswer: "8",
            },
            {
                id: 4,
                question: "Which of the following is NOT a valid data type in Python?",
                options:  ["list", "tuple", "array", "set"],
                correctAnswer: "array",
            },
            {
                id: 5,
                question: "How do you start a comment in Python?",
                options:  ["#", "//", "/*", "--"],
                correctAnswer: "#",
            },
            {
                id: 6,
                question: "What does len(\"Hello\") return?",
                options:  ["5", "6", "4", "Error"],
                correctAnswer: "5",
            },
            {
                id: 7,
                question: "What is the result of bool([]) in Python?",
                options:  ["True", "False", "None", "Error"],
                correctAnswer: "False",
            },
            {
                id: 8,
                question: "What is the correct way to open a file in Python?",
                options:  ["open('file.txt')", "file.open()", "open('file.txt', 'r')", "file.open('file.txt')"],
                correctAnswer: "open('file.txt', 'r')",
            },
            {
                id: 9,
                question: "How do you create an empty set in Python?",
                options:  ["set()", "{}", "()", "set"],
                correctAnswer: "set()",
            },
            {
                id: 10,
                question: "What will print(\"Hello\" * 3) output?",
                options:  ["HelloHelloHello", "Hello 3 times", "HelloHello", "Error"],
                correctAnswer: "HelloHelloHello",
            }
        ],
    },
];