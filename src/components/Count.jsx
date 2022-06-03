import React from 'react';
import '../stylesheets/count.css';

const Count = ({ count }) => {

  return (

    <div className='count'>

      <h1>{count}</h1>

    </div>

  );
};

export default Count;