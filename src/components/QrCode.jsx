import React from 'react';
import QrImage from '../assets/image-qr-code.png';

const QrCode = () => {
  return (
    <div className={'background'}>
      <img src={QrImage} alt=""/>
      <h2>
        Improve your front-end skills by building projects
      </h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>

    </div>
  );
};

export default QrCode;