import React from "react";

import { InnerWrapper } from "../../styles/Wrapper";
import { SectionContainer } from "./styles/MessageSection";

import avatar1 from "../../images/avatar1.svg";
import avatar2 from "../../images/avatar2.svg";
import avatar3 from "../../images/avatar3.svg";
import avatar4 from "../../images/avatar4.svg";
import avatar5 from "../../images/avatar5.svg";
import message from "../../images/conversation.svg";
import circles from "../../images/circleBg.svg";

export const MessagingSection = () => {
  return (
    <SectionContainer>
      <InnerWrapper>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="m-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              distinctio vel, quod repellendus enim exercitationem ullam quas
              facere sapiente esse incidunt, odio laborum?
            </p>
            <div className="images-con">
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>&nbsp; +25</p>
            </div>
            <img src={circles} className="bgCircle" alt="" />
          </div>
          <div className="right-items">
            <img src={message} alt="" />
            <img src={circles} alt="" className="bgCircle" />
          </div>
        </div>
      </InnerWrapper>
    </SectionContainer>
  );
};
