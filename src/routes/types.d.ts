import { NavigatorScreenParams } from "@react-navigation/native";

export type ScreenOptionsParams = {
  title?: string;
  isBackArrowHidden?: boolean;
  isRightComponentHidden?: boolean;
  isPopupHeader?: boolean;
  hasLogo?: boolean;
};

type BaseParams<T = undefined> = ScreenOptionsParams | T;

export type TabParamList = {
  HomeScreen: BaseParams;
  CategoriesScreen: BaseParams;
  OfferScreen: BaseParams;
  CartScreen: BaseParams;
  MainProfileScreen: BaseParams;
};

export type MainStackParamList = {
  Root: NavigatorScreenParams<TabParamList>; // nested navigator
  ProductDetailsScreen: BaseParams<{ productId: string }>;
  ProductDetailsModal: BaseParams<{ productId: string }>;
};

export type AuthStackParamList = {
  WelcomeScreen: BaseParams;
  LoginScreen: BaseParams;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
