import styled, { DefaultTheme, css } from "styled-components/native";
import { ButtonDietProps } from ".";

type Props = { isActive?: boolean } & Pick<ButtonDietProps, "isOnDiet">;

const WrapperModifiers = {
  isActive: (theme: DefaultTheme, isOnDiet: boolean) => css`
    ${isOnDiet
      ? css`
          background-color: ${theme.colors.greenLight};
          border: 1px solid ${theme.colors.greenDark};
        `
      : css`
          background-color: ${theme.colors.redLight};
          border: 1px solid ${theme.colors.redDark};
        `}
  `,
};

export const Wrapper = styled.TouchableOpacity<Props>`
  ${({ theme, isActive, isOnDiet }) => css`
    background-color: ${theme.colors.gray6};
    width: 160px;
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    ${isActive && WrapperModifiers.isActive(theme, isOnDiet!)}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.sm}px;
    color: ${theme.colors.gray1};
  `}
`;

export const Circle = styled.View<Props>`
  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet
      ? theme.colors.greenDark
      : theme.colors.redDark};
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 10px;
  `}
`;
