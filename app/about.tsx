import { Link } from "expo-router";
import { View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import backgroundImage from "../assets/images/bg-background.jpg";
import logo from "../assets/images/logo.png";

export default function AboutScreen() {
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.content}>
                        {/* Logo */}
                        <Image source={logo} style={styles.logo} />

                        <Text style={styles.heading}>About the App</Text>
                        <Text style={styles.description}>
                            Welcome to QuizMaster, the ultimate quiz app for coders! Whether you're a beginner or an experienced developer, test and improve your programming skills with a variety of interactive quizzes. Featuring an intuitive interface, it offers a seamless learning experience, allowing you to challenge yourself and grow anytime, anywhere.
                        </Text>

                        <Text style={styles.heading}>Developer Details</Text>
                        <Text style={styles.description}>
                            QuizMaster is developed by Yasith Chathuranga, a passionate developer focused on creating innovative and educational apps. With a mission to make learning, especially coding, accessible and enjoyable for everyone.                        </Text>
                        <Text style={styles.description}>
                            Contact me at: yasithchathuranga@gmail.com
                        </Text>

                        <Link href="/" asChild>
                            <Button
                                mode="contained"
                                style={styles.button}
                                labelStyle={styles.buttonLabel}
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </View>
                </ScrollView>
            </View>
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
    overlay: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    content: {
        width: "90%",
        maxWidth: 400,
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    aboutImage: {
        width: "100%",
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "white",
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "white",
        lineHeight: 24,
    },
    button: {
        width: "100%",
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#6200ee",

    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});