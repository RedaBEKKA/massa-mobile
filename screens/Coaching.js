import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";
import React from "react";
import { H2, SmallBoldTxt, H5, LightTxt, Txt, H6, H7, SmallLightTxt } from "../components/TextsComponents";
import BackHeader from "../components/BackHeader";
import { colors } from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";
import Question from "../assets/question.png"
import Rendez from "../assets/rendez.png"
import { PrimaryButton } from "../components/Buttons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Coaching = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackHeader navigation={navigation} />
        <ScrollView>
          <View style={styles.content}>

            <H5 style={styles.textJustify}>Coaching</H5>
            <LightTxt style={styles.textJustify}>
              Vous pouvez prendre rendez-vous avec l’un de nos experts ou répondre à nos questionnaires.</LightTxt>

            <View style={isDesktop && styles.desktopContent}>
              <View style={styles.card}>
                <View style={styles.semiCircle}>
                  <Image source={Rendez} style={styles.image} />
                </View>
                <H7 style={{ position: 'absolute', top: 145, paddingVertical: 6, paddingHorizontal: 10, }}>Rendez-vous avec un expert</H7>
                <LightTxt style={{ position: 'absolute', top: 185, paddingVertical: 6, paddingHorizontal: 10, }}>Vous avez suivi un ou plusieurs Trails, et vous souhaitez échanger avec un de nos experts pour poursuivre votre chemin. Vous aimeriez avoir des précisions sur un de vos trails pour vous orienter.
                  Vous souhaitez aller plus loin en rencontrant un de nos experts « Trails » ou « Atelier ».</LightTxt>
                  <PrimaryButton
                  style={{ position:'absolute',bottom:10,left:10,width: 249}}
                  onPress={() => {}}
                >
                  <SmallLightTxt>Prenez rdv avec un de nos experts</SmallLightTxt>
                </PrimaryButton>
              </View>
              <View style={styles.card}>
                <View style={styles.semiCircle}>
                  <Image source={Question} style={styles.image} />
                </View>
                <H7 style={{ position: 'absolute', top: 145, paddingVertical: 6, paddingHorizontal: 10, }}>Questionnaire</H7>
                <LightTxt style={{ position: 'absolute', top: 185, paddingVertical: 6, paddingHorizontal: 10, }}>Ces questionnaires nous permettent dans un premier temps de vous recommander des contenus en lien avec votre situation. Ils nous permettent aussi de vous orienter vers un service extérieur si nous détectons une situation à risque. A terme, ils nous permettront
                  de construire des trails uniques et personnalisés, pour vous uniquement.</LightTxt>
                <PrimaryButton
                   style={{ position:'absolute',bottom:10,left:10,width: 249}}
                  onPress={() => {}}
                >
                  <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                </PrimaryButton>
              </View>
            </View>


          </View>
        </ScrollView>

      </View>
    </View>
  );
};

export default Coaching;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.beige
  },
  desktopContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textJustify: {
    textAlign: 'center',
    marginTop: 10
  },
  card: {
    borderRadius: 20,
    width: 343,
    height: windowWidth > 500 ? 490 : 421,
    backgroundColor: colors.white,
    marginTop: 15,
    marginRight: windowWidth > 500 ? 15 : 0,
    marginBottom: 10,
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden'
  },
  semiCircle: {
    position: 'absolute',
    height: 527,
    width: 387,
    left: -21,
    top: -393,
    borderRadius: 360,
    backgroundColor: colors.green1,
  },
  image: {
    width: 50,
    height: 55,
    position: 'relative',
    bottom: -455,
    left: 165,
    zIndex: 2,


  }
});
