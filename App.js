import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigation from "./src/navigations/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Text className="font-bold text-[100px] text-[#FF6666]">
          Hello Anish!
        </Text>
        <StatusBar style="auto" />
      </View> */}
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
