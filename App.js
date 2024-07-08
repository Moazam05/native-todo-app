import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import React from "react";
import TodoScreen from "./src/screen/TodoScreen";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar />
      <TodoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1 },
});

export default App;
