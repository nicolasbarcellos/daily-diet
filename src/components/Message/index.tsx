import React from "react";

import { ImageProps, ImageSourcePropType, ViewProps } from "react-native";

import * as S from "./style";
import { Button } from "@components/Button";
import { useRouter } from "expo-router";

export type MessageProps = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  btnTitle: string;
} & ViewProps;

export const Message = ({
  title,
  subtitle,
  image,
  btnTitle,
  children,
  ...props
}: MessageProps) => {
  const router = useRouter();

  return (
    <S.Wrapper {...props}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Image source={image} />
      <Button size="medium" onPress={() => router.push("/")}>
        Ir para a página inicial
      </Button>
    </S.Wrapper>
  );
};
