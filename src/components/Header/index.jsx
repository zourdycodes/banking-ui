import React from "react";
import { Navigation } from "../Navigation";
import { HeaderContainer } from "./styles/Header";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-content">
        <Navigation />
      </div>
    </HeaderContainer>
  );
};
