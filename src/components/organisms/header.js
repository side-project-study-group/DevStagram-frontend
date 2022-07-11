import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: skyblue;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0;
    margin-left: 10px;
    font-size: 25px;
    line-height: 50px;
  }
`;

const IconContainer = styled.div`
  margin-right: 10px;
  .home_icon,
  .people_icon,
  .chat_icon,
  .person_icon {
    width: 30px;
    height: 30px;
    margin: 10px 5px;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Devstagram</h1>
      <IconContainer>
        <AiFillHome className="home_icon" onClick={() => navigate("/")} />
        <BsFillPeopleFill className="people_icon" />
        <IoIosChatbubbles
          className="chat_icon"
          onClick={() => navigate("/meet-up-chat-list")}
        />
        <IoPerson className="person_icon" />
      </IconContainer>
    </Container>
  );
}

export default Header;
