import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { H6, H7 } from "../../../../../components/TextsComponents";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import styles from "./styles";

const UseTrails = ({Title,TextBody,TextBtn}) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const Margin = isDesktop ? 15 : 0;
  const MarginTop = !isDesktop ? 15 : 0;
  return (
    <View style={isDesktop ? styles.trails : styles.trailsMob} >
      <H6 style={{position:'absolute', top:10,left: 15}} >{Title}</H6>
      <H7 style={{position:'absolute', top:'20%',alignItems:'center',marginTop:20, textAlign:'center'}} >{TextBody}</H7>
      <TouchableOpacity style={isDesktop ? styles.ButtonDesktop :styles.ButtonDesktopMob}>
          <Text>{TextBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseTrails;
