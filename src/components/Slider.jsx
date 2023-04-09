import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

import { useEffect, useState } from "react"

import styled from "styled-components"

import { projectFirestore } from "@/services/firebaseConnection"

import { mobile } from "@/responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({ display: 'none' })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;

`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const [sliderItems, setSliderItems] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection('sliderItems').onSnapshot(snapshot => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setSliderItems(results)
        })

        return () => unsub()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!paused) {
                setSlideIndex((prevState) => {
                    const newIndex = prevState + 1
                    return newIndex >= sliderItems.length ? 0 : newIndex
                })
            }
        }, 4000)

        return () => clearInterval(intervalId)
    }, [paused, sliderItems.length])

    function handleMouseEnter() {
        setPaused(true)
    }

    function handleMouseLeave() {
        setPaused(false)
    }

    function handleClick(direction) {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>COMPRE AGORA</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}