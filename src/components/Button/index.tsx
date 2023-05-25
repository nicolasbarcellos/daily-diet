import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./style";

export type ButtonProps = {
  size?: "small" | "medium";
  icon?: JSX.Element;
  fullWidth?: boolean;

  type?: "primary" | "outline";
} & TouchableOpacityProps;

export const Button = ({
  size = "medium",
  icon,
  fullWidth = false,
  type = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      activeOpacity={0.6}
      hasIcon={!!icon}
      size={size}
      type={type}
      fullWidth={fullWidth}
      {...props}
    >
      {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.Title type={type}>{children}</S.Title>
    </S.Wrapper>
  );
};
