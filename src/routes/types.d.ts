import { NavigatorScreenParams } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

export type ScreenOptionsParams = {
  title?: string;
  isBackArrowHidden?: boolean;
  isRightComponentHidden?: boolean;
  isPopupHeader?: boolean;
  hasLogo?: boolean;
};

type BaseParams<T = unknown> = (ScreenOptionsParams & T) | undefined;

export type TabParamList = {
  HomeScreen: BaseParams;
  CategoriesScreen: BaseParams;
  OfferScreen: BaseParams;
  CartScreen: BaseParams;
  MainProfileScreen: BaseParams;
};

export type MainStackParamList = {
  Root: NavigatorScreenParams<TabParamList>; // nested navigator
  ProductDetailsScreen: BaseParams<{ productId?: string }>;
  ProductDetailsModal: BaseParams<{ productId?: string }>;
};

export type AuthStackParamList = {
  WelcomeScreen: BaseParams;
  LoginScreen: BaseParams;
  OtpScreen: BaseParams<{ phone?: string }>;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

type CompinedParamList = MainStackParamList & AuthStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CompinedParamList {}
  }
}
