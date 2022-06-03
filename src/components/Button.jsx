import React from 'react';
import '../stylesheets/button.css';

const Button = ({ text, isButton, count }) => {

  return (

    <div className='buttonCount'>

      <button
        className={isButton ? 'click' : 'restart'}
        onClick={count}
      >
        {text}
      </button>

    </div>

  );
};

export default Button;