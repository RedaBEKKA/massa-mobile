import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { H5 } from "../../components/TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";
import UseTrails from "./Components/Trails/UseEspace-Section-2";
import { ENDPOINT_WORKSHOPS, ENDPOINT_TRAILS, TOKEN } from "@env";
import UseRecommandation from "./Components/Trails/UseRecomendation";

const Espace = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const [data, setData] = useState(true);
  const [loader, setLoader] = useState(false);

  const PaddingVertical = !isDesktop ? 15 : 10;
  const Left = isDesktop ? 145 : 10;
  const custumDisplay = isDesktop ? "row" : "column";

  const Box = ({ children }) => {
    return (
      <View style={isDesktop ? styles.Box : styles.BoxMobil}>{children}</View>
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setData(false);
    }, 5000);
  }, []);

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
              Title2="Trails et ateliers en cours"
              TextBtn="Sélectioner un trail"
              TextBody="Aucun trail en cours"
              data={data}
              swiper={true}
              type="Trail"
              endpoint={ENDPOINT_TRAILS}
              toNav='Trails'
              navigation={navigation} 
            />
          </Box>
          <Box>
            <UseTrails
              Title="Favoris"
              TextBtn="Consulter notre catalogue"
              TextBody="Vous n'avez pas encore ajouté de favoris"
              Title2="Favoris"
              data={data}
              type="Trail"
              endpoint={ENDPOINT_WORKSHOPS}
              swiper={true}
              toNav='Trails'
              navigation={navigation} 

            />
          </Box>
        </View>

        <View style={[styles.Body, {}]}>
          {/* <Box > */}
          <UseRecommandation
            Title="Recommantdation"
            TextBtn="Coaching"
            TextBody='Pour avoir des recommandations adaptée à votre profil,
    merci de cliquer sur "Coaching" pour répondre au questionnaire.'
            Title2="Recommantdation"
            data={data}
            type="Recommantdation"
            endpoint={ENDPOINT_WORKSHOPS}
            swiper={true}
            toNav='Trails'
              navigation={navigation} 
          />
          {/* </Box> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Espace;
