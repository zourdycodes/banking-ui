/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { InnerWrapper } from "../../styles/Wrapper";
import styled from "styled-components";
import logo from "../../images/logo.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <InnerWrapper>
        <div className="footer-con">
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} alt="" />
              <p>
                &copy; 2021 Muhammad Zourdy. <br />
                All rights reserved.
              </p>
            </div>
          </div>

          <ul className="botton-nav">
            <div className="links1">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
            </div>
            <div className="links2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </div>
            <div className="links3">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </ul>
        </div>
      </InnerWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 0 18rem;
  background-color: #dce2f0;
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 990px) {
    width: 160vw;
  }

  .footer-con {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media screen and (max-width: 990px) {
      flex-direction: column;
    }
  }
  .logo-con {
    display: flex;
    align-items: center;
    img {
      width: 90px;
    }
  }
  .botton-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 2rem 0;
      color: #16194f;
    }
  }
`;
