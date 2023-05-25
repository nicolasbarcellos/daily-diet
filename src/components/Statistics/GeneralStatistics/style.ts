import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray7};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    elevation: 10;
    align-items: center;
    padding: 30px 24px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.font.sizes.sm}px;
    color: ${theme.colors.gray1};
    margin-bottom: 26px;
  `}
`;

export const InfoWrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    align-items: center;
  `}
`;

export const InfoWrapperRow = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    gap: 12px;
  `}
`;

export const InfoBox = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray6};
    border-radius: 8px;
    width: 100%;
    margin-bottom: 12px;
    padding: 20px 16px;
  `}
`;

type InfoBoxRowProps = {
  isOnDiet: boolean;
};

export const InfoBoxRow = styled.View<InfoBoxRowProps>`
  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet
      ? theme.colors.greenLight
      : theme.colors.redLight};
    border-radius: 8px;
    flex: 1;

    padding: 20px 16px;
  `}
`;

export const InfoNumber = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.bold};
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.xl}px;
    line-height: 31px;
    margin-bottom: 10px;
  `}
`;

export const InfoDetails = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.sm}px;
    font-family: ${theme.font.regular};
    line-height: 18px;
    color: ${theme.colors.gray2};
  `}
`;
