import React from "react";
import styled from "styled-components";
import { AiFillFlag } from "react-icons/ai";
import ChatAccountName from "../atoms/chat-account-name";
import ChatContainer from "../molecules/chat-container";
const Container = styled.div`
  width: 100%;
  background-color: palegoldenrod;
  border-bottom: 1px solid beige;
  display: flex;
`;

const IconContainer = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  margin: auto 15px;
  align-items: center;
`;

const ChatInformContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function MeetUpChatBox() {
  return (
    <Container>
      <IconContainer>
        <AiFillFlag />
      </IconContainer>
      <ChatInformContainer>
        <ChatAccountName name={"알림봇"} />
        <ChatContainer msg={"감사합니다"} time={"오전 04:50"} />
      </ChatInformContainer>
    </Container>
  );
}

export default MeetUpChatBox;
