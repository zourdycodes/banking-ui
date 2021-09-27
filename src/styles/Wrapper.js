import styled from "styled-components";

export const OuterWrapper = styled.section`
  padding: 5rem 18rem;
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
`;

export const InnerWrapper = styled.section`
  padding: 8rem 0;
`;
