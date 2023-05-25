import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatisticsHeader } from "@components/Statistics/StatisticsHeader/StatisticsHeader";
import { useTheme } from "styled-components/native";
import { GeneralStatistics } from "@components/Statistics/GeneralStatistics/GeneralStatistics";
import { mealStatistics } from "@storage/meal/mealsStatistics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealOnSequence } from "@storage/meal/mealOnSequence";


type Props = {
  isOnDiet: number;
  isOutDiet: number;
  mealsQuantity: number;
  mealsOnDietPercentage: string;
  sequence: number;
};

export default function Statistics() {
  const [statistics, setStatistics] = useState({} as Props);
  const { colors } = useTheme();

  useLayoutEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await mealStatistics();

        setStatistics(data);
        console.log(data)

      } catch (error) {
        throw error;
      }
    };

    fetchStatistics();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.greenLight }}>
      <StatisticsHeader
        mealsOnDietPercentage={+statistics.mealsOnDietPercentage}
      />

      <GeneralStatistics
        isOnDiet={statistics.isOnDiet}
        isOutDiet={statistics.isOutDiet}
        mealsQuantity={statistics.mealsQuantity}
        mealsOnDieTSequence={statistics.sequence}
      />
    </SafeAreaView>
  );
}
