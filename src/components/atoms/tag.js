import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 23px;
  color: white;
  font-family: "NotoSansKR";
  width: 90px;
  margin-right: 5px;
  background-color: ${(props) => props.bgColor || "green"};
  border: 1.8px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tag({ text }) {
  return (
    <Button
      bgColor={
        text === "전체"
          ? "#F05550"
          : text === "프로젝트"
          ? "#FA9637"
          : text === "스터디"
          ? "#28AF73"
          : "#A06EEB"
      }
    >
      {text}
    </Button>
  );
}

export default Tag;
