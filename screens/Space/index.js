import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import {
  H2,
  H5,
  H6,
  H7,
  SmallBoldTxt,
  SmallLightTxt,
  Txt,
} from "../../components/TextsComponents";
import { PrimaryButton } from "../../components/Buttons";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import bacImg from "../../assets/Espace/Rectangle429.png";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";

const Espace = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const PaddingVertical = !isDesktop ? 15 : 10;
  const Left = isDesktop ? 90 : 10;

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <>
          <H5 style={{ paddingLeft: Left, paddingVertical: PaddingVertical }}>
            Mon Espace
          </H5>
          <View
            style={isDesktop ? styles.desktopContent : styles.MobileContent}
          >
            <Status />
            <Score />
            <GrenCards />
            <Coaching navigation={navigation} />
          </View>
        </>
      </ScrollView>
    </View>
  );
};

export default Espace;
