import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { setUserInfo } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { H2 } from "../components/TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";

const Home = ({ navigation }) => {
  const { width } = DimensionsHook();
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.userInfo);

  // const PressHandler = () => {
  //   dispatch(setUserInfo("Khalil", "Chikhaoui"));
  // };

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <H2>Welcome Screen</H2>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
});
