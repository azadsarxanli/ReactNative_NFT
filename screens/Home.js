import { View, Text, SafeArea, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";
import {
  NFTCard,
  HomeHeader,
  FocusStatusBar,
  AndroidView,
} from "../components";
import { COLORS, NFTData } from "../constants";
import { StatusBar } from "expo-status-bar";
const HomeScreen = ({ navigation }) => {
  const [nfts, setNfts] = useState(NFTData);

  const handleChangeText = (item) => {
    if (!item.length) return setNfts(NFTData);
    const filteredNfts = NFTData.filter((nft) => {
      return nft.name.toLowerCase().includes(item.toLowerCase());
    });
    if (filteredNfts.length > 0) {
      setNfts(filteredNfts);
    } else {
      setNfts(NFTData);
    }
  };

  return (
    <SafeAreaView style={AndroidView.AndroidSafeArea}>
      <FocusStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nfts}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleChangeText} />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <View
          style={{
            height: 300,
            backgroundColor: COLORS.primary,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default HomeScreen;
