import styled, { DefaultTheme, css } from "styled-components/native";
import { ButtonProps } from ".";

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "type">;

type TextProps = Pick<ButtonProps, "type">;

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 114px;
  `,
  medium: (theme: DefaultTheme) => css`
    width: 190px;
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray2};
    color: ${theme.colors.white};
  `,
  outline: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray1};
    border: 1px solid ${theme.colors.gray1};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, size, fullWidth, type, hasIcon }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    gap: ${hasIcon ? "12px" : 0};
    border-radius: 6px;

    ${!!size && buttonModifiers[size](theme)}
    ${!!type && buttonModifiers[type](theme)}
    ${fullWidth && buttonModifiers.fullWidth()}
  `}
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.sm}px;
    text-align: center;

    ${!!type && buttonModifiers[type](theme)}
    border: 0;
    background-color: transparent;
  `}
`;

export const IconWrapper = styled.View`
  ${({ theme }) => css``}
`;
