import styled from "styled-components/macro";

export const PaymentContainer = styled.section`
  @media (max-width: 600px) {
    width: 200%;
    padding: 1rem;
  }

  .card-con {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding-top: 7.4rem;
    @media screen and (max-width: 689px) {
      flex-direction: column;
      width: 100%;
    }
  }
  .card-text {
    text-align: center;
  }
`;
