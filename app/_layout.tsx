import NavigationHeader from "@/components/general/navigation/Header";
import Colors from "@/constants/Colors";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from 'react-redux';
import '@/i18n';
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import store from "@/redux";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useCheckNewUpdates();

  const [loaded, error] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
    font300: require("@/assets/fonts/Cairo-Light.ttf"),
    font400: require("@/assets/fonts/Cairo-Regular.ttf"),
    font500: require("@/assets/fonts/Cairo-Medium.ttf"),
    font700: require("@/assets/fonts/Cairo-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = Colors.light;

  return (
    <ThemeProvider value={navTheme}>
      <Provider store={store}>
        <Stack
          screenOptions={(props) => ({
            header: ({ route }) => (
              // @ts-ignore
              <NavigationHeader title={route.params?.title} />
            ),
          })}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal" }}
            initialParams={{ title: "hi" }}
          />
          <Stack.Screen name="product-details" initialParams={{ title: "hi" }} />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
