import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
