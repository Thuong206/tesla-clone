import React, { useState } from "react";
import styled from 'styled-components'
function Header() {
    const [show, setShow] = useState(false)
    const Ar1 = ['Existing Inventory',
        'Used Inventory',
        'Trade-In',
        'Test Drive',
        'Cybertruck',
        'Roadster',
        'Semi',
        'Charging',
        'Powerwall',
        ' Commercial Energy',
        'Utilities',
        'Find Us',
        'Support',
        'Investor Relations']
    return (
        <div className="header">
            <Container>
                <a href=''>
                    <Logo src='/image/logo.png' />
                </a>

                <Menu>
                    <a>Model S</a>
                    <a>Model 3</a>
                    <a>Model X</a>
                    <a>Model Y</a>
                    <a>Solar Roof</a>
                    <a>Solar Panels</a>
                </Menu>

                <MenuRight>
                    <a>Shop</a>
                    <a>Account</a>
                    <a onClick={() => setShow(true)}>Menu</a>
                </MenuRight>

                <P onClick={() => setShow(true)}>
                    Menu
                </P>
                {
                    show &&
                    <MenuMore show={show}>
                        <h3 onClick={() => setShow(false)}>X</h3>
                        <A>
                            {Ar1.map(item => {
                                return (
                                    <p key={item}>{item}</p>
                                )
                            })}

                        </A>
                    </MenuMore>
                }
            </Container>
        </div>
    )
}
export default Header
const Container = styled.div`
    min-height: 35px;
    position: fixed;
    padding: 0 20px;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    backdrop-filter: blur(10px)

`
const Logo = styled.img`
    width: 25vh;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        padding: 5px 10px;
        text-transform: uppercase;
        height: 25px;
        border-radius: 10px
    }
    a:hover{
        background-color: rgba(0,0,0,0.3);
    }
    @media (max-width: 768px){
        display: none
    }
`
const MenuRight = styled.div`


    a{
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 600;
        padding: 5px 10px;
        text-transform: uppercase;
        height: 25px;
        border-radius: 10px
    }
    a:hover{
        background-color: rgba(0,0,0,0.3);
    }
    @media (max-width: 768px){
        display: none
    }
`
const P = styled.p`
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 5px 10px;
    text-transform: uppercase;
    height: 25px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    display: none;

    :active{
        color: white;
        transform: scale(0.9)
    }
    @media (max-width: 767px){
        display: block;
    }
`
const MenuMore = styled.div`
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 40vh;
    height: 93.5vh;
    padding: 0 2px;
    z-index: 100;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    
    h3{
        margin: 5px 2px 0 0;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.3);
        float: right;
        cursor: pointer;
    }
    p{
        border-bottom: 1px solid;
        padding: 20px 0px 0;
        font-weight: 600;
    }
`
const A = styled.div`
margin-top: 6vh;
`