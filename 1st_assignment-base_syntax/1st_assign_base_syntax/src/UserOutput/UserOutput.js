import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello {props.name},</p>
      <p>{props.greetings}</p>
    </div>
  );
}

export default userOutput;
