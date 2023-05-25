import styled, { css } from "styled-components/native";
import { IconProps } from "phosphor-react-native";
import { ArrowLeft } from "@constants/icon";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenLight};
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 40px 0;
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

export const IconWrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    left: 20px;
    top: 20px;
  `}
`;

export const ArrowIcon = styled(ArrowLeft).attrs(
  ({ theme }): IconProps => ({
    size: 24,
    color: theme.colors.greenDark,
  })
)``;
