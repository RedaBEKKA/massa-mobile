import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H6, BoldTxt } from "../components/TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";
import Swiper from "../components/swiper/Swiper";
import Footer from "../components/Footer";
import { ENDPOINT_WORKSHOPS, ENDPOINT_TRAILS } from "@env";

const Home = ({ navigation }) => {
  const { isMobile, isDesktop } = DimensionsHook();

  const swiperContainerStye = {
    backgroundColor: colors.white,
    width: "95%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: isMobile ? 10 : 20,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={Platform.OS === "web"}
      >
        <HeaderComponent navigation={navigation} />
        {/** History swiper */}
        <View style={swiperContainerStye}>
          <H6>Reprendre avec le profil de Brigitte</H6>
          <Swiper
            navigation={navigation}
            type="Trail"
            endpoint={ENDPOINT_TRAILS}
          />
        </View>
        {/**  Trails Swiper */}
        <View style={swiperContainerStye}>
          <View style={styles.row}>
            <H6>Trails</H6>
            <BoldTxt style={{ paddingRight: isMobile ? 10 : 20 }}>
              Tout Voir
            </BoldTxt>
          </View>

          <Swiper
            navigation={navigation}
            type="Trail"
            endpoint={ENDPOINT_TRAILS}
          />
        </View>
        {/**  Workshops */}
        <View style={[swiperContainerStye, { marginBottom: 30 }]}>
          <View style={styles.row}>
            <H6>Ateliers</H6>
            <BoldTxt style={{ paddingRight: isMobile ? 10 : 20 }}>
              Dropdown here
            </BoldTxt>
          </View>

          <Swiper
            navigation={navigation}
            type="Atelier"
            endpoint={ENDPOINT_WORKSHOPS}
          />
        </View>
        {isDesktop && <Footer />}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  item: {
    height: 240,
    backgroundColor: colors.blue3,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
