import React, { useState } from "react";

import { TextInputProps } from "react-native";

import * as S from "./style";
import { useTheme } from "styled-components/native";

export type TextFieldProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  inputType?: any;
} & TextInputProps;

export const TextField = ({
  label,
  error,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [isActive, setIsActive] = useState(false);
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputField
        selectionColor={colors.gray1}
        autoCorrect
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        isActive={isActive}
        {...props}
      />
    </S.Wrapper>
  );
};
