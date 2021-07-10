import React from 'react';
import ReactDOM from 'react-dom';

const Portal = (props) => {
  const { isOpen, children } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <div className='Modal'>
          {children}
        </div>,
        document.getElementById('portal'),
      )}
    </>
  );
};

export default Portal;
