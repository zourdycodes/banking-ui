import React from "react";

import lines from "../../images/lines.svg";
import questions from "../../questions";
import { Question } from "../Question";
import { InnerWrapper } from "../../styles/Wrapper";
import styled from "styled-components";

export const AccordionSection = () => {
  return (
    <Container>
      <InnerWrapper>
        <h3 className="small-heading">
          Frequently <span>asked questions</span>
        </h3>
        <p className="c-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maxime ipsa nam expedita dolorem distinctio illo ad doloribus atque
          fuga, Nihil laboriosam beatae fugit.
        </p>
        <div className="lines">
          <img src={lines} alt="" />
        </div>

        <div className="questions-con">
          {questions.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </InnerWrapper>
    </Container>
  );
};

const Container = styled.section`
  @media (max-width: 600px) {
    width: 200%;
  }
  .c-para {
    width: 60%;
    margin: 0 auto;
  }
  .questions-con {
    padding-top: 4rem;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 300%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;
