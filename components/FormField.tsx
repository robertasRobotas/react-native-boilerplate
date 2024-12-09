import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

type FormFieldType = {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  keyboardType: string;
  placeholder?: string;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  keyboardType,
  placeholder,
}: FormFieldType) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          placeholderTextColor="red"
          onChangeText={handleChangeText}
          secureTextEntry={keyboardType === "password"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "blue",
    width: "100%",
  },
});

export default FormField;
