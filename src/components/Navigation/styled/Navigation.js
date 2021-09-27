import styled from "styled-components/macro";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
