import styled, { css } from "styled-components/native";
import { IconProps } from "phosphor-react-native";
import { ArrowLeft } from "@constants/icon";

type WrapperProps = {
  isOnDiet: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet
      ? theme.colors.greenLight
      : theme.colors.redLight};
    align-items: center;
    position: relative;
    padding: 30px 24px;
    flex-direction: row;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.lg}px;
    color: ${theme.colors.gray1};
    line-height: 23px;
  `}
`;

export const IconWrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    left: 24px;
  `}
`;

export const ArrowIcon = styled(ArrowLeft).attrs(
  ({ theme }): IconProps => ({
    size: 24,
    color: theme.colors.gray2,
    weight: "bold",
  })
)``;
