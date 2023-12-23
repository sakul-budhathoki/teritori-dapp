import React from "react";
import { Switch, View } from "react-native";

import feedSVG from "../../../../assets/icons/bottomTab/feed.svg";
import walletSVG from "../../../../assets/icons/bottomTab/wallets.svg";
import {
  blueDefault,
  neutral99,
  secondaryColor,
} from "../../../utils/style/colors";
import { SVG } from "../../SVG";

const icons = {
  Chats: "",
  Feed: feedSVG,
  Wallets: walletSVG,
};

interface TabBarIconProps {
  size: number;
  color: string;
  title: string;
  focused: boolean;
}

export const TabBarIcon = ({
  color,
  title,
  focused,
  size,
}: TabBarIconProps) => {
  if (title === "Chats") {
    return (
      <Switch
        trackColor={{ false: neutral99, true: blueDefault }}
        thumbColor={!focused ? neutral99 : secondaryColor}
        ios_backgroundColor={!focused ? blueDefault : neutral99}
        value={focused}
      />
    );
  }
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SVG
        source={icons[title as keyof typeof icons]}
        height={size}
        width={size}
        fill={color}
      />
    </View>
  );
};
