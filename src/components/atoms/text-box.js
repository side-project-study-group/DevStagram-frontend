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
        안녕하세요, 현재 진행하고 있는 토이 프로젝트에서 UX/UI 디자이너를
        모집하고 있습니다.
        <br />
        프로젝트 주제는 생활운동 SNS이며, 실제 서비스 배포의 목적보다는 MVP로
        만들어 아이디어를 구현하는데 집중하고 있습니다.
        <br />
        디자이너로 합류하게 되면 와이어 프레임과 화면 설계서를 같이 작성하게
        됩니다.
        <br /> 포트폴리오가 필요하거나, 참여 의향이 있는 분들은 지원 해주시면
        좋겠습니다!
        <br /> 아래 오픈 채팅방으로 지원해주시고, 궁금한 내용은 언제든지
        물어봐주세요
        <br /> 카카오톡 오픈채팅방 : https://open.kakao.com
      </Container>
    </Wrapper>
  );
}

export default TextBox;
