import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    width: 100%;
    margin-bottom: 32px;
  `}
`;

type InputFieldProps = {
  isActive: boolean;
};

export const InputField = styled.TextInput<InputFieldProps>`
  ${({ theme, isActive }) => css`
    border: 1px solid ${isActive ? theme.colors.gray3 : theme.colors.gray5};
    padding: 10px 14px;
    height: 48px;
    border-radius: 6px;
    color: ${theme.colors.gray1};
    font-family: ${theme.font.regular};
    font-size: ${theme.font.sizes.base}px;
    width: 100%;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.sm}px;
    color: ${theme.colors.gray2};
    line-height: 18px;
    margin-bottom: 4px;
    align-self: flex-start;
  `}
`;
