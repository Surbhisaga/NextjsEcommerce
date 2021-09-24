import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Layout({ children ,user}) {
    return (
        <>
            <Header user={user} />
            {children}
            <Footer />
            <a
                href="#"
                id="back-to-top"
                title="Back to top"
                style={{ display: "none" }}
            >
                &uarr;
            </a>

        </>
    )
}
