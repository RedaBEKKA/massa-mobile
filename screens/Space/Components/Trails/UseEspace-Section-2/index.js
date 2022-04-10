import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import Swiper from "../../../../../components/swiper/Swiper";
import { H6, H7 } from "../../../../../components/TextsComponents";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import styles from "./styles";
import { ENDPOINT_WORKSHOPS, ENDPOINT_TRAILS } from "@env";

const UseTrails = ({ Title, TextBody, TextBtn, Title2, getData, swiper,navigation ,data}) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const Margin = isDesktop ? 15 : 0;
  const MarginTop = !isDesktop ? 15 : 0;

  let card = [
    {
      nom: "trail",
      url: "../../../../../assets/Card/img1.png",
      isNew: true,
      porcentage: 40,
      Title: "Intelegence émentionelle",
    },
    {
      nom: "trail",
      url: "../../../../../assets/Card/img2.png",
      isNew: true,
      porcentage: 20,
      Title: "Confiance en soi",
    },
    {
      nom: "trail",
      url: "../../../../../assets/Card/img3.png",
      isNew: false,
      porcentage: 60,
      Title: "Sortie de la manipulation",
    },
  ];

  let Cust = !data ? 170 : 316;
  let Cust1 = !data ? 284 : 625;

  return (
    <View
      style={
        isDesktop
          ? [styles.trails, { height: Cust1 }]
          : [styles.trailsMob, { height: Cust }]
      }
    >
      <View style={styles.BoxTitle}>
        {!data ? (
          <H6 style={isDesktop ? styles.Title : styles.TitleMob}>{Title}</H6>
        ) : (
          <H6 style={isDesktop ? styles.Title : styles.TitleMob}>{Title2}</H6>
        )}
      </View>

      <View style={isDesktop ? styles.BoxBody : styles.BoxBodyMob}>
        {!data ? (
          <>
            <H7>{TextBody}</H7>
            <TouchableOpacity style={styles.Button} onPress={getData}>
              <Text>{TextBtn}</Text>
            </TouchableOpacity>
          </>
        ) : swiper ? (
          <Swiper
            navigation={navigation}
            type="Trail"
            endpoint={ENDPOINT_TRAILS}
            home="false"
            Columns={isDesktop ? 2 : 1}
            horizontal={isDesktop ? false : true}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default UseTrails;
