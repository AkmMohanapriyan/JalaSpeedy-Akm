import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/Logo.png';
import '/src/index.css'; // Assuming you have a CSS file for styles

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light p-3">
      <div className="main col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        {/* Header with responsive logo and text */}
        <div className="head rounded-top text-white text-center p-2 p-md-3" 
             style={{ background: 'linear-gradient(to right, #373737, #40A1F0)' }}>
          <div className="logo d-flex justify-content-center align-items-center">
            <img 
              src={Logo} 
              alt="logo" 
              className="me-1 me-md-2" 
              style={{
                width: 'clamp(50px, 12vw, 80px)',
                height: 'clamp(50px, 12vw, 80px)'
              }}
            />
            <h1 className="m-0" style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontFamily: "'Abril Fatface', cursive"
            }}>
              JalaSpeedy
            </h1>
          </div>
          <p className="m-0 mt-1 mt-md-2" style={{
            fontSize: 'clamp(0.8rem, 2vw, 1rem)'
          }}>
            Welcome back sign in to your Account
          </p>
        </div>

        {/* Login Form */}
        <div className="login bg-white d-flex justify-content-center align-items-center rounded-bottom">
          <form onSubmit={handleSubmit} className="logForm w-100 p-3 p-md-4">
            {/* Email Input */}
            <div className="inputBox mb-3">
              <label htmlFor="email" className="form-label" style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}>
                Email Address
              </label>
              <input 
                type="text" 
                id="email" 
                name="username" 
                className="form-control bg-light" 
                placeholder="Enter Your Email Address" 
                required 
                style={{
                  height: 'clamp(45px, 8vw, 50px)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}
              />
            </div>

            {/* Password Input */}
            <div className="inputBox mb-3">
              <label htmlFor="password" className="form-label" style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}>
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className="form-control bg-light" 
                placeholder="Enter Your Password" 
                required 
                style={{
                  height: 'clamp(45px, 8vw, 50px)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}
              />
            </div>

            {/* Forgot Password */}
            <p className="ForgotPassword text-end mb-3">
              <a href="#forgot" className="text-decoration-none" style={{
                color: '#40A1F0',
                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
              }}>
                Forgot Your Password?
              </a>
            </p>

            {/* Login Button */}
            <button 
              type="submit" 
              className="btn w-100 mb-3" 
              style={{ 
                height: 'clamp(45px, 8vw, 50px)',
                backgroundColor: '#f6f6f6', 
                border: '2px solid #000000', 
                borderRadius: '15px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}
            >
              Sign in to Dashboard
            </button>

            {/* Registration Prompt */}
            <p className="text-center mb-1" style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
              New to JalaSpeedy?
            </p>
            <p className="text-center mb-3" style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
              Don't have an Account Yet?
            </p>

            {/* Register Button */}
            <button 
              type="button" 
              className="btn w-100" 
              onClick={() => window.location.href = 'Register.html'}
              style={{ 
                height: 'clamp(45px, 8vw, 50px)',
                backgroundColor: '#f6f6f6', 
                border: '2px solid #000000', 
                borderRadius: '15px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;