import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import {
  H6,
  H7,
  SmallBoldTxt,
} from "../../../../../components/TextsComponents";
import { colors } from "../../../../../styles/GlobalStyle";
const UseCard = ({ navigation,img,title }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const ToNav = () => {
    navigation.navigate({title});
  };
  const [isHovered, setHovered] = React.useState(false);

  const CustBackground = isHovered ? colors.beige : colors.green2
  const CustColor = !isHovered ? colors.beige : colors.green2
      
  return (
    <View style={isDesktop ? styles.ChatCard : styles.MobCotching}>
      <View style={isDesktop ? styles.DeskLeftBox : styles.LeftBox}>
        <View style={isDesktop ? styles.DesktopBoxImage : styles.BoxImage}>
          <Image source={img} style={styles.image} />
        </View>

        <View>{isDesktop ? <H7 style={{marginLeft:10}}>{title}</H7> : <H6>{title}</H6>}</View>
      </View>

      <TouchableOpacity
        style={isDesktop ? [styles.DestTxt,{backgroundColor:CustBackground}] : [styles.txt,{backgroundColor:CustBackground}]}
        onPress={()=>{}}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SmallBoldTxt style={{color:CustColor}}>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default UseCard;
