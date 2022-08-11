import React from 'react';
import styled from 'styled-components';

const MsgBox = styled.p`
  font-size: 13px;
  margin: 0;
  font-family: 'NotoSansKR';
  color: rgba(140, 140, 140, 1);
`;

function ChatContents({ msg }) {
  return <MsgBox>{msg}</MsgBox>;
}

export default ChatContents;
