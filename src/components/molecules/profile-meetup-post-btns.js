import React from 'react';
import ProfileCategoryButton from '../atoms/buttons/profile-category-button'
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
            <ProfileCategoryButton name={'Meetup'} />
            <ProfileCategoryButton name={'Post'} />
        </Container>
    )
}

export default ProfileMeetUpPostBtns