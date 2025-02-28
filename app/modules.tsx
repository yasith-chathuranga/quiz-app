import { Link } from "expo-router";
import { Text, StyleSheet, ScrollView, Image, ImageSourcePropType, ImageBackground } from "react-native";
import { Button, Card, Title, useTheme } from "react-native-paper";
import { quizModules } from "../constants/quiz";
import { LinearGradient } from "expo-linear-gradient";
import backgroundImage from "../assets/images/bg-background.jpg";
import iconJava from "../assets/icons/java.png";
import iconJavaScript from "../assets/icons/javascript.png";
import iconPython from "../assets/icons/python.png";

// Define the valid module IDs
type ModuleId = "java" | "javascript" | "python";

export default function ModulesScreen() {
    const { colors } = useTheme();

    const moduleIcons: Record<ModuleId, ImageSourcePropType> = {
        java: iconJava,
        javascript: iconJavaScript,
        python: iconPython,
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Select a Module</Text>
                {quizModules.map((module) => (
                    <Link key={module.id} href={`/quiz?module=${module.id}`} asChild>
                        <Card style={styles.card}>
                            <LinearGradient
                                colors={["#6a11cb", "#2575fc"]} // Modern gradient colors
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.cardGradient}
                            >
                                <Card.Content style={styles.cardContent}>
                                    <Image
                                        source={moduleIcons[module.id as ModuleId]}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                    <Title style={styles.moduleName}>{module.name}</Title>
                                </Card.Content>
                                <Card.Actions style={styles.cardActions}>
                                    <Button
                                        mode="contained"
                                        style={styles.button}
                                        labelStyle={styles.buttonLabel}
                                    >
                                        Start Quiz
                                    </Button>
                                </Card.Actions>
                            </LinearGradient>
                        </Card>
                    </Link>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    card: {
        marginVertical: 10,
        width: "100%",
        maxWidth: 400,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    cardGradient: {
        padding: 20,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 15,

    },
    moduleName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    cardActions: {
        justifyContent: "flex-end",
    },
    button: {
        borderRadius: 10,
        backgroundColor: "white",
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6a11cb",
    },
});