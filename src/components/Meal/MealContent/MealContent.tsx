import React, { useState } from "react";

import * as S from "./style";
import { useRouter } from "expo-router";
import { Meal } from "src/types/meal";
import { Button } from "@components/Button";
import { Trash, PencilSimpleLine } from "@constants/icon";
import { mealDelete } from "@storage/meal/mealDelete";
import { Modal, Text } from "react-native";

type Props = {
  meal: Meal;
};

export const MealContent = ({ meal }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const isOnDiet = String(meal.isOnDiet) === "true";

  const title = isOnDiet ? "dentro da dieta" : "fora da dieta";

  const handleDeleteMeal = async () => {
    await mealDelete(meal.meal_id);

    router.back();
  };

  const handleEditMeal = async () => {
    router.push({ pathname: "editMeal", params: meal });
  };

  return (
    <S.Wrapper>
      <S.Title>{meal.title}</S.Title>
      <S.Description>{meal.description}</S.Description>
      <S.Subtitle>Data e hora</S.Subtitle>
      <S.DateInfo>
        {meal.date} às {meal.hour}
      </S.DateInfo>
      <S.LabelButton>
        <S.Circle isOnDiet={isOnDiet} />
        <S.Label>{title}</S.Label>
      </S.LabelButton>
      <S.ButtonWrapper>
        <Button
          onPress={handleEditMeal}
          icon={<PencilSimpleLine size={18} color="#fff" />}
          fullWidth
        >
          Editar refeição
        </Button>
        <Button
          onPress={() => setModalVisible(true)}
          icon={<Trash size={18} />}
          fullWidth
          type="outline"
        >
          Excluir refeição
        </Button>
      </S.ButtonWrapper>
      <S.ModalWrapper>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <S.ModalContentWrapper>
            <S.ModalContent>
              <S.ModalTitle>
                Deseja realmente excluir o registro da refeição?
              </S.ModalTitle>
              <S.ModalButtonWrapper>
                <Button
                  onPress={() => setModalVisible(false)}
                  size="small"
                  type="outline"
                >
                  Cancelar
                </Button>
                <Button onPress={handleDeleteMeal} size="small">
                  Sim, excluir
                </Button>
              </S.ModalButtonWrapper>
            </S.ModalContent>
          </S.ModalContentWrapper>
        </Modal>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};
