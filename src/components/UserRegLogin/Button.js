import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../../theme/colors";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const Button = ({ title, btnColor, btnWidth, onPress = () => {} }) => {
  // const btnColor = COLORS.black;
  // const btnWidth = 40;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: responsiveHeight(5.6),
        width: btnWidth,
        backgroundColor: btnColor,
        marginVertical: responsiveWidth(5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: responsiveWidth(2),
        padding: responsiveWidth(2),
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "500",
          fontSize: responsiveFontSize(2),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
