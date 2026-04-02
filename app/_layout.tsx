import { SplashScreen, Stack } from "expo-router";
import "@/global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf')
  })

  useEffect(()=> {
    if (error) throw error;
  }, [error]);

  useEffect(()=> {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown: false}} />
    </SafeAreaProvider>
  );
}
