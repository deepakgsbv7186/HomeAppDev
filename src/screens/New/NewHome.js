import { View, FlatList } from "react-native";
import React from "react";
import UserCard from "../../components/UserCard";
import Users from "../../constant/constant";

export default function NewHome() {
  return (
    <>
      <FlatList
        style={{ marginTop: 30 }}
        data={Users}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
