import React from "react";
import { View } from "react-native";

import addSVG from "../../../../assets/icons/add.svg";
import { SVG } from "../../SVG";

const icons = {
  Chats: addSVG,
  Feed: addSVG,
  Wallets: addSVG,
};

interface TabBarIconProps {
  size: number;
  color: string;
  title: string;
  focused: boolean;
}

export const TabBarIcon = ({ color, title }: TabBarIconProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SVG source={icons[title as keyof typeof icons]} height={10} width={10} />
    </View>
  );
};
