/* eslint-disable @typescript-eslint/no-explicit-any */
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import NavigationHeader from "@/components/general/navigation/Header";
import PopupHeader from "@/components/general/navigation/PopupHeader";
import { MainStackParamList, ScreenOptionsParams } from "./types";
import METRICS from "@/constants/Metrics";

export interface DefaultScreenOptionProps {
  route: RouteProp<MainStackParamList, keyof MainStackParamList>;
  navigation?: any;
}

export default function MainScreenOptions({
  route,
}: DefaultScreenOptionProps):
  | NativeStackNavigationOptions
  | BottomTabNavigationOptions {
  if (!route?.params)
    return {
      tabBarShowLabel: false,
    };

  const {
    title,
    hasLogo,
    isBackArrowHidden,
    isPopupHeader,
    isRightComponentHidden,
  } = route?.params as ScreenOptionsParams;

  const DisplayedHeader = !isPopupHeader ? (
    <NavigationHeader
      title={title}
      hasBackArrow={!isBackArrowHidden}
      isRightComponentHidden={isRightComponentHidden}
      hasLogo={hasLogo}
    />
  ) : (
    <PopupHeader title={title} />
  );

  return {
    header: () => DisplayedHeader,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: METRICS.bottomTabsHeight,
    },
  };
}
