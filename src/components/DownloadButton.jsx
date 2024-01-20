// src/DownloadButton.js
import React from 'react';
import microsoftLogo from './microsoft.png'; // Make sure to provide the correct path

const DownloadButton = () => {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href =
        'https://media.githubusercontent.com/media/dahwin/git_exe/master/qd.exe?download=true';
      link.setAttribute('download', 'queendahyun.exe');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        style={{
          backgroundColor: '#3399FF',
          color: 'white',
          padding: '8px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '240px', // Adjust the width as needed
          backgroundImage: `url(${microsoftLogo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold', // Make the text bold
        }}
      >
        Download For Windows
      </button>
    </div>
  );
};

export default DownloadButton;
