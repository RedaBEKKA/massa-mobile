import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Platform, Text } from "react-native";
import SwiperItem from "./SwiperItem";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { TOKEN } from "@env";
import DimensionsHook from "../../hooks/DimensionsHook";

const Swiper = ({ type, endpoint, navigation, home }) => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(endpoint, { access_token: TOKEN });
    setData(Response.data);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);

  // 3 Loader item to show
  if (loader) {
    return isDesktop ? (
      // Check if the user is in the main screen
      home ? (
        <FlatList
          showsHorizontalScrollIndicator={Platform.OS === "web"}
          horizontal={true}
          numColumns={1}
          style={{ marginTop: 15 }}
          data={[0, 1, 2]}
          renderItem={() => <LoaderItem />}
          keyExtractor={(item) => "_" + item}
          key={"_"}
        />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={Platform.OS === "web"}
          horizontal={false}
          numColumns={2}
          style={{ marginTop: 15 }}
          data={[0, 1, 2]}
          renderItem={() => <LoaderItem />}
          keyExtractor={(item) => "_" + item}
          key={"_"}
        />
      )
    ) : (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={true}
        numColumns={1}
        style={{ marginTop: 15 }}
        data={[0, 1, 2]}
        keyExtractor={(item) => "#" + item}
        key={"#"}
        renderItem={() => <LoaderItem />}
      />
    );
  }

  // FLATLIST WITH DATA
  // add CONDITION FOR FLAT LIST WITH 2 COL
  return isDesktop ? (
    home ? (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={true}
        numColumns={1}
        style={{ height: "100%", width: "100%" }}
        data={Data}
        keyExtractor={(item) => "_" + item.ressourceTitle}
        key={"_"}
        renderItem={(props) => (
          <SwiperItem {...props} type={type} navigation={navigation} />
        )}
      />
    ) : (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={false}
        numColumns={2}
        style={{ height: "100%", width: "100%" }}
        data={Data}
        keyExtractor={(item) => "_" + item.ressourceTitle}
        key={"_"}
        renderItem={(props) => (
          <SwiperItem {...props} type={type} navigation={navigation} />
        )}
      />
    )
  ) : (
    <FlatList
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      horizontal={true}
      numColumns={1}
      style={{ height: "100%", width: "100%" }}
      data={Data}
      keyExtractor={(item) => "#" + item.ressourceTitle}
      key={"#"}
      renderItem={(props) => (
        <SwiperItem {...props} type={type} navigation={navigation} />
      )}
    />
  );
};

export default Swiper;

const styles = StyleSheet.create({});
