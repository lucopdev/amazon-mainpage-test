import React, { useState } from 'react';

const BalloonPopupButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" text-md bg-blue-500 text-white rounded"
      >
        Passe o mouse aqui
      </button>

      {showPopup && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white shadow-lg rounded-lg z-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white z-20"></div>
          <div className="p-4 text-center z-20">
            <h3 className="text-lg font-bold">amazon prime</h3>
            <p className="mt-2 text-sm">
              Frete GRÁTIS e acesso a filmes, séries, músicas e muito mais em uma única assinatura
            </p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">
              Assine agora
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalloonPopupButton;
