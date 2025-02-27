import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import addSVG from "../../../../assets/icons/add.svg";
import gameBoxSVG from "../../../../assets/icons/game-box.svg";
import { NFT } from "../../../api/marketplace/v1/marketplace";
import { BrandText } from "../../../components/BrandText";
import FlexRow from "../../../components/FlexRow";
import { OptimizedImage } from "../../../components/OptimizedImage";
import { SVG } from "../../../components/SVG";
import { LegacyTertiaryBox } from "../../../components/boxes/LegacyTertiaryBox";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { isNFTStaked } from "../../../utils/game";
import {
  neutral33,
  secondaryColor,
  withAlpha,
  neutralA3,
  redDefault,
} from "../../../utils/style/colors";
import { fontMedium14, fontSemibold12 } from "../../../utils/style/fonts";
import { layout } from "../../../utils/style/layout";

interface BreedingSlotProps {
  active?: boolean;
  ripper?: NFT | undefined;
  breedingsLeft?: number;
  onPress?(): void;
}

export const BreedingSlot: React.FC<BreedingSlotProps> = ({
  onPress,
  ripper,
  breedingsLeft,
  active,
}) => {
  const isStaked = isNFTStaked(ripper);
  const isMobile = useIsMobile();
  const computedSize = isMobile ? 150 : 200;
  const imageSize = computedSize - layout.spacing_x2 * 2;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <LegacyTertiaryBox
        width={computedSize}
        height={computedSize}
        mainContainerStyle={{
          padding: layout.spacing_x2,
          borderRadius: 8,
          borderColor: neutral33,
          borderWidth: active ? 1.2 : 1,
        }}
      >
        {ripper ? (
          <>
            <FlexRow
              style={{
                position: "absolute",
                zIndex: 1,
                top: 10,
                left: 10,
                width: "auto",
                alignItems: "center",
              }}
            >
              <SVG
                source={gameBoxSVG}
                width={16}
                height={16}
                color={secondaryColor}
              />
              <BrandText
                style={[
                  { color: neutralA3, marginLeft: layout.spacing_x1 },
                  fontMedium14,
                ]}
              >
                Breedings left: {breedingsLeft}
              </BrandText>
            </FlexRow>

            <OptimizedImage
              style={[
                {
                  width: computedSize - 20,
                  height: computedSize - 20,
                },
                isStaked && { opacity: 0.4 },
              ]}
              sourceURI={ripper.imageUri}
              width={imageSize}
              height={imageSize}
            />

            {isStaked && (
              <BrandText
                style={{
                  position: "absolute",
                  top: 2 * layout.spacing_x4,
                  color: redDefault,
                  backgroundColor: withAlpha(redDefault, 0.3),
                  paddingVertical: layout.spacing_x0_5,
                  paddingHorizontal: layout.spacing_x1_5,
                  borderRadius: 100,
                  ...fontSemibold12,
                }}
              >
                Staked
              </BrandText>
            )}
          </>
        ) : (
          <SVG
            source={addSVG}
            width={20}
            height={20}
            fontSize={4}
            color={secondaryColor}
          />
        )}
      </LegacyTertiaryBox>
    </TouchableOpacity>
  );
};
