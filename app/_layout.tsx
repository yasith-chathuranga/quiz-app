import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="modules" options={{ title: "Modules" }} />
            <Stack.Screen name="quiz" options={{ title: "Quiz" }} />
        </Stack>
    );
}