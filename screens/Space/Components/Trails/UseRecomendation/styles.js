import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  trails: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    height: 360,
    overflow: "hidden",
    marginVertical: 15,
  },
  trailsMob: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: colors.beige,
    alignItems: "center",
    alignSelf: "center",
    width: windowWidth*.97,
    alignSelf: "center",
    marginVertical: 10,
  },
  Row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:windowWidth*.41*2,
   
  },  
  RowMob:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:windowWidth*.95,
    paddingHorizontal:10
   
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
  },
  TextMob:{
    fontSize:14
  },  

  BoxBody: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "15%",
    paddingLeft: 10,
  },
  BoxBodyMob: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "15%",
    paddingLeft: 10,
  },
});
export default styles;
