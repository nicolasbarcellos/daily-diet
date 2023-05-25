import React from "react";
import { useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import { MealHeader } from "@components/Meal/MealHeader/MealHeader";
import { MealContent } from "@components/Meal/MealContent/MealContent";

export default function MealPage() {
  const meal = useSearchParams();
  const { colors } = useTheme();

  const isOnDiet = meal.isOnDiet === "true";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isOnDiet ? colors.greenLight : colors.redLight,
      }}
    >
      <MealHeader isOnDiet={isOnDiet} />
      <MealContent meal={meal} />
    </SafeAreaView>
  );
}

// linear-gradient(270deg,var(--neutral-scale-0) 0,hsla(0,0%,99%,.5) 51.04%,hsla(0,0%,99%,0) 100%);
// }
