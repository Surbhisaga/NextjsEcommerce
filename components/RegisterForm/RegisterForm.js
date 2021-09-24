import { useState } from 'react'
import Link from 'next/link'
import { auth } from '../../firebase';
import Router from 'next/router';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            result.user.updateProfile({
                displayName: name
            })
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
                            <h2>Register</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={name}
                                                placeholder="Enter Username"
                                                className="form-control"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
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
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                value={password}
                                                placeholder="Enter Password"
                                                className="form-control"
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
                                                Submit
                                            </button>
                                            <div className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <hr />
                                        <div className="text-center" style={{ color: "blue", fontSize: "18px" }}>
                                            <Link href="/login">
                                                <a>Already have Account?</a>
                                            </Link>
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
