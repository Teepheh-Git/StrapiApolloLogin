import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export function SplashScreen() {
  const { colors } = useTheme();
  return <View style={[styles.container, { backgroundColor: colors.primary }]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
