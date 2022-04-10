import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  trails: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf:'center',
    width:799,
    height:284
  },
  trailsMob: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf:'center',
    width:343,
    height:170,
    alignSelf:'center',
    marginVertical:10
    
  },
  ButtonDesktopMob:{
    backgroundColor: colors.green2,
    width:247,
    height:47,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:10

  },
  ButtonDesktop:{
    backgroundColor: colors.green2,
    width:247,
    height:47,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:'35%'

  }

});
export default styles;
