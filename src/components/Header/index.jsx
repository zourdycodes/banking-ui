import React from "react";
import { HeaderContent } from "../HeaderContent";
import { Navigation } from "../Navigation";
import { HeaderContainer } from "./styles/Header";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <HeaderContent />
    </HeaderContainer>
  );
};
