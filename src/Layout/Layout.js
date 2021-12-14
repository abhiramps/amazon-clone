import React from 'react'
// import Header from '../Components/Header/Header'
import NavBar from '../Components/Header/NavBar'
const Layout = ({children}) => {
    return (
        <>
            {/* <Header/> */}
            <NavBar/>
            {children}
        </>
    )
}

export default Layout
