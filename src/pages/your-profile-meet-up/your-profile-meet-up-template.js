import React from 'react';
import ProfileHeader from '../../components/organisms/profile-header';
import ProfileMeetUpPostBtns from '../../components/molecules/profile-meetup-post-btns';
import MeetUpPostBox from '../../components/meet-up-post-box';
import checkImg from '../../assets/imgs/check.png' 
import styled from 'styled-components';

const Container=styled.div`
width: 100%;
height: 100%;
max-width: 480px;
margin: 0 auto;
padding: 0 16px;
box-sizing: border-box;
`

const BlueHeader =styled.div`
background-color:#4B64E6;
width:100%;
max-width:480px;
margin:0 auto;
padding: 0 -10px;
  img{
    width:100%;
    background:center;
    vertical-align:top;
  }
`


function YourProfileMeetUpTemp() {
  return (
    <>
    <BlueHeader> 
        <img src={checkImg}></img>
    </BlueHeader>
    <Container>
      <ProfileHeader />
      <ProfileMeetUpPostBtns/>
      <MeetUpPostBox />
      <MeetUpPostBox />
      <MeetUpPostBox />
    </Container>
    </>
  );
}

export default YourProfileMeetUpTemp;
