import React, { useEffect, useLayoutEffect, useState } from "react";

import * as S from "./style";
import { TextField } from "@components/TextField";
import { Button } from "@components/Button";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { ButtonDiet } from "@components/ButtonDiet";
import { useFocusEffect, useRouter } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { MealCreate } from "@storage/meal/mealCreate";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { formatDate } from "@utils/formatDate";
import { formatHours } from "@utils/formatHours";
import { mealStatistics } from "@storage/meal/mealsStatistics";
import { mealOnSequence } from "@storage/meal/mealOnSequence";

type Inputs = {
  title: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export const NewMealForm = () => {
  const router = useRouter();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showHourPicker, setShowHourPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());
  const [error, setError] = useState(false)

  const [isOnDiet, setIsOnDiet] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
   
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
    const newMeal = {
      ...data,
      isOnDiet,
      meal_id: Math.floor(Date.now() * Math.random()).toString(36),
    };

    if (!selectedBtn) {
      setError(true)
      return
    }

    // setError(false)

    try {
      await MealCreate({
        ...newMeal,
      });

      setSelectedBtn('')
      reset()
      isOnDiet ? router.push("/success") : router.push("/error");
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
              <S.ErrorText>{errors.date?.message}</S.ErrorText>
              </S.Inner>
            )}
            name="date"
            rules={{ required: 'Preencha uma data',  }}
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
              <S.ErrorText>{errors.hour?.message}</S.ErrorText>
              </S.Inner>
            )}
            
            name="hour"
            rules={{ required: 'Preencha uma hora',  }}
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
                setError(false)
                setSelectedBtn(item.title);
                setIsOnDiet(item.isOnDiet);
              }}
              isOnDiet={item.isOnDiet}
              isActive={item.title === selectedBtn}
              title={item.title}
            />
          )}
          horizontal
          contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
        />
        {error && <S.ErrorText style={{marginTop: 10}}>Selecione se está dentro da dieta</S.ErrorText>}
      </S.ButtonDietWrapper>

      <S.ButtonWrapper>
        <Button onPress={handleSubmit(onSubmit)} fullWidth>
          Cadastrar refeição
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
    </KeyboardAvoidingView>
  );
};
