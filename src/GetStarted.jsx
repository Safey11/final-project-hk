import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd'; // Assuming you're using Ant Design for UI

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/admin'); // Navigate to the Admin page
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <img
            src="https://student.saylaniwelfare.com/assets/logo-OpazD70S.png"
            alt="Logo"
            style={{ width: '15%', height: 'auto' }}
          />
      <h1>Welcome to the Certificate Generator</h1>
      <p>Click the button below to get started</p>
      <Button type="primary" onClick={handleGetStarted}>
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
