import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Platform, Text } from "react-native";
import SwiperItem from "./SwiperItem";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { TOKEN } from "@env";

const Swiper = ({ type, endpoint, navigation, Columns, horizontal }) => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

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
    return (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={horizontal}
        numColumns={Columns}
        style={{ marginTop: 15 }}
        data={[0, 1, 2]}
        keyExtractor={(item) => item}
        renderItem={() => <LoaderItem />}
      />
    );
  }

  // FLATLIST WITH DATA
  return (
    <FlatList
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      horizontal={horizontal}
      numColumns={Columns}
      style={{ height: "100%", width: "100%" }}
      data={Data}
      keyExtractor={(item) => item.ressourceTitle}
      renderItem={(props) => (
        <SwiperItem {...props} type={type} navigation={navigation} />
      )}
    />
  );
};

export default Swiper;

const styles = StyleSheet.create({});
