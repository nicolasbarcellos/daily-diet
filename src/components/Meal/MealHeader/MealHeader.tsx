import React from "react";

import * as S from "./style";
import { useRouter } from "expo-router";

type Props = {
  isOnDiet: boolean;
};

export const MealHeader = ({ isOnDiet, ...rest }: Props) => {
  const router = useRouter();

  return (
    <S.Wrapper isOnDiet={isOnDiet} {...rest}>
      <S.IconWrapper activeOpacity={0.7} onPress={() => router.back()}>
        <S.ArrowIcon />
      </S.IconWrapper>
      <S.Title>Refeição</S.Title>
    </S.Wrapper>
  );
};
