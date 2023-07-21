import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import ScreenWrapper from "@/components/general/ScreenWrapper";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default function CategoryScreen() {
  return (
    <ScreenWrapper>
      <Animated.View entering={SlideInDown}>
        <Link href="/product-details">
          <Text style={styles.title}>Tab Two</Text>
        </Link>
      </Animated.View>
    </ScreenWrapper>
  );
}
