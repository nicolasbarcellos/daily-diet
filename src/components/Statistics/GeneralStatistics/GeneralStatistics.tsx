import React, { useLayoutEffect, useState } from "react";

import * as S from "./style";
import { mealStatistics } from "@storage/meal/mealsStatistics";

type Props = {
  isOnDiet: number;
  isOutDiet: number;
  mealsQuantity: number;
  mealsOnDieTSequence: number;
};

export const GeneralStatistics = ({
  mealsQuantity,
  isOnDiet,
  isOutDiet,
  mealsOnDieTSequence,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Title>Estatísticas gerais</S.Title>
      <S.InfoWrapper>
        <S.InfoBox>
          <S.InfoNumber>{mealsOnDieTSequence}</S.InfoNumber>
          <S.InfoDetails>
            melhor sequência de pratos dentro da dieta
          </S.InfoDetails>
        </S.InfoBox>
        <S.InfoBox>
          <S.InfoNumber>{mealsQuantity || 0}</S.InfoNumber>
          <S.InfoDetails>refeições registradas</S.InfoDetails>
        </S.InfoBox>
      </S.InfoWrapper>

      <S.InfoWrapperRow>
        <S.InfoBoxRow isOnDiet={true}>
          <S.InfoNumber>{isOnDiet || 0}</S.InfoNumber>
          <S.InfoDetails>refeições dentro da dieta</S.InfoDetails>
        </S.InfoBoxRow>
        <S.InfoBoxRow isOnDiet={false}>
          <S.InfoNumber>{isOutDiet || 0}</S.InfoNumber>
          <S.InfoDetails>refeições fora da dieta</S.InfoDetails>
        </S.InfoBoxRow>
      </S.InfoWrapperRow>
    </S.Wrapper>
  );
};
