import React from "react";

import * as S from "./style";
import { logoIMG, userIMG } from "@constants/images";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoImage source={logoIMG} />
      <S.UserImage source={userIMG} resizeMode="contain" />
    </S.Wrapper>
  );
};
