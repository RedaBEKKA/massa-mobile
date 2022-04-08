import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H2 } from "../components/TextsComponents";

const Workshop = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <H2>Workshop</H2>
    </View>
  );
};

export default Workshop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
});
