import theme from "@styles/theme";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function Layout() {
  const [fontsLoaded] = useFonts({
    NunitoSansRegular: require("@assets/fonts/NunitoSans-Regular.ttf"),
    NunitoSansBold: require("@assets/fonts/NunitoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Stack initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" />
          <Stack.Screen name="statistics" />
          <Stack.Screen name="newMeal" />
          <Stack.Screen name="error" />
          <Stack.Screen name="editMeal" />
          <Stack.Screen name="success" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
