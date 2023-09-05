import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Welcome from "@/screens/auth/Welcome";
import Login from "@/screens/auth/Login";
import MainScreenOptions from "../MainScreenOptions";
import { AuthStackParamList } from "../types";
import Otp from "@/screens/auth/OTP";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      <Stack.Group>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          initialParams={{
            title: "Welcome page",
            isRightComponentHidden: true,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{
            title: "Login screen",
            isRightComponentHidden: true,
          }}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
          initialParams={{
            title: "Login screen",
            isRightComponentHidden: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
