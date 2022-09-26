import styled from 'styled-components'
import useBottomPopUp from '../../../../hooks/useBottomPopUp'
import { button_data } from './button-data'

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
    height: 35px;
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
    padding: 15px 10px;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'NotoSansKR';
    background-color: transparent;
    align-items: center;
    border: none;
    display: flex;
    justify-content: center;
    :first-child {
        border-bottom: 1px solid #414042;
        padding-bottom: 10px;
        margin-bottom: 5px;
    }
`

function BottomPopUp({ id = null, type }) {
    const handleClick = useBottomPopUp(id)

    return (
        <Footer>
            <Container>
                <BoxHead />
                <Box>
                    {button_data[type].map(({ icon, value, type }) => (
                        <Button onClick={() => handleClick(type)}>
                            {icon && (
                                <>
                                    <img src={icon} />
                                    &nbsp;&nbsp;
                                </>
                            )}
                            {value}
                        </Button>
                    ))}
                </Box>
            </Container>
        </Footer>
    )
}

export default BottomPopUp
