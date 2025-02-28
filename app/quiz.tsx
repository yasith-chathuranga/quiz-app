import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { quizModules } from "../constants/quiz";
import { Button, Card, Title, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons"; // For icons
import backgroundImage from "../assets/images/bg-background.jpg"; // Import your background image

const QuizScreen = () => {
    const { module } = useLocalSearchParams();
    const selectedModule = quizModules.find((m) => m.id === module);

    const [state, setState] = useState({
        currentQuestion: 0,
        score: 0,
        showResult: false,
    });

    const { currentQuestion, score, showResult } = state;

    if (!selectedModule) {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.overlay}>
                    <Text style={styles.errorText}>Module not found!</Text>
                </View>
            </ImageBackground>
        );
    }

    const handleAnswer = (selectedAnswer: string) => {
        if (
            selectedAnswer ===
            selectedModule.questions[currentQuestion].correctAnswer
        ) {
            setState((prev) => ({ ...prev, score: prev.score + 1 }));
        }

        if (currentQuestion < selectedModule.questions.length - 1) {
            setState((prev) => ({
                ...prev,
                currentQuestion: prev.currentQuestion + 1,
            }));
        } else {
            setState((prev) => ({ ...prev, showResult: true }));
        }
    };

    if (showResult) {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.overlay}>
                    <View style={styles.glassCard}>
                        <LinearGradient
                            colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]}
                            style={styles.glassGradient}
                        >
                            <Card.Content style={styles.cardContent}>
                                <MaterialIcons
                                    name="emoji-events"
                                    size={50}
                                    color="#FFD700"
                                    style={styles.icon}
                                />
                                <Title style={styles.resultTitle}>Quiz Results</Title>
                                <Text style={styles.resultText}>
                                    Your Score: {score}/{selectedModule.questions.length}
                                </Text>
                            </Card.Content>
                            <Card.Actions style={styles.cardActions}>
                                <Button
                                    mode="contained"
                                    style={styles.button}
                                    labelStyle={styles.buttonLabel}
                                    onPress={() =>
                                        setState({ currentQuestion: 0, score: 0, showResult: false })
                                    }
                                >
                                    Restart Quiz
                                </Button>
                            </Card.Actions>
                        </LinearGradient>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay}>
                <View style={styles.glassCard}>
                    <LinearGradient
                        colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]}
                        style={styles.glassGradient}
                    >
                        <Card.Content style={styles.cardContent}>
                            <Title style={styles.questionTitle}>
                                Question {currentQuestion + 1}
                            </Title>
                            <Text style={styles.questionText}>
                                {selectedModule.questions[currentQuestion].question}
                            </Text>
                        </Card.Content>
                        <Card.Actions style={styles.actions}>
                            {selectedModule.questions[currentQuestion].options.map(
                                (option, index) => (
                                    <Button
                                        key={index}
                                        mode="contained"
                                        onPress={() => handleAnswer(option)}
                                        style={styles.button}
                                        labelStyle={styles.buttonLabel}
                                    >
                                        {option}
                                    </Button>
                                )
                            )}
                        </Card.Actions>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    glassCard: {
        width: "90%",
        maxWidth: 400,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    glassGradient: {
        padding: 20,
    },
    cardContent: {
        alignItems: "center",
    },
    questionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    questionText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
        color: "#fff",
    },
    resultTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    resultText: {
        fontSize: 22,
        marginBottom: 20,
        textAlign: "center",
        color: "#fff",
    },
    errorText: {
        fontSize: 18,
        color: "white",
    },
    actions: {
        flexDirection: "column",
        width: "100%",
    },
    button: {
        marginVertical: 5,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#6200ee",
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    icon: {
        marginBottom: 10,
    },
    cardActions: {
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});

export default QuizScreen;