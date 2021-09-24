import Router from 'next/router'
import React, { useEffect } from 'react'

export default function myAccount({ user }) {
    useEffect(() => {
        if (!user) {
            Router.push("/login")
        }
    }, [])

    return (
        <div>
            myaccout
        </div>
    )
}
