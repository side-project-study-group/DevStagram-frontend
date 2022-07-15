import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin-bottom: 5px;
  font-size: 12px;
`;

function ChatAccountName({ name }) {
  return <P>{name}</P>;
}

export default ChatAccountName;
