import React from "react";

import * as S from "./style";
import { useRouter } from "expo-router";

type Props = {
  mealsOnDietPercentage: number;
};

export const StatisticsHeader = ({ mealsOnDietPercentage }: Props) => {
  const router = useRouter();

  const percentage = Number.isNaN(+mealsOnDietPercentage)
    ? 0
    : mealsOnDietPercentage;

  return (
    <S.Wrapper>
      <S.PercentageNumber>{percentage}%</S.PercentageNumber>
      <S.PercentageDetails>das refeições dentro da dieta</S.PercentageDetails>
      <S.IconWrapper activeOpacity={0.7} onPress={() => router.back()}>
        <S.ArrowIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
};
