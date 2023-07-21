import { router } from "expo-router";
import { NotificationData, NotificationType } from "@/apis/@types/notification";

export default function handleNotificationRedirection(
  notificationData: NotificationData
) {
  console.log(notificationData, "NOTIFICATION DATA");

  // #### Create Order Notification ####
  if (notificationData?.template_slug === NotificationType.NEW_ORDER) {
    const productId = notificationData?.target_object_id;

    if (productId) {
      router.push({
        pathname: "/product-details",
        params: { productId },
      });
    }
  }
}
