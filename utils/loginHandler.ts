import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/apis";
import store from "@/redux";
import { login } from "@/redux/authReducer";

export default function loginHandler({ token = "", refreshToken = "" } = {}) {
  if (token) AsyncStorage.setItem("token", token);
  if (refreshToken) AsyncStorage.setItem("refreshToken", refreshToken);
  store.dispatch(api.util.resetApiState());
  store.dispatch(login(token));
}
