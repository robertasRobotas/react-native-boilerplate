import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

type TabIconProps = {
  source: { uri: string };
  name: string;
  focused: boolean;
};

const TabIcon = ({ source, name, focused }: TabIconProps) => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        source={source}
        resizeMode="contain"
        tintColor={focused ? "red" : "black"}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 50,
    height: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { width: 30, height: 30 },
  text: { fontSize: 10 },
});

export default TabIcon;
