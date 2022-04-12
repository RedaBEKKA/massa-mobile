import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "../../../../../components/swiper/Swiper";
import { BoldTxt, H6, H7 } from "../../../../../components/TextsComponents";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import styles from "./styles";

const UseTrails = ({
  Title,
  TextBody,
  TextBtn,
  Title2,
  navigation,
  endpoint,
  data,
  type,
  toNav,
}) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  let Cust = data ? 170 : 316;
  let Cust1 = data ? 284 : 625;

  return (
    <View
      style={
        isDesktop
          ? [styles.trails, { height: Cust1 }]
          : [styles.trailsMob, { height: Cust }]
      }
    >
      <View style={styles.BoxTitle}>
        {data ? (
          <H6 style={isDesktop ? styles.Title : styles.TitleMob}>{Title}</H6>
        ) : (
          <View style={isDesktop ? styles.Row : styles.RowMob}>
            <H6 style={isDesktop ? styles.Title : styles.TitleMob}>{Title2}</H6>
            <TouchableOpacity
              onPress={() => {
                console.log("cilc"), navigation.navigate(toNav);
              }}
            >
              <BoldTxt
                style={isDesktop ? styles.TextTouTVoir :styles.TextTouTVoirMob  }
              >
                Tout Voir
              </BoldTxt>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={isDesktop ? styles.BoxBody : styles.BoxBodyMob}>
        {data ? (
          <>
            <H7>{TextBody}</H7>
            <TouchableOpacity style={styles.Button}>
              <Text>{TextBtn}</Text>
            </TouchableOpacity>
          </>
        ) : isDesktop ? (
          <Swiper
            navigation={navigation}
            type={type}
            home={false}
            endpoint={endpoint}
          />
        ) : (
          <Swiper
            navigation={navigation}
            type={type}
            home={false}
            endpoint={endpoint}
          />
        )}
      </View>
    </View>
  );
};

export default UseTrails;
