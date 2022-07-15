import React from "react";
import styled from "styled-components";
import ProfileTag from "../../components/molecules/profile-tag";
import SelectContainer from "../../components/molecules/select-container";
import InputContainer from "../../components/molecules/input-container";
import FooterBtn from "../../components/molecules/footer-button";

const Section = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
`;

const MeetUpContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    background-color: pink;
    padding: 5px 5px;
    margin: 0 auto;
    margin-left: 0;
    margin-bottom: 5px;
  }
  input {
    display: block;
    flex-grow: 1;
    height: 100px;
  }
`;

function MeetUpWriteTemp() {
  return (
    <Section>
      <form>
        <ProfileTag />
        <SelectContainer label={"카테고리"} options={dummyCategories} />
        <InputContainer label={"밋업이름"} />
        <MeetUpContentContainer>
          <label>밋업내용</label>
          <textarea />
        </MeetUpContentContainer>
        <InputContainer label="인원수" />
        <SelectContainer label={"참여방식"} options={dummyJoinTypes} />
        <SelectContainer label={"밋업상태"} options={dummyMeetUpStates} />
      </form>
      <FooterBtn />
    </Section>
  );
}

export default MeetUpWriteTemp;

const dummyCategories = ["전체", "프로젝트", "스터디", "네트워킹"];
const dummyJoinTypes = ["private", "public"];
const dummyMeetUpStates = ["모집예정", "모집중", "모집완료"];
