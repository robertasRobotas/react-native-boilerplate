import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

import React from "react";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
};

const CustomButton = ({ title, handlePress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  text: {
    textAlign: "center",
  },
});

export default CustomButton;
