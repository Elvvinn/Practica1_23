import React from 'react'
import HomeHeaderSection from '../../Components/HomeHeaderSection/homeheader'
import CardSection from '../../Components/PracticesCard/card'
import ReliableSection from '../../Components/ReliableSection/reliable'
import NavbarSection from '../../Layout/Navbar/navbar'

function HomePage() {
    return (
        <>
            <NavbarSection />

            <HomeHeaderSection />

            <CardSection />

            <ReliableSection />

            
        </>
    )
}

export default HomePage