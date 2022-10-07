import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Test01 from '../../assets/imgs/carousel/test01.jpg'
import Test02 from '../../assets/imgs/carousel/test02.jpg'
import Test03 from '../../assets/imgs/carousel/test03.jpg'
import Test04 from '../../assets/imgs/carousel/test04.jpg'

const Wrapper = styled.div`
    height: 200px;
    background-color: aliceblue;
    border-radius: 10px;
    overflow: hidden;
`
const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    gap: 3vw;
    margin-left: ${(props) => `${props.direction}vw`};
    transition: margin 300ms ease-in;
`
const ImgContainer = styled.div`
    min-width: 65vw;
    position: relative;
    div {
        transition: opacity 0.5s ease;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: black;
        opacity: ${(props) => (props.cur ? '0.7' : '0')};
        display: flex;
        justify-content: flex-start;
        /* padding-left: calc((40%-68vw) / 2); */
        padding-left: calc(${(props) => (props.curWidth - `68vw`) / 2});
        align-items: center;
        span {
            color: white;
        }
    }
    img {
        width: 100%;
        height: 100%;
    }
`

function Carousel() {
    const WrapperRef = useRef()
    const slideRef = useRef([])
    const [curNum, setCurNum] = useState(0)
    const [direction, setDirection] = useState(0)
    const handlePrev = () => {
        if (direction < 0) {
            setDirection(direction + 68)
            setCurNum(curNum - 1)
        }
    }
    const handleNext = () => {
        if (direction > -(68 * 3)) {
            setDirection(direction - 68)
            setCurNum(curNum + 1)
        }
    }

    return (
        <>
            <Wrapper ref={WrapperRef}>
                <Container direction={direction}>
                    <ImgContainer
                        curWidth={WrapperRef?.current?.offsetWidth}
                        cur={curNum !== 0}
                        ref={(el) => (slideRef.current[0] = el)}
                    >
                        <div>
                            <span>+3</span>
                        </div>
                        <img src={Test01} />
                    </ImgContainer>
                    <ImgContainer
                        curWidth={WrapperRef?.current?.offsetWidth}
                        cur={curNum !== 1}
                        onClick={(e) => console.log(e)}
                        ref={(el) => (slideRef.current[1] = el)}
                    >
                        <div>
                            <span>+3</span>
                        </div>
                        <img src={Test02} />
                    </ImgContainer>
                    <ImgContainer
                        curWidth={WrapperRef?.current?.offsetWidth}
                        cur={curNum !== 2}
                        onClick={(e) => console.log(e)}
                        ref={(el) => (slideRef.current[2] = el)}
                    >
                        <div>
                            <span>+3</span>
                        </div>
                        <img src={Test03} />
                    </ImgContainer>
                    <ImgContainer
                        curWidth={WrapperRef?.current?.offsetWidth}
                        cur={curNum !== 3}
                        onClick={(e) => console.log(e)}
                        ref={(el) => (slideRef.current[3] = el)}
                    >
                        <div />
                        <img src={Test04} />
                    </ImgContainer>
                </Container>
            </Wrapper>
            <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div>
        </>
    )
}

export default Carousel
