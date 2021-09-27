import React from "react";
import styled from "styled-components";

import arrow from "../../images/arrow.svg";
import blob1 from "../../images/blob_top.svg";
import blob2 from "../../images/blob_bottom.svg";

export const AnimatedButton = ({ content }) => {
  return (
    <ButtonContainer>
      {content}
      <img src={arrow} alt="call to action button" className="arrow" />
      <img src={blob1} alt="call to action button" className="blob1" />
      <img src={blob2} alt="call to action button" className="blob2" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  .arrow {
    padding-left: 0.9rem;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    color: var(--accent-pink);

    .blob1 {
      transition: all 0.4s ease-in-out;
      transform: translateX(-100px);
    }
    .blob2 {
      transition: all 0.4s ease-in-out;
      transform: translateX(140px);
    }
    .arrow {
      padding-left: 1.4rem;
    }
  }

  .blob1,
  .blob2 {
    position: absolute;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;
