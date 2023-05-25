import React, { useState } from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./style";
import { useTheme } from "styled-components/native";

export type ButtonDietProps = {
  isOnDiet?: boolean;
  title: string;
  isActive?: boolean;
} & TouchableOpacityProps;

export const ButtonDiet = ({
  isOnDiet,
  title,
  isActive,
  ...props
}: ButtonDietProps) => {
  const { colors } = useTheme();
  console.log(isActive);

  return (
    <S.Wrapper isActive={isActive} isOnDiet={isOnDiet} {...props}>
      <S.Circle isOnDiet={isOnDiet} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
