import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  status: {
    position: "relative",
    height: 236,
    width: 388,
    borderRadius: 20,
    backgroundColor: colors.red1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight:15
  },
  statusMob: {
    position: "relative",
    height: 236,
    width: windowWidth*.95,
    borderRadius: 20,
    backgroundColor: colors.red1,
    alignItems: "center",
    alignSelf:'center',
    justifyContent: "space-evenly",
    marginVertical:10

  },
  statusItem: {
    flexDirection: "row",
  },
  item: {
    marginHorizontal: 10,
  },
  itemImage: {
    width: 36,
    height: 38,
  },
  Image: {
    width: 87,
    height: 38,

  },
});
export default styles;
