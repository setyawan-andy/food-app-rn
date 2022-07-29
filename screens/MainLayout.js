import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Text>MainLayout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainLayout;
