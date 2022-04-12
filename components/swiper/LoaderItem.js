import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Spinner from "../Spinner";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";

const LoaderItem = () => {
  const { isDesktop } = DimensionsHook();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const Cust = windowWidth > 800 ? 370 : 280 
  useEffect(() => {
    console.log('windowWidth', windowWidth)
  }, [])
  
  return (
    <View style={[styles.container, { width: isDesktop ? 280 : 270 }]}>
      <Spinner size="large" />
    </View>
  );
};

export default LoaderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    height: 240,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
