import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditMealHeader } from "@components/EditMeal/EditMealHeader/EditMealHeader";
import { useTheme } from "styled-components/native";
import { EditMealForm } from "@components/EditMeal/EditMealForm/EditMealForm";

export default function EditMeal() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray5 }}>
      <EditMealHeader />
      <EditMealForm />
    </SafeAreaView>
  );
}
