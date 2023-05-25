import React from "react";
import { useRouter } from "expo-router";
import * as S from "./style";

type Props = {
  mealsOnDietPercentage: number;
};

export const Percentage = ({ mealsOnDietPercentage }: Props) => {
  const router = useRouter();
  return (
    <S.Wrapper onPress={() => router.push("/statistics")} activeOpacity={0.7}>
      <S.PercentageNumber>{mealsOnDietPercentage}%</S.PercentageNumber>
      <S.PercentageDetails>das refeições dentro da dieta</S.PercentageDetails>

      <S.ArrowIcon />
    </S.Wrapper>
  );
};
