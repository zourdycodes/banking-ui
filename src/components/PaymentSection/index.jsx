import React from "react";

import card from "../../images/creditcard.svg";
import active from "../../images/active.svg";
import inactive from "../../images/inactive.svg";
import check from "../../images/check.svg";
import checkDisabled from "../../images/check-disabled.svg";

import { Card } from "../Card";
import { InnerWrapper } from "../../styles/Wrapper";
import { PaymentContainer } from "./styles/Payment";

export const PaymentSection = () => {
  return (
    <PaymentContainer>
      <InnerWrapper>
        <h3 className="small-heading">
          An exceptional service, <span>at the right price</span>
        </h3>
        <p className="card-text">
          Start with our free plan and switch to premium as you grow.{" "}
        </p>
        <div className="card-con">
          <Card
            account={"Free"}
            amount={"$0"}
            text={"Manage your business with a simple and efficient account."}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />

          <Card
            account={"Premium"}
            amount={"$10"}
            text={"Manage your business with a simple and efficient account."}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
        </div>
      </InnerWrapper>
    </PaymentContainer>
  );
};
