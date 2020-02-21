import React from 'react';

const validationComponent = (props) => {
  let validLength = <span>Text too short!</span>;

  if (props.textLength >= 5) {
    validLength = <span>Text too long!</span>;
  }

  return (
    <div>
      <strong>Validation result:</strong> {validLength}
    </div>
  );
}

export default validationComponent;
