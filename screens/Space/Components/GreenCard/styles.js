import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    greenCard: {
        position: "relative",
        height: windowWidth > 500 ? 112 : 78,
        width: windowWidth > 500 ? 258 : 287,
        borderRadius: 20,
        backgroundColor: colors.green1,
      },
      secondCard: {
        flexDirection: "column",
        marginHorizontal: 5,
      },
});
export default styles;
