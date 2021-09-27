import styled from "styled-components";
import bgImage from "../../../images/bg.svg";

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;

  .header-content {
    padding: 0 18rem;

    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
  }
`;
