import React from "react";
import styled from "styled-components";
import ChatTime from "../atoms/chat-time";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  span {
    margin-right: 10px;
  }
`;

function ChatContainer({ msg, time }) {
  return (
    <Container>
      {msg}
      <ChatTime time={time} />
    </Container>
  );
}

export default ChatContainer;
