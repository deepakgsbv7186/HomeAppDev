import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import COLOR from "../theme/COLOR";
export default function UserCard({ user }) {
  const { color, userName, title, popularity, like, followed, rank } = user;
  // console.log(`My color is ${color}`);
  return (
    <>
      <View
        style={{
          backgroundColor: color,
          shadowColor: color,
          shadowRadius: 10,
          shadowOffset: 20,
          marginTop: 15,
        }}
        className={`flex-row space-x-2 py-4 px-2 mx-5 rounded-2xl shadow-lg`}
        // className={`flex-row space-x-2 bg-${COLOR.blue}-400 py-4 px-2 mx-5 my-2 rounded-2xl shadow-lg shadow-slate-400`}
      >
        {/* avatar */}
        <View className="flex-col justify-start items-start">
          <View className="w-16">
            <MaterialCommunityIcons
              name="face-man-profile"
              color={COLOR.white}
              size={responsiveFontSize(8)}
            />
          </View>
        </View>

        <View className="flex-row">
          {/* details */}
          <View className="w-52 flex-col gap-2">
            <View className="flex-col justify-end gap-1">
              <Text className="text-white text-base font-bold">{userName}</Text>
              <Text className="text-white text-sm font-bold">
                Title: {title}
              </Text>
            </View>
            <View className="flex-row justify-start gap-2 items-center">
              <View className="flex justify-center items-center">
                <Text className="text-white text-xs font-semibold">
                  {popularity}
                </Text>
                <Text className="text-white text-xs font-semibold">
                  Popularity
                </Text>
              </View>
              <View className="flex justify-center items-center">
                <Text className="text-white text-xs font-semibold">{like}</Text>
                <Text className="text-white text-xs font-semibold">Like</Text>
              </View>
              <View className="flex justify-center items-center">
                <Text className="text-white text-xs font-semibold">
                  {followed}
                </Text>
                <Text className="text-white text-xs font-semibold">
                  Followers
                </Text>
              </View>
            </View>
          </View>

          {/* ranking */}
          <View className="flex-col gap-2 justify-start items-center">
            <View>
              <Text className="text-white text-2xl font-bold">...</Text>
            </View>
            <View className="flex-col gap-1 justify-center items-center">
              <Text className="text-white text-sm font-bold">{rank}</Text>
              <Text className="text-white text-xs font-bold">Ranking</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
