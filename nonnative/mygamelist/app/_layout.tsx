import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
    return(
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="game/[id]" options={{ headerShown: false }} />
                <Stack.Screen name="add_update/index" options={{ headerShown: false }} />
            </Stack>
        )
}
