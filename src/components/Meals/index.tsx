import React from "react";

import * as S from "./style";

import { useTheme } from "styled-components/native";

import { Plus } from "@constants/icon";
import { Button } from "@components/Button";
import { MealsList } from "@components/MealsList";
import { useRouter } from "expo-router";

export const Meals = () => {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Title>Refeições</S.Title>
      <Button
        onPress={() => router.push("newMeal")}
        fullWidth
        icon={<Plus size={18} color={colors.white} />}
      >
        Nova Refeição
      </Button>
      <MealsList />
    </S.Wrapper>
  );
};
