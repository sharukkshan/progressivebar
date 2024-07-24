import React, { useState, useEffect } from 'react';

const ProgressiveBar = ({ bgcolor, height }) => {
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowModal(true); // Show modal when progress reaches 100%
          return 100;
        }
        return prev + 2;
      });
    }, 100); // Adjust the speed of the progress here

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const Parentdiv = {
    width: '50%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: '20px 0',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const Childdiv = {
    height: height,
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    transition: 'width 0.1s ease-in-out',
  };

  const progresstext = {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontWeight: 900,
    fontSize: '1.2em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const loadingText = {
    textAlign: 'center',
    marginTop: '0px',
    fontSize: '1.2em',
    fontWeight: 'bold',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 999,
    display: showModal ? 'block' : 'none',
    width: '300px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const modalButton = {
    backgroundColor: '#00C251',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={containerStyle}>
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
      <div style={loadingText}>
        {progress < 100 ? 'Loading...' : 'Completed'}
      </div>
      {/* Modal */}
      <div style={modalStyle}>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Mission Completed!</p>
        <button style={modalButton} onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ProgressiveBar;