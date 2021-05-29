import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <>
       <div className="login-form mt-5">
            <form method="post">
                <h2 className="text-center">Log in</h2>   
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>                    
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>				
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>                    
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
                    </div>
                </div>        
                <div className="form-group">
                    <button type="submit" className="btn btn-primary login-btn btn-block">Log in</button>
                </div>
            </form>
            <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
        </div>
        </>
    )
}

export default Login
