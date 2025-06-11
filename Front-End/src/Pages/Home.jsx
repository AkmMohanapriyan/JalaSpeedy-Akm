import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css'; // Ensure this path is correct based on your project structure

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Intro Section */}
      <section className="intro-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="mb-4">
            <span className="jala">Jala</span>
            <span className="speedy">Speedy</span> Water Supply Management System
          </h1>
          
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p className="mb-3">
                Welcome to JalaSpeedy, your comprehensive solution for water supply management. Our system is
                designed to streamline operations, enhance efficiency, and ensure reliable water distribution.
              </p>
              <p className="mb-3">
                With JalaSpeedy, you can manage water supply networks, monitor consumption, and optimize resource
                allocation. Our user-friendly interface and advanced analytics tools empower you to make informed
                decisions and improve service delivery.
              </p>
              <p className="mb-4">
                Join us in revolutionizing water supply management. Experience the future of efficient and
                sustainable water distribution with JalaSpeedy.
              </p>
              <a href="#" className="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="feature-card h-100">
                <p className="icon mb-3">💧</p>
                <h3>Water Request System</h3>
                <p>User Can Easily Submit Water Request with Specific Details About Quantity, Date and Location.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <div className="feature-card h-100">
                <p className="icon mb-3">📊</p>
                <h3>Real-Time Monitoring</h3>
                <p>Administrators Can Track All Water Request and Manage Distribution Efficiently.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100">
                <p className="icon mb-3">🔒</p>
                <h3>Secure Access</h3>
                <p>Role Based Access Control Ensures Proper Authorization Users, Suppliers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;