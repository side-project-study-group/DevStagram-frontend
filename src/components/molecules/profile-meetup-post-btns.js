import React from 'react';
import ProfileBtns from '../atoms/button/profile-btns'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 17px 13px 7px;
    
`;

function ProfileMeetUpPostBtns (){
    return(
        <Container>
            <ProfileBtns name={'Meetup'} />
            <ProfileBtns name={'Post'} />
        </Container>
    )
}

export default ProfileMeetUpPostBtns