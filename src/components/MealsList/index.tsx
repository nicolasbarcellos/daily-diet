import React, { useCallback, useState } from "react";
import { SectionList } from "react-native";
import * as S from "./style";

import { useTheme } from "styled-components/native";
import { MealSection } from "@components/MealSection";
import { MealAll } from "@storage/meal/mealAll";
import { Meal } from "src/types/meal";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type DataProps = {
  title: string;
  data: Meal[];
};

export const MealsList = () => {
  const { colors } = useTheme();
  const route = useRouter();

  const [data, setData] = useState<DataProps[]>([]);

  const handleMealPress = (meal: Meal) => {
    route.push({
      pathname: `/meal/${meal.meal_id}`,
      params: meal,
    });
  };

  const fetchMeals = async () => {
    try {
      const meals: Meal[] = await MealAll();

      const sections = meals.reduce((obj, item) => {
        const date = item.date;

        if (!obj[date]) {
          obj[date] = {
            title: date,
            data: [],
          };
        }

        obj[date].data.push(item);
        return obj;
      }, {} as Record<string, { title: string; data: Meal[] }>);

      setData(Object.values(sections));
    } catch (error) {
      throw error;
    }
  };


  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Wrapper>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <MealSection
            onPress={() => handleMealPress(item)}
            hour={item.hour}
            isOnDiet={String(item.isOnDiet) === "true"}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.meal_id}
        renderSectionHeader={({ section: { title } }) => (
          <S.Date>{title}</S.Date>
        )}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: "10%" }}
        showsVerticalScrollIndicator={false}

        // ListFooterComponent={() => ()}
      />
    </S.Wrapper>
  );
};
