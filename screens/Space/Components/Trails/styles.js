import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  trails: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.grayBorder,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf:'center',
    width:799,
    height:284
  },
  trailsMob: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.grayBorder,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf:'center',
    width:343,
    height:284,
    alignSelf:'center',
    marginTop:10
    
  },

});
export default styles;
