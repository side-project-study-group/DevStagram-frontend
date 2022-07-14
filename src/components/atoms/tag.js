import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin-top: 5px;
  background-color: ${(props) => props.bgColor || "green"};
  border: none;
  border-radius: 15px;
`;

function Tag({ text }) {
  return (
    <Button
      bgColor={
        text === "전체"
          ? "orange"
          : text === "프로젝트"
          ? "cornflowerblue"
          : text === "스터디"
          ? "yellowgreen"
          : "pink"
      }
    >
      {text}
    </Button>
  );
}

export default Tag;
