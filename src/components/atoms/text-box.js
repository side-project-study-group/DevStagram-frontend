import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-right: 10px;
  margin-bottom: 5px;
`;
const Container = styled.div`
  width: 100%;
  font-family: "NotoSansKR";
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 15px;
`;

function TextBox() {
  return (
    <Wrapper>
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius
        dui nec mauris venenatis feugiat. Nulla a pretium dui. Etiam ultrices
      </Container>
    </Wrapper>
  );
}

export default TextBox;
