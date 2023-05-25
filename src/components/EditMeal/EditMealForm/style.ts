import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    background-color: ${theme.colors.gray7};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    elevation: 10;
    padding: 30px 24px;
  `}
`;

export const WrapperRow = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `}
`;

export const ButtonDietWrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.sm}px;
    font-family: ${theme.font.bold};
    line-height: 18px;
    margin-bottom: 8px;
  `}
`;

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom: 5%;
    left: 0;
    right: 0;
    padding: 0 24px;
  `}
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.redDark};
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.xs}px;
    margin-top:-25px;
    margin-bottom: 20px;
  `}
`

export const Inner = styled.View`
  ${({ theme }) => css`
   flex: 1
  `}
`