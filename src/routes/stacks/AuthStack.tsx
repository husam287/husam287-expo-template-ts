import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import WelcomeScreen from "@/screens/auth/Welcome";
import LoginScreen from "@/screens/auth/Login";
import MainScreenOptions from "../MainScreenOptions";
import { AuthStackParamList } from "../types";
import OtpScreen from "@/screens/auth/OTP";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      <Stack.Group>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          initialParams={{
            title: "Welcome page",
            isRightComponentHidden: true,
          }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          initialParams={{
            title: "Login screen",
            isRightComponentHidden: true,
          }}
        />

        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          initialParams={{
            title: "Login screen",
            isRightComponentHidden: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
