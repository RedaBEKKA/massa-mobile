import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  trails: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    width: 1620,
    height: 360,
    overflow:'hidden',
    alignSelf:'center',
    marginTop:15,
    
  },
  trailsMob: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    alignItems: "center",
    alignSelf: "center",
    width: 343,
    alignSelf: "center",
    marginVertical: 10,
  },

  Button: {
    backgroundColor: colors.green2,
    width: 247,
    height: 47,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  BoxTitle: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  Title: {
    position: "absolute",
  },
  TitleMob: {
    top: 10,
  },

  BoxBody: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "15%",
    paddingLeft:10
  },
  BoxBodyMob: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "15%",
    paddingLeft:10

  },
});
export default styles;
