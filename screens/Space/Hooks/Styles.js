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
    justifyContent: "space-evenly",

  },
  desktopContent: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
    // backgroundColor: "#ccc",
    height:300

  },
  MobileContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  TrailsContent: {
    backgroundColor: "#ccc",
    height: 300,
    marginTop:10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection:'row'
  },
  Box: {
    position: "relative",
    height: 284,
    width: 799,
    borderRadius: 20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  BoxMobil: {
    position: "relative",
    borderRadius: 20,
    flexDirection:'column'
  },
});
export default styles;
