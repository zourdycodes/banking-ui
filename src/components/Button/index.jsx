import React from "react";
import styled from "styled-components/macro";

export const ButtonCompose = ({ content }) => {
  return <ButtonWrapper>{content}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  background-color: var(--accent-pink);
  padding: 0.7rem 1.8rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 8px;

  outline: none;
  border: none;
  cursor: pointer;
`;
