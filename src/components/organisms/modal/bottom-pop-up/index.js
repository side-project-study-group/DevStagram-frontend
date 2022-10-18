import styled from 'styled-components'
import { motion } from 'framer-motion'
import OnePerson from '../../../../assets/icons/OnePerson.svg'
import Delete from '../../../../assets/icons/Delete.svg'
import Edit from '../../../../assets/icons/Edit.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Footer = styled(motion.footer)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`
const Container = styled.div`
    max-width: 480px;
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
const Box = styled.ul`
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1.5px solid #414042;
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 5px 15px;
    margin: 0;
`
const Li = styled.li`
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'NotoSansKR';
    background-color: transparent;
    align-items: center;
    border: none;
    border-bottom: 1px solid #414042;
    padding: 15px 0;
    :last-child {
        border-bottom: none;
    }
`
const variants = {
    open: { y: 0 },
    closed: { y: 250 },
}

function BottomPopUp({ id = null, type, isOpen, popUpFunctions }) {
    return (
        <Footer
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ y: { duration: 0.3 } }}
        >
            <Container>
                <BoxHead />
                <Box>
                    {type === 'meetUp' ? (
                        <>
                            <Li onClick={popUpFunctions?.handleMember}>
                                <img src={OnePerson} />
                                멤버 관리하기
                            </Li>
                            <Li onClick={popUpFunctions?.handleDelete}>
                                <img src={Delete} />
                                밋업 삭제하기
                            </Li>
                            <Li onClick={popUpFunctions?.handleModify}>
                                <img src={Edit} />
                                밋업 수정하기
                            </Li>
                        </>
                    ) : (
                        <>
                            <Li onClick={popUpFunctions?.handleDelete}>
                                <img src={Delete} />
                                게시글 삭제하기
                            </Li>
                            <Li onClick={popUpFunctions?.handleModify}>
                                <img src={Edit} />
                                게시글 수정하기
                            </Li>
                        </>
                    )}
                </Box>
            </Container>
        </Footer>
    )
}

export default BottomPopUp
