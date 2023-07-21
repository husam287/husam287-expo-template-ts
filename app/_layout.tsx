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
import IcoMoon from "@/assets/icomoon/icomoon.ttf";
import font300 from "@/assets/fonts/Cairo-Light.ttf";
import font400 from "@/assets/fonts/Cairo-Regular.ttf";
import font500 from "@/assets/fonts/Cairo-Medium.ttf";
import font700 from "@/assets/fonts/Cairo-Bold.ttf";
import SnackbarComponent from "@/components/general/SnackbarComponent";
import ReactNativeModal from "react-native-modal";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

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
    IcoMoon,
    font300,
    font400,
    font500,
    font700,
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
  const { t } = useAutoCompleteTranslation()

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
          <Stack.Screen name="product-details" initialParams={{ title: t("OFFERS") }} />
        </Stack>

        {/* GENERAL MODALS */}
        <SnackbarComponent />
        <ReactNativeModal>
          <SnackbarComponent />
        </ReactNativeModal>
      </Provider>
    </ThemeProvider>
  );
}
