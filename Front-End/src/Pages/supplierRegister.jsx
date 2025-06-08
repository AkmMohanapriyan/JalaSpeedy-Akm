import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/Logo.png';

const SupplierRegister = () => {
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
             style={{ background: 'linear-gradient(to right, #373737, #40A1F0)' }}>
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
            {/* Company Information Section */}
            <div className="companyInfo mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Company Information</h3>
              
              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="companyName" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Company Name</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    className="form-control" 
                    placeholder="Enter Company Name"
                    required 
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="businessType" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Business Type</label>
                    <select 
                      id="businessType" 
                      name="businessType" 
                      className="form-control" 
                      required
                      style={{ height: '40px' }}
                    >
                      <option value="">Select Business Type</option>
                      <option value="Bulk Water Supply">Bulk Water Supply</option>
                      <option value="Water Treatment">Water Treatment</option>
                      <option value="Bottled Water Supply">Bottled Water Supply</option>
                      <option value="Mineral Water Supply">Mineral Water Supply</option>
                      <option value="Rain Water Supply">Rain Water Supply</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="yearsInBusiness" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Years in Business</label>
                    <input 
                      type="number" 
                      id="yearsInBusiness" 
                      name="yearsInBusiness" 
                      className="form-control" 
                      placeholder="Enter Years in Business"
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="companyDescription" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Company Description</label>
                  <textarea 
                    id="companyDescription" 
                    name="companyDescription" 
                    className="form-control" 
                    rows="4"
                    placeholder="Enter your Company Description"
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Primary Contact Section */}
            <div className="primaryContact mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Primary Contact</h3>
              
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="firstName" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      className="form-control" 
                      placeholder="Enter your First Name"
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
                      placeholder="Enter your Last Name"
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
                      placeholder="Enter your Email Address"
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="position" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Position / Title</label>
                    <input 
                      type="text" 
                      id="position" 
                      name="position" 
                      className="form-control" 
                      placeholder="Enter your Position / Title"
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Numbers Section */}
            <div className="contactNumbers mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Contact Numbers</h3>
              
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="primaryContact" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Primary Contact Number</label>
                    <input 
                      type="tel" 
                      id="primaryContact" 
                      name="primaryContact" 
                      className="form-control" 
                      placeholder="Enter your Primary Contact Number"
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="secondaryContact" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Secondary Contact Number</label>
                    <input 
                      type="tel" 
                      id="secondaryContact" 
                      name="secondaryContact" 
                      className="form-control" 
                      placeholder="Enter your Secondary Contact Number"
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Email Section */}
            <div className="additionalEmail mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Additional Email Address</h3>
              
              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="additionalEmail" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Additional Email Address</label>
                  <input 
                    type="email" 
                    id="additionalEmail" 
                    name="additionalEmail" 
                    className="form-control" 
                    placeholder="Enter Additional Email Address"
                    required 
                  />
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
                    placeholder="Enter your Street Address"
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
                      placeholder="Enter your City"
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
                      placeholder="Enter your State / Province"
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
                      placeholder="Enter your Zip / Postal Code"
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
                      placeholder="Enter your Country"
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Details Section */}
            <div className="businessDtl mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Business Details</h3>
              
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="businessNumber" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Business License Number</label>
                    <input 
                      type="text" 
                      id="businessNumber" 
                      name="businessNumber" 
                      className="form-control" 
                      placeholder="Enter your Business License Number"
                      required 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="inputBox">
                    <label htmlFor="capacity" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Supply Capacity (Liters / Day)</label>
                    <input 
                      type="text" 
                      id="capacity" 
                      name="capacity" 
                      className="form-control" 
                      placeholder="Enter your Supply Capacity in Liters / Day"
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="serviceAreas" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Service Areas</label>
                  <textarea 
                    id="serviceAreas" 
                    name="serviceAreas" 
                    className="form-control" 
                    rows="4"
                    placeholder="Enter Service Areas"
                    required 
                  />
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
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$41 / Month</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="p-3 rounded bg-white text-center h-100">
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Premium Plan</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$104 / Month</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded bg-white text-center h-100">
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Enterprise Plan</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>$410 / Month</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information Section */}
            <div className="payment mb-3 p-3 rounded" style={{ backgroundColor: '#f6f6f6', borderLeft: '5px solid #40A1F0' }}>
              <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Payment Information</h3>
              
              <div className="mb-3">
                <div className="inputBox">
                  <label htmlFor="cardHolder" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>Cardholder Name</label>
                  <input 
                    type="text" 
                    id="cardHolder" 
                    name="cardHolder" 
                    className="form-control" 
                    placeholder="Enter Cardholder Name"
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
                    placeholder="Enter Card Number"
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
                      placeholder="Enter CCV"
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

export default SupplierRegister;