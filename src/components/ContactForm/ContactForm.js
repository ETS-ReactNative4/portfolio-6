import React from 'react';

import SubmitButton from '@components/SubmitButton';
import FormErrors from '@components/FormErrors';

import './style.scss';

const ContactForm = ({
  handleInput,
  handleSubmit,
  showErrors,
  formValid,
  formErrors,
  errorsVisible,
  name,
  email,
  message,
  buttonText
}) => (
  <form
    id="contact-form"
    className="contact-form"
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <span className="contact-form__input-row">
      <input
        className="contact-form__input input-field"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleInput}
      />
    </span>
    <span className="contact-form__input-row">
      <input
        className="contact-form__input input-field"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleInput}
      />
    </span>
    <span className="contact-form__textarea-row">
      <textarea
        className="contact-form__textarea textarea-field"
        type="text"
        name="message"
        placeholder="What's your message?"
        value={message}
        onChange={handleInput}
      />
    </span>

    <span className="contact-form__row">
      <SubmitButton formValid={formValid} showErrors={showErrors} buttonText={buttonText} />
    </span>

    <div className="contact-form__errors-panel">
        <FormErrors formErrors={formErrors} errorsVisible={errorsVisible} />
    </div>
  </form>
);

export default ContactForm;
