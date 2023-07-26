import Animated, { SlideInDown } from "react-native-reanimated";
import { Link } from "@react-navigation/native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";

export default function CategoriesScreen() {
  return (
    <ScreenWrapper>
      <Animated.View entering={SlideInDown}>
        <Link to={{ screen: "ProductDetailsScreen" }}>
          <Text>Tab Two</Text>
        </Link>
      </Animated.View>
    </ScreenWrapper>
  );
}
