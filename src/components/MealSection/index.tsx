import React from "react";
import * as S from "./style";

import { useTheme } from "styled-components/native";

export type MealProps = {
  hour: string;
  title: string;
  isOnDiet: boolean;
  onPress: () => void;
};

export const MealSection = ({ onPress, hour, isOnDiet, title }: MealProps) => {
  const { colors } = useTheme();
  return (
    <S.MealBox onPress={onPress} activeOpacity={0.8}>
      <S.Time>{hour}</S.Time>
      <S.Divider />
      <S.Title numberOfLines={1}>{title}</S.Title>
      <S.DietStatus isOnDiet={isOnDiet} />
    </S.MealBox>
  );
};
