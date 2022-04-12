import { Dimensions, StyleSheet } from "react-native";
import DimensionsHook from "../../../hooks/DimensionsHook";
import { colors } from "../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    flex: 1,
  },
  Body: {
    // backgroundColor:'#ccc',
    // alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  desktopContent: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
    // backgroundColor: "#ccc",
    height: 300,
  },
  MobileContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  Box: {
    position: "relative",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:10,
    marginVertical:10,

  },
  BoxMobil: {
    position: "relative",
    borderRadius: 20,
    flexDirection: "column",
  },
});
export default styles;
