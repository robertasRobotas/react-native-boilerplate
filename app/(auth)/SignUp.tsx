import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../assets/images/marsieciai.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log("xxxx");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ display: "flex" }}>
          <Image resizeMode="contain" style={styles.image} source={image} />
          <Text>marsieciai</Text>

          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(e: string) => {
              setForm({ ...form, username: e });
            }}
            keyboardType="username"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => {
              setForm({ ...form, email: e });
            }}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            keyboardType="password"
          />

          <CustomButton title="Submit" handlePress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 32, color: "black" },
  image: { width: 200, height: 200, alignSelf: "center" },
});
