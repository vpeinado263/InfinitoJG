import React from 'react';

const SuccessPage = () => {
  return (
    <>
    <div className="success-container">
    <h1>¡Operación Exitosa!</h1>
      <p>El cuchillo se ha guardado con éxito.</p>
        <img src="/knife.png" alt="Cuchillo" className="success"/>
    </div>
    </>
  );
};

export default SuccessPage;
