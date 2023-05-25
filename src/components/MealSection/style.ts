import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css``}
`;

export const MealBox = styled.TouchableOpacity`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray5};
    border-radius: 6px;
    padding: 14px 16px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  `}
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.xs}px;
  `}
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    width: 2px;
    height: 100%;
    background-color: ${theme.colors.gray4};
    margin: 0 14px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.base}px;
  `}
`;

type DietStatusProps = {
  isOnDiet: boolean;
};

export const DietStatus = styled.View<DietStatusProps>`
  ${({ theme, isOnDiet }) => css`
    width: 14px;
    height: 14px;
    background-color: ${isOnDiet ? theme.colors.greenMid : theme.colors.redMid};
    border-radius: 7px;
    margin-left: auto;
  `}
`;
