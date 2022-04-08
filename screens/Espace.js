import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H2, H7, SmallBoldTxt, SmallLightTxt, Txt } from "../components/TextsComponents";
import { PrimaryButton } from "../components/Buttons";
import Coaching from "../assets/Coaching.png";
import DimensionsHook from "../hooks/DimensionsHook";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Espace = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <View style={isDesktop && styles.desktopContent}>
          <View style={styles.status}>

          </View>
          <View style={styles.score}>

          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.greenCard}>

            </View>
            <View style={styles.greenCard}>

            </View>
          </View>
          <View style={isDesktop && styles.secondCard}>
            <View style={styles.greenCard}>

            </View>
            <View style={styles.greenCard}>

            </View>
          </View>
          <View style={styles.coaching}>
            <Image source={Coaching} style={styles.image} />
            <H7 style={{ position: 'relative', top: 55, textAlign: 'center' }}>Coaching</H7>
            <TouchableOpacity
              style={styles.txt}
              onPress={() => navigation.navigate("Coaching")}
            >
              <SmallBoldTxt >Go !</SmallBoldTxt>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Espace;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  status: {
    position: 'relative',
    height: 236,
    width: 343,
    left: 16,
    top: 76,
    borderRadius: 20,
   
    backgroundColor: colors.red1
  },
  desktopContent:{
    flex: 1, 
    flexDirection: 'row'
  },  
  score: {
    position: 'relative',
    height: 236,
    width: 343,
    left: 26,
    top: 76,
    borderRadius: 20,
   
    backgroundColor: colors.blue1
  },
  greenCard: {
    position: 'relative',
    height: 112,
    width: windowWidth>500?258:343,
    left: 36,
    top: 76,
    borderRadius: 20,
    
    backgroundColor: colors.green1,
    marginTop: 5,
    marginBottom: 5
  },
  coaching: {
    position:'relative',
    height: 234,
    width: windowWidth>500?183:343,
    right:windowWidth>500?50:-40,
    marginLeft:windowWidth>500?-50:0,
    top: 76,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 40,
    height: 40,
    zIndex: 2,
    position: 'relative',
    left: 70,
    top: 26,
  },
  txt: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 90,
    backgroundColor: colors.white,
    position: 'relative',
    left: 66,
    top: 76,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondCard:{
    flex: 1, flexDirection: 'column', marginLeft: -155
  }
});
