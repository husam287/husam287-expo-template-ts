import Animated, { SlideInDown } from "react-native-reanimated";
import { Link } from "expo-router";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";

export default function CategoriesScreen() {
  return (
    <ScreenWrapper>
      <Animated.View entering={SlideInDown}>
        <Link href="/product-details">
          <Text>Tab Two</Text>
        </Link>
      </Animated.View>
    </ScreenWrapper>
  );
}
