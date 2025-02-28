import { Link } from "expo-router";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { Button, Text } from "react-native-paper";
import backgroundImage from "../assets/images/bg-background.jpg";
import logo from "../assets/images/logo.png";

export default function HomeScreen() {
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    {/* Logo */}
                    <Image source={logo} style={styles.logo} />

                    <Text style={styles.subtitle}>Learning is Everything</Text>
                    <Text style={styles.subtitleSecondary}>Learning with pleasure with Dear Programmer, Wherever you are!</Text>

                    <Link href="/modules" asChild>
                        <Button
                            mode="contained"
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                        >
                            Start Quiz
                        </Button>
                    </Link>

                    <Button
                        mode="outlined"
                        style={[styles.button, styles.secondaryButton]}
                        labelStyle={styles.secondaryButtonLabel}
                        onPress={() => console.log("Learn More Pressed")}
                    >
                        Learn More
                    </Button>
                </View>
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
    content: {
        width: "90%",
        maxWidth: 400,
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
        color: "white",
    },
    subtitleSecondary: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: "center",
        color: "gray",
    },
    button: {
        width: "100%",
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#6200ee",
        marginTop: 30,
    },
    secondaryButton: {
        backgroundColor: "#a793e3",
        marginTop: 20,
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    secondaryButtonLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
});