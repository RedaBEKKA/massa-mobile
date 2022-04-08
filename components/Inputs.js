import React from "react";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { colors } from "../styles/GlobalStyle";

export const Input = ({
  placeholder,
  outlineColor,
  activeOutlineColor,
  placeholderTextColor,
  style,
  value,
  onChangeText,
  secureTextEntry,
  right,
}) => {
  return (
    <TextInput
      right={right || null}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry || false}
      onChangeText={onChangeText}
      mode="outlined"
      outlineColor={outlineColor || colors.grayBorder}
      activeOutlineColor={activeOutlineColor || colors.green2}
      placeholderTextColor={placeholderTextColor || colors.grayBorder}
      style={{
        backgroundColor: "#fff",
        paddingVertical: 4,
        justifyContent: "center",
        color: colors.blue3,
        ...style,
      }}
    />
  );
};

export const RadioInput = ({ onPress, checked,title }) => {
  return (
    <CheckBox
      checked={checked}
      title={title || <></>}
      containerStyle={{
        alignSelf: "flex-start",
        margin: 0,
        padding: 0,
        backgroundColor: "transparent",
        borderWidth: 0,
      }}
      checkedIcon={
            <Ionicons name="checkmark-circle" size={24} color={colors.green2} />
          }
          uncheckedIcon={
            <Ionicons
              name="ios-radio-button-off-outline"
              size={24}
              color={colors.grayBorder}
            />
          }
      onPress={onPress}
    />
  );
};
