import React from 'react';

const userInput = (props) => {
  const style = {
    border: '2px solid orange',
    textAlign: 'center'
  };

  return (
    <div>
      <input type='text' style={style} onChange={props.changeName} value={props.name} />
    </div>
  )
};

export default userInput;
