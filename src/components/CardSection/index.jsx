import React from "react";
import { CardContainer } from "./styles/CardSection";
import { InnerWrapper } from "../../styles/Wrapper";

import card from "../../images/creditcard.svg";

export const CardSection = () => {
  return (
    <CardContainer>
      <InnerWrapper>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit doloremque quia? Odit illo, tempore quod vero
              exercitationem, voluptatum laudantium quo harum, adipisci tenetur
              eum.
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerWrapper>
    </CardContainer>
  );
};
