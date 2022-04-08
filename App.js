import React, { useState } from "react";
import { SafeAreaView, StatusBar, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./styles/GlobalStyle";
import UseFonts from "./hooks/UseFonts";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import Loader from "./screens/Loader";
import { Provider } from "react-redux";
import store from "./redux/store";
import TabNavigation from "./utils/TabNavigation";
import Login from "./screens/Login";
import Coaching from "./screens/Coaching";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { IS_PROD } from "@env";
const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...(DefaultTheme.fonts.regular.fontFamily = "OxygenRegular"),
  },
};

export default function App() {
  // NATIVE STACK NAVIGATOR
  const Stack = createNativeStackNavigator();
  // SET APP IS READY
  const [IsReady, SetIsReady] = useState(false);

  // LOADFONTS
  const LoadFonts = async () => {
    await UseFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <StatusBar style="light" backgroundColor={colors.green2} />
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {parseInt(IS_PROD) ? (
                <Stack.Screen name="Login" component={Login} />
              ) : (
                <></>
              )}

              <Stack.Screen name="TabNavigation" component={TabNavigation} />
              <Stack.Screen name="Coaching" component={Coaching} />
              <Stack.Screen name="Loader" component={Loader} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </PaperProvider>
  );
}

{
  /**   <ImageBackground
        source={Background}

      />
      <View
        style={{
          position: "absolute",
          width,
          height,
          opacity: 0.15,
          backgroundColor: colors.beige,
          zIndex: 2,
        }}
      /> */
}
