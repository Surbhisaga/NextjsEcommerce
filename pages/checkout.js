import  Router  from 'next/router'
import React, { useEffect } from 'react'

export default function checkout({user}) {

    useEffect(() => {
        if (!user) {
            Router.push("/login")
        }
    }, [])

    return (
        <div>
            Checkout
        </div>
    )
}
