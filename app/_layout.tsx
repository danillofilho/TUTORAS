import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" /> {/* Aacredito que isso apenas funcione em iOS */}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            /*headerLeft: () => <></>,  impede o botão de voltar no index, pq justamente não faz sentido nesta página */
          }}
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
