import { Link } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ResultsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Results</Text>
            <Text style={styles.scoreText}>Your Score: 8/10</Text>
            <Link href="/quiz" asChild>
                <Button title="Try Again" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 20,
        marginBottom: 20,
    },
});