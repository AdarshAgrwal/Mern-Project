import React from 'react'
import {NavLink} from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className="signup-form">
                <form method="post" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="mobile" placeholder="Phone Number" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" required="required" />
                    </div>
                </div>
                <div className="form-group form-button">
                    <input type="submit" name="signup" className="btn btn-primary" value="Register" id ="signup"/>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>
            
        </>
    )
}

export default Signup

