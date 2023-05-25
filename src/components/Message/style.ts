import styled, { DefaultTheme, css } from "styled-components/native";
import { ButtonProps } from ".";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.xl}px;
    text-align: center;
    line-height: 31px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.font.sizes.base}px;
    text-align: center;

    color: ${theme.colors.gray1};
  `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    margin: 30px 0;
  `}
`;
