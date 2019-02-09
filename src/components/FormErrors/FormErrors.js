import React from 'react';

import './style.scss';

const FormErrors = ({ formErrors, errorsVisible }) => {
  const displayErrors = !errorsVisible ? 'hide-errors' : null;

  return (
    <div className={`form-errors ${displayErrors}`}>
      {
        Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={i}>
                *{fieldName} {formErrors[fieldName]}
              </p>
            );
          } else {
            return '';
          }
        })
      }
    </div>
  );
};

export default FormErrors;
