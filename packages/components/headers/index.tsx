import React from "react";
import { GestureResponderEvent, Image, Pressable, View } from "react-native";

import AddSVG from "../../../assets/icons/add-new.svg";
import NotificationSVG from "../../../assets/icons/notificationNew.svg";
import { neutral00, secondaryColor } from "../../utils/style/colors";
import { fontMedium16 } from "../../utils/style/fonts";
import { BrandText } from "../BrandText";

interface HeaderWithAvatarProps {
  title: string;
  onPressNotification?: (event: GestureResponderEvent) => void;
  onPressAdd?: (event: GestureResponderEvent) => void;
}

export const HeaderWithAvatar = ({
  title,
  onPressNotification = () => {},
  onPressAdd = () => {},
}: HeaderWithAvatarProps) => {
  return (
    <View
      style={{
        backgroundColor: neutral00,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ height: 32, width: 32, borderRadius: 16 }}
      />
      <BrandText
        style={[
          fontMedium16,
          {
            color: secondaryColor,
          },
        ]}
      >
        {title}
      </BrandText>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={onPressNotification}
          style={{ paddingHorizontal: 12 }}
        >
          <NotificationSVG />
        </Pressable>
        <Pressable onPress={onPressAdd} style={{ paddingHorizontal: 12 }}>
          <AddSVG />
        </Pressable>
      </View>
    </View>
  );
};
