import Router from 'next/router';
import { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
import { useToast } from "@chakra-ui/react"

export default function Register() {

    const [password, setPassword] = useState('');

    const toast = useToast()

    const oobCode = useRef(null)

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        oobCode.current = queryParams.get("oobCode")
        if (!oobCode.current) {
            Router.push("/login")
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.confirmPasswordReset(oobCode.current, password);
            Router.push("/login")
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <div className="contact-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12" style={{ marginLeft: "190px" }}>
                        <div className="contact-form-right">
                            <h2>Reset Password</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="submit-button text-center">
                                            <button
                                                className="btn hvr-hover"
                                                type="submit"
                                            >
                                                Reset Password
                                            </button>
                                            <div className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
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
