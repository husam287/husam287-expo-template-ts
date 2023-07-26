import { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ReactNativeModal from "react-native-modal";
import NotificationListnerContainer from "@/components/containers/NotificationListnerContainer";
import SnackbarComponent from "@/components/general/SnackbarComponent";
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import COLORS from "@/constants/Colors";
import LinkingConfiguration from "./LinkingConfiguration";
import MainStack from "./stacks/MainStack";
import { RootState } from "@/redux";
import useCheckingForcedStoreUpdate from "@/hooks/useCheckingForcedStoreUpdate";
import useCheckAuthTokenExistance from "@/hooks/useCheckAuthTokenExistance";

function Route() {
  const isSignedIn = useSelector((state: RootState) => state.auth.token);

  useCheckNewUpdates();
  useCheckingForcedStoreUpdate();
  useCheckAuthTokenExistance();

  // User login
  useEffect(() => {
    if (isSignedIn) {
      // nothing here
    }
  }, [isSignedIn]);

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.light;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme} linking={LinkingConfiguration}>
        <NotificationListnerContainer>
          {/* {!isSignedIn ? <AuthStack /> : <MainStack />} */}
          <MainStack />
          {/* <AuthStack /> */}

          {/* GENERAL MODALS */}
          <SnackbarComponent />
          <ReactNativeModal>
            <SnackbarComponent />
          </ReactNativeModal>
        </NotificationListnerContainer>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Route;
