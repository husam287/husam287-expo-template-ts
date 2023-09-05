import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import COLORS from "@/constants/Colors";

export default function NotificationBell() {
  const onGoToNotifications = () => {
    console.log("NOTIFICATIONS");
  };

  return (
    <TouchableOpacity onPress={onGoToNotifications}>
      <SimpleLineIcons name="bell" color={COLORS.primary} size={21} />
    </TouchableOpacity>
  );
}
