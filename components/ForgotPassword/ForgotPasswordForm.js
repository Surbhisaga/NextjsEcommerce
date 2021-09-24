import Router from 'next/router';
import { useState } from 'react'
import { auth } from '../../firebase';
import { useToast } from "@chakra-ui/react"

export default function Register() {

    const [email, setEmail] = useState('');

    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await auth.sendPasswordResetEmail(email);
            toast({
                title: "Email sent successfully",
                position: "top-right",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
            setTimeout(() => {
                Router.push("/login")
            }, 4000)
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
                            <h2>Forgot Password</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                value={email}
                                                placeholder="Enter Email"
                                                className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                Submit
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
