import React from "react";
import { View, Text, Image } from "react-native";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import styles from "./styles";
import { H6, H7 } from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";

const Trails = () => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const Margin = isDesktop ? 15 : 0;
  const MarginTop = !isDesktop ? 15 : 0;
  return (
    <View style={isDesktop ? styles.trails : styles.trailsMob} >
      <H6 >Trails en cours </H6>
      <H7 >Randonneur</H7>
    </View>
  );
};

export default Trails;
