import React from "react";

import {
  ContentContainer,
  LeftContent,
  RightContent,
} from "./styles/HeaderContent";

import phone from "../../images/phone.svg";
import ring from "../../images/ring_orange.svg";
import messagePink from "../../images/message_pink.svg";
import messageBlue from "../../images/message_blue.svg";

export const HeaderContent = () => {
  return (
    <ContentContainer>
      <LeftContent>
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestiae minus dicta ipsum atque est qui vel illo magni voluptates
            esse, e x commodi corporis quos odio libero temporibus, eveniet
            nisi.
          </p>
        </div>
      </LeftContent>

      <RightContent></RightContent>
    </ContentContainer>
  );
};
