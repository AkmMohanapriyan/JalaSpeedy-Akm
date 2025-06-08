
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/Logo.png';

const UserRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleBack = () => {
    window.location.href = 'Register.html';
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light p-3">
      <div className="main col-12 col-lg-8 col-xl-6 my-5">
        {/* Header with responsive logo */}
        <div className="head rounded-top text-white text-center p-2 p-md-3" 
             style={{ background: 'linear-gradient(to right, #373737, #40A1F0)', borderTopLeftRadius: '50px', borderTopRightRadius: '20px'}}>
          <div className="logo d-flex justify-content-center align-items-center">
            <img 
              src={Logo} 
              alt="logo" 
              className="me-1 me-md-2" 
              style={{
                width: 'clamp(50px, 10vw, 80px)',
                height: 'clamp(50px, 10vw, 80px)'
              }}
            />
            <h1 className="m-0" style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
              fontFamily: "'Abril Fatface', cursive"
            }}>
              JalaSpeedy
            </h1>
          </div>
          <p className="m-0 mt-1 mt-md-2" style={{
            fontSize: 'clamp(0.8rem, 2vw, 1rem)'
          }}>
            Your Trusted Water Supply Partner
          </p>
        </div>

        {/* Registration Form */}
        <div className="register bg-white rounded-bottom">
          <form onSubmit={handleSubmit} className="mainForm p-3 p-md-4">
            {/* User Details Section */}
            <div className="userDtl mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>User Details</h3>
              
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="firstName" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="lastName" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="email" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="contactNumber" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Contact Number</label>
                    <input 
                      type="tel" 
                      id="contactNumber" 
                      name="contactNumber" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="password" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="confirmPassword" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Confirm Password</label>
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address Details Section */}
            <div className="addDtl mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Address Details</h3>
              
              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="street" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Street Address</label>
                  <input 
                    type="text" 
                    id="street" 
                    name="street" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="city" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="state" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>State / Province</label>
                    <input 
                      type="text" 
                      id="state" 
                      name="state" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="zipCode" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Zip / Postal Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="country" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Country</label>
                    <input 
                      type="text" 
                      id="country" 
                      name="country" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Plan Section */}
            <div className="subscription mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Subscription Plan</h3>
              
              <div className="row">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="p-3 rounded bg-white text-center h-100">
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Basic Plan</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$27 / Month</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="p-3 rounded bg-white text-center h-100">
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Premium Plan</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$97 / Month</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded bg-white text-center h-100">
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Enterprise Plan</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$297 / Month</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="addDtl mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Payment Details</h3>
              
              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="cardHolder" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Cardholder Name</label>
                  <input 
                    type="text" 
                    id="cardHolder" 
                    name="cardHolder" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="cardNumber" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    name="cardNumber" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="expDate" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Expiry Date</label>
                    <input 
                      type="date" 
                      id="expDate" 
                      name="expDate" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="ccv" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>CCV</label>
                    <input 
                      type="text" 
                      id="ccv" 
                      name="ccv" 
                      className="form-control" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="controlButtons row mt-4">
              <div className="col-6 pe-1">
                <button 
                  type="button" 
                  className="btn w-100" 
                  onClick={handleBack}
                  style={{ 
                    height: '50px',
                    backgroundColor: '#f6f6f6',
                    border: '2px solid #000000',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}
                >
                  Back
                </button>
              </div>
              <div className="col-6 ps-1">
                <button 
                  type="submit" 
                  className="btn w-100" 
                  style={{ 
                    height: '50px',
                    backgroundColor: '#f6f6f6',
                    border: '2px solid #000000',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}
                >
                  Complete Registration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;