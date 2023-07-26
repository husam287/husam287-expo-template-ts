import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "@/redux/authReducer";

export default function useCheckAuthTokenExistance() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem("token");
      if (userToken) {
        dispatch(login(userToken));
      }
    })();
  }, [dispatch]);
}
