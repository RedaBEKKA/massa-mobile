import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "../../../../../components/swiper/Swiper";
import { BoldTxt, H6, H7 } from "../../../../../components/TextsComponents";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import styles from "./styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UseRecommandation = ({
  Title,
  TextBody,
  TextBtn,
  Title2,
  toNav,
 
  navigation,
  endpoint,
  data,
  type,
}) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  let Cust = data ? 170 : 316;
  let Cust1 = data ? 284 : 360;
  let CustWidth = data ? windowWidth * 0.41 : windowWidth * 0.415 * 2;
  let CustMArgLeft = !data ? 0 : 150;
  let CustSelf = !data ? "center" : "flex-start";
let Font = isDesktop ? 16 : 12
  return (
    <View
      style={
        isDesktop
          ? [
              styles.trails,
              {
                height: Cust1,
                width: CustWidth,
                alignSelf: CustSelf,
                marginLeft: CustMArgLeft,
              },
            ]
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
                style={{ paddingRight: isMobile ? 10 : 20, cursor: "pointer" }}
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
            <H7 style={isDesktop? styles.TextBody : styles.TextMob}>{TextBody}</H7>
            <TouchableOpacity style={styles.Button}>
              <Text>{TextBtn}</Text>
            </TouchableOpacity>
          </>
        ) : isDesktop ? (
          <Swiper
            navigation={navigation}
            type={type}
            home={true}
            endpoint={endpoint}
          />
        ) : (
          <Swiper
            navigation={navigation}
            type={type}
            home={true}
            endpoint={endpoint}
          />
        )}
      </View>
    </View>
  );
};

export default UseRecommandation;
