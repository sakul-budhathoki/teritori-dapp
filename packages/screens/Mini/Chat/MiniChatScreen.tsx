import React from "react";

import { ScreenContainer } from "../../../components/ScreenContainer";
import { ScreenFC } from "../../../utils/navigation";
export const MiniChatScreen: ScreenFC<"MiniChatScreen"> = ({ route }) => {
  return (
    <ScreenContainer
      headerChildren={<></>}
      responsive
      fullWidth
      footerChildren={<></>}
      noScroll
    />
  );
};
