import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Features = () => {
  // Internal CSS using React style objects
  const styles = {
    body: {
      backgroundColor: '#f6f6f6',
      fontFamily: 'Arial, sans-serif'
    },
    featureCard: {
      border: '1px solid #ffffff',
      padding: '20px',
      textAlign: 'center',
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#fff',
      boxShadow: '5px 5px rgba(0, 0, 0, 0.3)'
    },
    jala: {
      color: 'orangered',
      fontWeight: 'bold'
    },
    speedy: {
      color: '#40A1F0',
      fontWeight: 'bold'
    },
    featureIcon: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#000000'
    },
    featureTitle: {
      marginBottom: '10px',
      color: '#333'
    },
    featureText: {
      fontSize: '0.9rem',
      color: '#666'
    },
    headerText: {
      textAlign: 'center',
      marginBottom: '40px',
      color: '#000000',
      fontSize: '2rem',
      fontWeight: 'bold',
      borderBottom: '2px solid #000000',
      paddingBottom: '10px'
    },
    // Mobile styles
    mobile: {
      featureCard: {
        minHeight: '150px'
      },
      featureIcon: {
        fontSize: '1.5rem'
      },
      featureTitle: {
        fontSize: '1.1rem'
      },
      featureText: {
        fontSize: '0.8rem'
      },
      headerText: {
        fontSize: '1.5rem'
      }
    }
  };

  // Feature data array for cleaner rendering
  const features = [
    { icon: 'bi-clock', title: 'Real-Time Monitoring', text: 'Track water levels, flow rates, and system performance with real-time updates.' },
    { icon: 'bi-bar-chart', title: 'Customizable Dashboards', text: 'Receive instant notifications for critical alerts like system failures or low water levels.' },
    { icon: 'bi-bell', title: 'Role-Based Notifications', text: 'Send targeted alerts to specific user roles for efficient communication.' },
    { icon: 'bi-headset', title: 'Customer Support Portal', text: 'Access 24/7 support with a dedicated portal for issue reporting and resolution.' },
    { icon: 'bi-exclamation-triangle', title: 'Emergency Alerts', text: 'Receive emergency notifications for failures or low water levels.' },
    { icon: 'bi-shield-lock', title: 'Role-based Access Control', text: 'Customize user roles and permissions for different levels of access.' },
    { icon: 'bi-shield-check', title: 'Secure Access', text: 'Protect sensitive data with multi-factor authentication.' },
    { icon: 'bi-graph-up', title: 'Usage Analytics', text: 'Gain insights into water usage with detailed reports and trends.' },
    { icon: 'bi-droplet', title: 'Water Request System', text: 'Allow users to request water delivery through an intuitive online portal.' }
  ];

  return (
    <div className="container py-5" style={styles.body}>
      <h2 className="header-text" style={styles.headerText}>
        <span style={styles.jala}>Jala</span>
        <span style={styles.speedy}>Speedy</span>'s Innovative Water Management Features
      </h2>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {features.map((feature, index) => (
          <div className="col" key={index}>
            <div className="feature-card" style={styles.featureCard}>
              <i className={`bi ${feature.icon}`} style={styles.featureIcon}></i>
              <h5 style={styles.featureTitle}>{feature.title}</h5>
              <p style={styles.featureText}>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;