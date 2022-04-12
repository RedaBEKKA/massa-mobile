import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { BoldTxt, H6, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { useDisclose } from "native-base";

import RolloverSmall from "../rollover/RolloverSmall";
const SwiperItem = ({ item, type, navigation }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Pressable
      onPress={() => (isMobile ? onOpen() : null)}
      style={[styles.container, { width: isDesktop ? 280 : 270 }]}
    >
      <Image source={{ uri: item.poster_link }} style={styles.image} />
      <LinearGradient
        colors={["#1B496500", "#1B496566"]}
        style={styles.image}
      />

      <View style={styles.row}>
        <View style={styles.logoContainer}>
          <MTLogoWhite />
        </View>
        {item.new ? (
          <View style={styles.newButton}>
            <Txt fontSize={13}>Nouveau</Txt>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.textsContainer}>
        <BoldTxt color={colors.white}>{type}</BoldTxt>
        <H6 color={colors.white}>{item.ressourceTitle}</H6>
      </View>
      {isMobile && (
        <RolloverSmall
          type={type}
          item={item}
          navigation={navigation}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Pressable>
  );
};

export default SwiperItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    height: 240,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  logoContainer: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  newButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  textsContainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});
