/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

export default () => (
  <TouchableOpacity>
    <View style={styles.button}>
      <Text style={styles.label}>SHUFFLE PLAY</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#1ed760",
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 32,
    justifyContent: "center"
  },
  label: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600"
  }
});
