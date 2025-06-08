import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/Logo.png';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleUserRegister = () => {
    navigate('/userRegister');
  };

  const handleSupplierRegister = () => {
    navigate('/supplierRegister');
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light p-3">
      <div className="main col-12 col-md-8 col-lg-6 col-xl-4">
        <div 
          className="head rounded-top text-white text-center p-2 p-md-3"
          style={{
            background: 'linear-gradient(to right, #373737, #40A1F0)',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px'
          }}
        >
          <div className="logo d-flex justify-content-center align-items-center">
            <img 
              src={Logo} 
              alt="logo" 
              className="img-fluid"
              style={{ 
                width: 'clamp(60px, 10vw, 80px)', 
                height: 'clamp(60px, 10vw, 80px)', 
                marginRight: '2px' 
              }} 
            />
            <h1 style={{ 
              fontSize: 'clamp(24px, 5vw, 32px)', 
              margin: 0, 
              fontFamily: "'Abril Fatface', cursive" 
            }}>
              JalaSpeedy
            </h1>
          </div>
          <p style={{ 
            margin: 0,
            fontSize: 'clamp(14px, 2vw, 16px)'
          }}>Your Trusted Water Supply Partner</p>
        </div>

        <div 
          className="register bg-white text-center p-3 p-md-4"
          style={{
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px'
          }}
        >
          <h1 style={{ 
            fontWeight: 'bold',
            fontSize: 'clamp(20px, 4vw, 28px)'
          }}>Choose Your Role</h1>

          <div className="roleSelection d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 mt-md-4 gap-2">
            <button
              onClick={handleUserRegister}
              className="btn w-100"
              style={{
                backgroundColor: '#f6f6f6',
                height: 'clamp(45px, 8vw, 50px)',
                border: '2px solid #000000',
                borderRadius: '15px',
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}
            >
              Register as User
            </button>
            <button
              onClick={handleSupplierRegister}
              className="btn w-100"
              style={{
                backgroundColor: '#f6f6f6',
                height: 'clamp(45px, 8vw, 50px)',
                border: '2px solid #000000',
                borderRadius: '15px',
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}
            >
              Register as Supplier
            </button>
          </div>

          <div className="back mt-3 mt-md-4" style={{ textAlign: 'right' }}>
            <a 
              onClick={handleBack}
              style={{
                textDecoration: 'none',
                color: '#40A1F0',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}
            >
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;