import React from "react";
import { GestureResponderEvent, Image, Pressable, View } from "react-native";

import AddSVG from "../../../assets/icons/add-new.svg";
import NotificationSVG from "../../../assets/icons/notification-new.svg";
import { BrandText } from "../../components/BrandText";
import { neutral00, secondaryColor } from "../../utils/style/colors";
import { fontMedium16 } from "../../utils/style/fonts";
import { layout } from "../../utils/style/layout";

interface HeaderMiniProps {
  title: string;
  onPressNotification?: (event: GestureResponderEvent) => void;
  onPressAdd?: (event: GestureResponderEvent) => void;
}

export const HeaderMini = ({
  title,
  onPressNotification = () => {},
  onPressAdd = () => {},
}: HeaderMiniProps) => {
  return (
    <View
      style={{
        backgroundColor: neutral00,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: layout.spacing_x1_5,
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
          style={{ paddingHorizontal: layout.spacing_x2 }}
        >
          <NotificationSVG />
        </Pressable>
        <Pressable
          onPress={onPressAdd}
          style={{ paddingHorizontal: layout.spacing_x2 }}
        >
          <AddSVG />
        </Pressable>
      </View>
    </View>
  );
};
