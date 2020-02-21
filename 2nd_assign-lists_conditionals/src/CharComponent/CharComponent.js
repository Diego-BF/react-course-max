import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
    <div className='CharComponent' onClick={props.click}>
      <strong>{props.char}</strong>
    </div>
  );
}

export default charComponent;
