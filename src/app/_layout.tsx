import {
  DefaultTheme,
  ParamListBase,
  RouteProp,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import NavigationHeader from "@/components/general/navigation/Header";
import Colors from "@/constants/Colors";
import "@/i18n";
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import store from "@/redux";
import IcoMoon from "@/assets/icomoon/icomoon.ttf";
import font300 from "@/assets/fonts/Cairo-Light.ttf";
import font400 from "@/assets/fonts/Cairo-Regular.ttf";
import font500 from "@/assets/fonts/Cairo-Medium.ttf";
import font700 from "@/assets/fonts/Cairo-Bold.ttf";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import NotificationListnerContainer from "@/components/containers/NotificationListnerContainer";
import MainContainer from "@/components/containers/MainContainer";

function Header({ route }: { route: RouteProp<ParamListBase> }) {
  return (
    <NavigationHeader
      // @ts-ignore
      title={route.params?.title}
    />
  );
}

function RootLayoutNav() {
  const { t } = useAutoCompleteTranslation();

  const navTheme = DefaultTheme;
  navTheme.colors.background = Colors.light;

  return (
    <ThemeProvider value={navTheme}>
      <Provider store={store}>
        <NotificationListnerContainer>
          <MainContainer>
            <Stack
              screenOptions={() => ({
                header: Header,
              })}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{ presentation: "modal" }}
                initialParams={{ title: "hi" }}
              />
              <Stack.Screen
                name="product-details"
                initialParams={{ title: t("OFFERS") }}
              />
            </Stack>
          </MainContainer>
        </NotificationListnerContainer>
      </Provider>
    </ThemeProvider>
  );
}

export { ErrorBoundary } from "expo-router";

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
