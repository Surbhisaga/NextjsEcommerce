import Link from 'next/link'
import { auth } from '../../../../firebase';


export default function TopBar({ user }) {
    return (
        <div className="main-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="text-slid-box">
                            <div id="offer-box" className="carouselTicker">
                                <ul className="offer-box">
                                    <li>
                                        <i className="fab fa-opencart"></i> Off 10%! Shop Now Man
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> 50% - 80% off on Fashion
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT20
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> Off 50%! Shop Now
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> Off 10%! Shop Now Man
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> 50% - 80% off on Fashion
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT20
                                    </li>
                                    <li>
                                        <i className="fab fa-opencart"></i> Off 50%! Shop Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        {/* <div className="right-phone-box">
                            <p>Call US :- <a href="#"> +11 900 800 100</a></p>
                        </div> */}

                        <div className="our-link">
                            <ul>
                                {user ?
                                    <>
                                        <li>
                                            <Link href="my-account">
                                                <a>My Account</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a style={{color:'white'}}>welcome , {user.displayName}</a>
                                        </li>
                                        <li>
                                            <button onClick={() => auth.signOut()} style={{ border: "none", background: "transparent", color: "white", cursor: "pointer" }}>
                                                <a>Logout </a>
                                            </button>
                                        </li>
                                    </>
                                    :
                                    <li>
                                        <Link href="/login">
                                            <a >
                                                login
                                            </a>
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

