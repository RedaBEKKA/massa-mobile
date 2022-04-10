import { View, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { H5 } from "../../components/TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";
import UseTrails from "./Components/Trails/UseEspace-Section-2";

const Espace = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const PaddingVertical = !isDesktop ? 15 : 10;
  const Left = isDesktop ? 110 : 10;
  const custumDisplay = isDesktop ? "row" : "column";

  const Box = ({ children }) => {
    return (
      <View style={isDesktop ? styles.Box : styles.BoxMobil}>{children}</View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <H5 style={{ paddingLeft: Left, paddingVertical: PaddingVertical }}>
          Mon Espace
        </H5>
        <View style={[styles.Body, { flexDirection: custumDisplay }]}>
          <Box>
            <Status />
            <Score />
          </Box>

          <Box>
            <GrenCards />
            <Coaching navigation={navigation} />
          </Box>
        </View>
        <View style={[styles.Body, { flexDirection: custumDisplay }]}>
          <Box>
            <UseTrails
              Title="Trails en cours"
              TextBtn="Sélectioner un trail"
              TextBody="Aucun trail en cours"
            />
          </Box>
          <Box>
            <UseTrails
              Title="Favoris"
              TextBtn="Consulter notre catalogue"
              TextBody="Vous n'avez pas encore ajouté de favoris"
            />
          </Box>
        </View>
      </ScrollView>
    </View>
  );
};

export default Espace;
