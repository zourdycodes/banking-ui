import React from "react";

import { ChartStats } from "../ChartStats";
import { InnerWrapper } from "../../styles/Wrapper";
import { AnimatedButton } from "../AnimatedButton";
import { ChartContainer } from "./styles/ChartSection";

import chart from "../../images/chart.svg";

export const ChartSection = () => {
  return (
    <ChartContainer>
      <InnerWrapper>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={"Balance"} amount={"$250"} />
                <ChartStats name={"Last Transaction"} amount={"$1,000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
              Manage your finances like a pro in no time
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              officia nemo distinctio dolores necessitatibus odit magni corrupti
              error, voluptate alias adipisci ducimus nostrum maiores. Ad?
            </p>
            <AnimatedButton content={"Learn More"} />
          </div>
        </div>
      </InnerWrapper>
    </ChartContainer>
  );
};
