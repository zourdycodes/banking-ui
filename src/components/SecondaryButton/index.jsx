import React from "react";
import { SecondaryButton } from "./styles/SecondaryButton";
import arrow from "../../images/arrow.svg";

export const ButtonCompose = ({ content }) => {
  return (
    <SecondaryButton>
      {content}
      <img src={arrow} alt="utility brand pointing content call to action" />
    </SecondaryButton>
  );
};
