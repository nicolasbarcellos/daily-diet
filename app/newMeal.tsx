import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewMealHeader } from "@components/NewMeal/NewMealHeader/NewMealHeader";
import { useTheme } from "styled-components/native";
import { NewMealForm } from "@components/NewMeal/NewMealForm/NewMealForm";


export default function NewMeal() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray5 }}>
      <NewMealHeader />

      <NewMealForm />
    </SafeAreaView>
  );
}
