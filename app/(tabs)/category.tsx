import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Link href="/product-details">
        <Text style={styles.title}>Tab Two</Text>
      </Link>
      <View style={styles.separator} />
    </View>
  );
}