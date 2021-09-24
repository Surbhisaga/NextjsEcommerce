import React from 'react'
import TopBar from '../TopBar/TopBar'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Header({ user }) {

    const cartItemsCount = useSelector((state) => state.cart.length);
    // const cartItemsCountWishlist = useSelector((state) => state.wishlist.length)


    return (
        <>
            <TopBar user={user} />
            <header className="main-header">
                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        {/* <!-- Start Header Navigation --> */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" className="logo" alt="" /></a>
                        </div>
                        {/* <!-- End Header Navigation --> */}

                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item active">
                                    <Link href="/">
                                        <a className="nav-link" >Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link" >About Us</a>
                                    </Link>
                                </li>

                                <li className="dropdown">
                                    <Link href="#">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown">Shop
                                            <i className="fa fa-caret-down" style={{ marginLeft: "5px" }}></i>
                                        </a>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/cart">
                                                <a>Cart</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/checkout">
                                                <a>Checkout</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/my-account">
                                                <a >My Account</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/wishlist">
                                                <a >Wishlist</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-list">
                                                <a >Shop Detail</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link href="/our-services">
                                        <a className="nav-link" >Our Service</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact-us">
                                        <a className="nav-link" >Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}

                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav">
                            <ul>
                                <li className="side-menu">
                                    <Link href="/wishlist">
                                        <a>
                                            <i className="fa fa-heart "></i>
                                            <span className="badge">0</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="side-menu">
                                    <Link href="/cart">
                                        <a>
                                            <i className="fa fa-shopping-bag"></i>
                                            <span className="badge">{cartItemsCount}</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation --> */}
                    </div>
                </nav>
                {/* <!-- End Navigation --> */}
            </header>
        </>
    )
}
