import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import { Link, router, Redirect } from "expo-router";
import CustomButton from "@/components/CustomButton";

const index = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View style={styles.view}>
          <Text style={styles.text}>my first file xxxxxx</Text>
          <Link href="/home" style={{ color: "blue", fontSize: 32 }}>
            profile
          </Link>
          <CustomButton
            title="asasas"
            handlePress={() => router.push("/signIn")}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="orange" />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#03fc9d",
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  view: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text: { fontSize: 32 },
});
