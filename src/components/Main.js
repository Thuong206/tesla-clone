import React from "react";
import styled from 'styled-components'
import Section from "./Section";
function Main() {
    return (
        <Container>
            <Section
                bgr='bg1.jpg'
                title='Model 3'
                dec='Order Online for Touchless Delivery'
                btnleft='CUSTOM ORDER'
                btnright='EXISTING INVENTORY'
            />
            <Section
                bgr='bg2.jpg'
                title='Model Y'
                dec='Order Online for Touchless Delivery'
                btnleft='CUSTOM ORDER'
                btnright='EXISTING INVENTORY'
            />
            <Section
                bgr='bg3.jpg'
                title='Model S'
                dec='Order Online for Touchless Delivery'
                btnleft='CUSTOM ORDER'
                btnright='EXISTING INVENTORY'
            />
            <Section
                bgr='bg4.jpg'
                title='Model X'
                dec='Order Online for Touchless Delivery'
                btnleft='CUSTOM ORDER'
                btnright='EXISTING INVENTORY'
            />

            <Section
                bgr='bg5.jpg'
                title='Solar Panels'
                dec='Lowest Cost Solar Panels in America'
                btnleft='ORDER NOW'
                btnright='LEARN MORE'
            />
            <Section
                bgr='bg6.jpg'
                title='Solar Roof'
                dec='Produce Clean Energy'
                dec1='From Your Roof'
                btnleft='ORDER NOW'
                btnright='LEARN MORE'
            />
            <Section
                bgr='bg7.jpg'
                title='Accessories'
                btnleft='SHOP NOW'
            />

        </Container>
    )
}

export default Main
const Container = styled.div`
height: 100vh;
overflow-y: auto;
scroll-snap-type: y mandatory;
`