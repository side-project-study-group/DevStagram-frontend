import React from "react";
import styled from "styled-components";
import Tag from "./atoms/tag";

const Container = styled.div`
  width: 96%;
  margin: 0 auto;
  max-width: 480px;
  height: 40px;
  left: 0;
  top: 50px;
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-around;
`;

function SubHeader() {
  return (
    <Container>
      <Tag text="전체" />
      <Tag text="프로젝트" />
      <Tag text="스터디" />
      <Tag text="네트워킹" />
    </Container>
  );
}
export default SubHeader;
