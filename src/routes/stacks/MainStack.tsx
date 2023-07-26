import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import BottomTabNavigator from "../BottomTabNavigator";
import ProductDetailsScreen from "@/screens/main/ProductDetails";
import { MainStackParamList } from "../types";
import MainScreenOptions from "../MainScreenOptions";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      {/* MAIN SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          initialParams={{ title: "Product Details" }}
        />
      </Stack.Group>

      {/* PRODUCT SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="ProductDetailsModal"
          component={ProductDetailsScreen}
          initialParams={{
            title: "Product Details Modal",
            isPopupHeader: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
