import { LinearGradient } from "expo-linear-gradient";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.lg}px;
    font-family: ${theme.font.bold};
    margin-bottom: 8px;
    margin-top: 30px;
  `}
`;

export const Blur = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 14%;
    z-index: 1;
    /* background-color: rgba(255, 255, 255, 0.5); */
    opacity: 0.9;
  `}
`;
