import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  h1 {
    font-size: 17px;
    width: fit-content;
    display: inline-block;
  }
  h2 {
    font-size: 15px;
    display: inline;
  }
`;

function MeetUpTitle() {
  const navigate = useNavigate();
  return (
    <Title onClick={() => navigate("/meet-up-post")}>
      <h1>모집중</h1>
      <h2>
        <span>[서울]</span>
        반응형 웹 토이프로젝트 프론트엔드 2명 모집
      </h2>
    </Title>
  );
}

export default MeetUpTitle;
