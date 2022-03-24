import React from "react";
import styled from 'styled-components';
function Section({ bgr,
    title,
    dec,
    dec1,
    btnleft,
    btnright }) {
    return (
        <Wrap bgr={bgr}>
            <ItemText>
                <h1>{title}</h1>
                <p>{dec}</p>
                {
                    dec1 && <p>{dec1}</p>
                }
            </ItemText>

            <Btn>
                <ButtonMain>
                    <LeftBtn>
                        {btnleft}
                    </LeftBtn>

                    {
                        btnright &&
                        <RightBtn>
                            {btnright}
                        </RightBtn>
                        // if false then hide
                    }
                </ButtonMain>

                <DownIcon src='/image/downIcon.png' />
            </Btn>
        </Wrap>
    )
}
export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-image: ${props => `url("/image/${props.bgr}")`};
    scroll-snap-align: start;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const Btn = styled.div`

`
const ButtonMain = styled.div`
    display: flex;
    margin: 30px;
    justify-content: center;
    @media (max-width: 768px){
        flex-direction: column;
    }

`
const LeftBtn = styled.div`
    background-color: #191c22;
    color: white;
    width: 40vh;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 12px;
    // opacity: 0.85;
    cursor: pointer;
    margin:0 5px;
    @media (max-width: 768px) {
        margin: 5px 0;
    }
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
`
const RightBtn = styled(LeftBtn)`
    background-color: white;
    // opacity: 0.65;
    color: black;
`
const DownIcon = styled.img`
    height: 35px;
    cursor: pointer;
    animation: down infinite 1s;
`