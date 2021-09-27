import styled from "styled-components/macro";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  //Header Animations
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3rem;
  .white {
    color: white;
  }
  h1 {
    font-size: 4rem;
    font-weight: 600;
    @media screen and (max-width: 700px) {
      font-size: 3rem;
    }
  }
  .white {
    padding: 1.4rem 0;
    line-height: 1.8rem;
  }

  @media (max-width: 700px) {
    padding-right: 0;
  }
`;

export const RightContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  .phone {
    width: 80%;
  }
  .ring1 {
    position: absolute;
    bottom: 10%;
    right: 0;
    left: auto;
    animation: move2 20s infinite;
    transition: all 0.4s ease-in-out;
  }
  .message1 {
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    animation: move 5s infinite;
    transition: all 0.4s ease-in-out;
  }
  .message2 {
    position: absolute;
    bottom: 15%;
    left: 0;
    transition: all 0.4s ease-in-out;
    animation: move 8s infinite;
    animation-delay: 0.5s;
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 700px) {
    margin-top: 2rem;
  }
`;
