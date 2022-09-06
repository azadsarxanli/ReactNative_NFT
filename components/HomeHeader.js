import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, assets, SIZES } from "../constants";
const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
            position: "relative",
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, John Doe 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece for you
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.gray,
            width: "100%",
            borderRadius: SIZES.font,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
            source={assets.search}
          />
          <TextInput
            placeholder="search NFTs"
            style={{
              flex: 1,
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
              placeholderTextColor: COLORS.white,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
