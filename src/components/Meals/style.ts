import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    margin-top: 42px;
    flex: 1;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-family: ${theme.font.regular};
    font-size: ${theme.font.sizes.base}px;
    margin-bottom: 10px;
  `}
`;
