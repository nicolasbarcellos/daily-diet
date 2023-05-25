import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 42px;
  `}
`;

export const UserImage = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
  `}
`;

export const LogoImage = styled.Image`
  ${({ theme }) => css``}
`;
