import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact-box-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-12" style={{marginLeft:"150px"}}>
                    <div className="contact-info-left">
                        <h2>CONTACT INFO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                        <ul>
                            <li>
                                <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br />Preston Street Wichita,<br /> KS 67213 </p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

