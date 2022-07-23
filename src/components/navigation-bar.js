import React from "react";
import styled from "styled-components";
import Tag from "./atoms/tag";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

function NavigationBar() {
  return (
    <Container>
      <Tag text={"전체"} />
      <Tag text={"스터디"} />
      <Tag text={"프로젝트"} />
      <Tag text={"네트워킹"} />
    </Container>
  );
}

export default NavigationBar;
