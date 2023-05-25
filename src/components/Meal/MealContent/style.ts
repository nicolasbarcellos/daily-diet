import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.gray7};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    elevation: 10;
    padding: 30px 24px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.xl}px;
    font-family: ${theme.font.bold};
    line-height: 26px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.sm}px;
    font-family: ${theme.font.bold};
    line-height: 18px;
    margin-bottom: 8px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.base}px;
    font-family: ${theme.font.regular};
    line-height: 21px;
    margin-top: 10px;
    margin-bottom: 20px;
  `}
`;

export const DateInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.base}px;
    font-family: ${theme.font.regular};
    line-height: 21px;
  `}
`;

export const LabelButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    background-color: ${theme.colors.gray6};
    padding: 8px 16px;
    border-radius: 1000px;
  `}
`;

type CircleProps = {
  isOnDiet: boolean;
};

export const Circle = styled.View<CircleProps>`
  ${({ theme, isOnDiet }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${isOnDiet
      ? theme.colors.greenDark
      : theme.colors.redDark};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.sm}px;
    font-family: ${theme.font.regular};
    line-height: 18px;
  `}
`;

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: auto;
    gap: 10px;
  `}
`;

export const ModalWrapper = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalContentWrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  `}
`;

export const ModalContent = styled.View`
  ${({ theme }) => css`
    border-radius: 8px;
    padding: 30px 40px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    border
  `}
`;

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-size: ${theme.font.sizes.lg}px;
    font-family: ${theme.font.bold};
    line-height: 23px;
    text-align: center;

    max-width: 80%;
  `}
`;

export const ModalButtonWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: 30px;
    width: 100%;
    flex-direction: row;
    gap: 10px;
  `}
`;
