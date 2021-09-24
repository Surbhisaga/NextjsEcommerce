import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { auth, signInWithGoogle } from '../../firebase';
import { useToast } from "@chakra-ui/react"

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            toast({
                title: "Account login.",
                position: "top-right",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
            // alert(`welcome ${result.user.displayName}`)
            Router.push("/my-account")
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <div className="contact-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12" style={{ marginLeft: "190px" }}>
                        <div className="contact-form-right">
                            <h2>Login</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={email}
                                                placeholder="Enter Email"
                                                className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                value={password}
                                                className="form-control"
                                                placeholder="Enter Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="submit-button" style={{ display: "flex" }}>
                                            <button className="btn hvr-hover" type="submit">
                                                <span style={{ margin: 50 }}>Login</span>
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>

                                            <div className="text" style={{ color: "blue", marginLeft: "55%", marginTop: "8px" }}>
                                                <Link href="/forgot-password">
                                                    <a>Forgot password?</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div style={{ fontSize: "14px", color: "black", fontWeight: "bold", textAlign: "center", marginTop: 20, marginBottom: 8, fontFamily: "Cursive" }}>
                                            <span>Or login with...</span>
                                        </div>

                                        <div className="col-md-12" style={{ padding: 20 }}>
                                            <div className="submit-button text-center" style={{ marginLeft: "37%" }}>
                                                <button className="btn" style={{ display: 'flex', color: "black", borderRadius: "10px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
                                                    onClick={signInWithGoogle}>
                                                    <div>
                                                        <img width="20px" style={{ marginRight: "8px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                                    </div>
                                                    Google login
                                                </button>
                                            </div>
                                        </div>

                                        <hr />
                                        <div style={{ marginLeft: "75%", paddingTop: 5 }}>
                                            <div className="text" style={{ color: "blue", fontSize: "16px" }}>
                                                <Link href="/register">
                                                    <a>Don't have Account?</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
