import React, { useState } from "react";

import * as S from "./style";
import { TextField } from "@components/TextField";
import { Button } from "@components/Button";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { ButtonDiet } from "@components/ButtonDiet";
import { useRouter, useSearchParams } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { formatDate } from "@utils/formatDate";
import { formatHours } from "@utils/formatHours";
import { mealUpdate } from "@storage/meal/mealUpdate";


type Inputs = {
  title: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export const EditMealForm = () => {
  const router = useRouter();
  const meal = useSearchParams();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showHourPicker, setShowHourPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());

  const [isOnDiet, setIsOnDiet] = useState(meal.isOnDiet === "true");
  const [selectedBtn, setSelectedBtn] = useState("");


  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: meal.title,
      description: meal.description,
      date: meal.date,
      hour: meal.hour,
    },
  });

  const handleChangeDate = (
    event: DateTimePickerEvent,
    dateTime: Date | undefined
  ) => {
    setValue("date", formatDate(dateTime!));

    setShowDatePicker(false);
    setSelectedDate(dateTime!);
  };

  const handleChangeHour = (
    event: DateTimePickerEvent,
    dateTime: Date | undefined
  ) => {
    setShowHourPicker(false);
    setValue("hour", formatHours(dateTime!));
    setSelectedHour(dateTime!);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newMeal = {
        ...data,
        isOnDiet,
        meal_id: meal.meal_id,
      };

      await mealUpdate(newMeal);
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
    <S.Wrapper>
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          style={{ backgroundColor: "red" }}
          testID="dateTimePicker"
          value={selectedDate}
          display="spinner"
          onChange={handleChangeDate}
        />
      )}

      {showHourPicker && (
        <DateTimePicker
          mode="time"
          style={{ backgroundColor: "red" }}
          testID="dateTimePicker"
          value={selectedHour}
          display="spinner"
          onChange={handleChangeHour}
        />
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            label="Nome"
            value={value}
            onChangeText={(value) => onChange(value)}
          />
        )}
        name="title"
        rules={{ required: 'Preencha um nome',  }}
      />
      <S.ErrorText>{errors.title?.message}</S.ErrorText>

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          
          <TextField
            multiline
            numberOfLines={10}
            style={{
              height: 142,
              textAlignVertical: "top",
            }}
            label="Descrição"
            value={value}
            onChangeText={(value) => onChange(value)}
          />
        )}
        name="description"
        rules={{ required: 'Preencha uma descrição',  }}
      />
      <S.ErrorText>{errors.description?.message}</S.ErrorText>

      <S.WrapperRow>
        <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.Inner>
              <TextField
                onPressIn={() => setShowDatePicker(!showDatePicker)}
                label="Data"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
              </S.Inner>
            )}
            name="date"
            rules={{ required: true }}
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <S.Inner>
              <TextField
                onPressIn={() => setShowHourPicker(!showHourPicker)}
                label="Hora"
                value={value}
                onChangeText={(value) => onChange(value)}
              />
              </S.Inner>
            )}
            name="hour"
            rules={{ required: true }}
          />
        </View>
      </S.WrapperRow>

      <S.ButtonDietWrapper>
        <S.Label>Está dentro da dieta?</S.Label>

        <FlatList
          data={[
            { title: "Sim", isOnDiet: true },
            { title: "Não", isOnDiet: false },
          ]}
          renderItem={({ item }) => (
            <ButtonDiet
              onPress={() => {
                setSelectedBtn(item.title);
                setIsOnDiet(item.isOnDiet);
              }}
              isOnDiet={item.isOnDiet}
              isActive={item.isOnDiet === isOnDiet}
              title={item.title}
            />
          )}
          horizontal
          contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
        />
      </S.ButtonDietWrapper>

      <S.ButtonWrapper>
        <Button onPress={handleSubmit(onSubmit)} fullWidth>
          Salvar alterações
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
    </KeyboardAvoidingView>
  );
};
