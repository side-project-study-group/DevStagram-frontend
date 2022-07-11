import React from "react";
import styled from "styled-components";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import MeetUpPostBox from "./../../components/meet-up-post-box";

const Section = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  button {
    width: 100%;
    height: 40px;
    margin: 0 5px;
    background-color: orange;
    border: none;
    border-radius: 10px;
  }
`;

function MeetUpManageTemp() {
  return (
    <Section>
      <h1>밋업관리</h1>
      <BtnContainer>
        <button>내 밋업</button>
        <button>참여 밋업</button>
      </BtnContainer>
      <MeetUpPostBox>
        <TbDotsCircleHorizontal className="edit_icon" />
      </MeetUpPostBox>
      <MeetUpPostBox />
    </Section>
  );
}

export default MeetUpManageTemp;
