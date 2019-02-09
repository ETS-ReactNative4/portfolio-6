import React, { Component } from 'react';

import axios from 'axios';

import ContactForm from './ContactForm';

export default class ContactFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.showErrorsOnFailedSubmit = this.showErrorsOnFailedSubmit.bind(this);
    this.updateButtonText = this.updateButtonText.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {
        name: ' is empty. Please enter your name.',
        email: ' is invalid. Please enter a valid email address.',
        message: ' is empty. What\'s your message?',
      },
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      errorsVisible: false,
      buttonText: 'Submit'
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  async handleFormSubmit(e) {
    const { name, email, message } = this.state;
    const apiUrl = 'http://localhost:1337/sendEmail';


    e.preventDefault();

    try {
      await axios.post(apiUrl, { name, email, message });
      this.updateButtonText();
    } catch (err) {
      alert(err);
    }
  }

  handleInput(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      errorsVisible: false
    }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let {
      formErrors: fieldValidationErrors,
      nameValid,
      emailValid,
      messageValid
    } = this.state;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : ' is empty. Please enter your name.';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        fieldValidationErrors.email = emailValid ? '' : ' is invalid. Please enter a valid email address.';
        break;
      case 'message':
        messageValid = value.length > 0;
        fieldValidationErrors.message = messageValid ? '' : ' is empty. What\'s your message?';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid,
      emailValid,
      messageValid
    }, () => this.validateForm());
  }

  validateForm() {
    const { nameValid, emailValid, messageValid } = this.state;

    this.setState({
      formValid: nameValid && emailValid && messageValid
    });
  }

  showErrorsOnFailedSubmit() {
    this.setState({
      errorsVisible: true
    });
  }

  updateButtonText() {
    this.setState({
      buttonText: 'Thanks!'
    }, () => {
      this.resetForm();
    });
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    const {
      name,
      email,
      message,
      formValid,
      formErrors,
      errorsVisible,
      buttonText
    } = this.state;

    return (
      <ContactForm
        {...this.props}
        handleInput={this.handleInput}
        handleSubmit={this.handleFormSubmit}
        formValid={formValid}
        formErrors={formErrors}
        errorsVisible={errorsVisible}
        showErrors={this.showErrorsOnFailedSubmit}
        name={name}
        email={email}
        message={message}
        buttonText={buttonText}
      />
    );
  }
}
