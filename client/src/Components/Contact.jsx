import React from 'react'

const Contact = () => {
    return (
        <>
            <div class="contact-section">
                <div className="container">
                    <div className ="row">
                        <div className ="col-lg-4">
                            <div className = "box">
                                <div className ="icon-holder">
                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <div className="content">
                                    <h5>Phone</h5>
                                    <p>+91 7007406610</p>
                                </div>
                            </div>
                        </div>
                        <div className ="col-lg-4">
                            <div className = "box">
                                <div className ="icon-holder">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>   
                                </div>
                                <div className="content">
                                    <h5>Email</h5>
                                    <p>adarsh3937@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className ="col-lg-4">
                            <div className = "box">
                                <div className ="icon-holder">
                                    <i class="fa fa-address-card" aria-hidden="true"></i>
                                </div>
                                <div className="content">
                                    <h5>Address</h5>
                                    <p>Kanpur, UP , India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "row second-section">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="contact-form-box">
                                <div className="contact-form">
                                    <div className="form-heading">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <form className="form-content">
                                        <div className ="row">
                                            <div className ="col-lg-4 form-group">
                                                <input type="text" placeholder="Your Name" id="contact-form-name" name="name" className="form-control" required autoComplete="off" />
                                            </div>
                                            <div className ="col-lg-4 form-group">
                                                <input type="email" placeholder="Your Email" id="contact-form-email" name="email" className="form-control" required/>
                                            </div>
                                            <div className ="col-lg-4 form-group">
                                                <input type="text" placeholder="Your Mobile Number" id="contact-form-phoneno" name="phoneno" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className ="row">
                                            <div className="col-12 form-group">
                                                <textarea rows="5" name="message" className ="form-control" id="contact-form-message" placeholder="Type Your Message Here Please"></textarea>
                                            </div>
                                        </div>
                                        <div className ="row">
                                            <div className="col-md-4 form-group">
                                                <input type="submit" className="btn btn-success form-control" value="Send Message" name="send" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
