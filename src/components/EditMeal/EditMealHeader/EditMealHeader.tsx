import React from "react";

import * as S from "./style";
import { useRouter } from "expo-router";

export const EditMealHeader = () => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.IconWrapper activeOpacity={0.7} onPress={() => router.back()}>
        <S.ArrowIcon />
      </S.IconWrapper>
      <S.Title>Editar refeição</S.Title>
    </S.Wrapper>
  );
};
