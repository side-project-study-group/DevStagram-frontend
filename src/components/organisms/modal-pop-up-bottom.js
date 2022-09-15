import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Delete from '../../assets/icons/Delete.svg'
import Edit from '../../assets/icons/Edit.svg'

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`
const Container = styled.div`
    max-width: 480px;
    /* height: 150px; */
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
`
const BoxHead = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fad778;
    box-sizing: border-box;
    border: 1.5px solid #414042;
    border-radius: 10px 10px 0 0;
`
const Box = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1.5px solid #414042;
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 20px 10px;
`
const StyledLink = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'NotoSansKR';
    color: black;
    display: flex;
    justify-content: center;
    :first-child {
        border-bottom: 1px solid #414042;
        padding-bottom: 10px;
        margin-bottom: 5px;
    }
`

function BottomPopUp() {
    return (
        <Footer>
            <Container>
                <BoxHead />
                <Box>
                    <StyledLink to="/">
                        <img src={Delete} />
                        &nbsp;&nbsp; 게시글 삭제하기
                    </StyledLink>
                    <StyledLink to="/">
                        <img src={Edit} />
                        &nbsp;&nbsp; 게시글 수정하기
                    </StyledLink>
                </Box>
            </Container>
        </Footer>
    )
}

export default BottomPopUp
