import { View, Text } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../theme/colors";

export default function Header({ screenName }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
        elevation: 10,
        shadowColor: COLORS.grey,
        paddingTop: responsiveHeight(4),
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: responsiveFontSize(3),
          padding: responsiveWidth(5),
          fontWeight: "bold",
        }}
      >
        {screenName}
      </Text>
    </View>
  );
}
