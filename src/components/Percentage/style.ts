import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "@constants/icon";

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenLight};
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    border-radius: 8px;
    margin-top: 40px;
    position: relative;
  `}
`;

export const PercentageNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes["2xl"]}px;
    color: ${theme.colors.gray1};
    line-height: 42px;
  `}
`;

export const PercentageDetails = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.font.sizes.sm}px;
    color: ${theme.colors.gray2};
  `}
`;

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.greenDark,
}))`
  position: absolute;
  right: 10px;
  top: 10px;
`;
