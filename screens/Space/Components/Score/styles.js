import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  score: {
    position: "relative",
    height: 236,
    width: '49%',
    borderRadius: 20,
    backgroundColor: colors.blue1,
    marginRight:15,
    overflow:'hidden'
  },
  scoreMob: {
    position: "relative",
    height: 236,
    width: windowWidth * 0.95,
    borderRadius: 20,
    backgroundColor: colors.blue1,
    alignSelf: "center",
    marginBottom: 10,
  },
  Line:{
    backgroundColor:colors.beige,
    height:20,
    width:"100%",
    alignItems:'center',
    // justifyContent:'space-between',
    flexDirection:'row',
    // paddingRight:10,
    position:'absolute',
    top:"50%"
  },
  Line2: {
    backgroundColor: colors.blue3,
    height: 20,
    width: 115 * 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  Points: {
    height: 15,
    width: 15,
    backgroundColor: colors.blue2,
    borderRadius: 10,
    position: "absolute",
    left: 5,
  },
  LineSmall: {
    backgroundColor: colors.beige,
    height: 20,
    width: 3,
    position: "absolute",
    top: "50%",
    right: 20,
  },
});
export default styles;
