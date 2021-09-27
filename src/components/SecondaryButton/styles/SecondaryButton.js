import styled from "styled-components/macro";

export const SecondaryButton = styled.button`
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

  img {
    padding-left: 0.9rem;
  }
`;
