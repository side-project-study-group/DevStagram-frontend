import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 45px;
  background-color: #fad778;
  border: 1.5px solid #414042;
  font-family: "RobotoBold";
  border-radius: 20px 0 0 20px;
  border: 2px solid #414042;
  font-size: 20px;
  color: #414042;
  display: flex;
  align-items: center;
  filter: drop-shadow(2px 3px 0px rgba(0, 0, 0, 0.4));
  span {
    flex: 1;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
  p {
    flex: 5;
  }
`;

function CreateButton({ icon, text }) {
  return (
    <Button>
      <span>{icon}</span>
      <p>{text}</p>
    </Button>
  );
}

export default CreateButton;
