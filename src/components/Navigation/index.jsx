import React from "react";

import logo from "../../images/logo.svg";

import { NavigationContainer } from "./styled/Navigation";
import { ButtonCompose } from "../PrimaryButton";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <div className="logo">
        <img src={logo} alt="company branding logo" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
      </ul>
      <ButtonCompose content="Sign Up" />
    </NavigationContainer>
  );
};
