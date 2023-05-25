import React, { useCallback, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@components/Header";
import { useTheme } from "styled-components/native";
import { Percentage } from "@components/Percentage";
import { Meals } from "@components/Meals";
import { mealStatistics } from "@storage/meal/mealsStatistics";
import { useFocusEffect } from "expo-router";

export default function Home() {
  const [percentage, setPercentage] = useState(0);
  const { colors } = useTheme();

  const fetchStatistics = async () => {
    try {
      const data = await mealStatistics();
      const percetangeNumber = isNaN(+data.mealsOnDietPercentage)? 0 : Number(data.mealsOnDietPercentage)
      setPercentage(percetangeNumber);
    } catch (error) {
      throw error;
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [percentage])
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.gray7, paddingHorizontal: 24 }}
    >
      <Header />
      <Percentage mealsOnDietPercentage={percentage} />
      <Meals />
    </SafeAreaView>
  );
}
