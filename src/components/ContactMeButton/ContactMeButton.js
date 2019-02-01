import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

class ContactMeButton extends Component {
  constructor(props) {
    super(props);

    this.redirectToContactPage = this.redirectToContactPage.bind(this);
  }

  redirectToContactPage() {
    this.props.history.push('/contact');
  }

  render() {
    const { size }  = this.props;

    return (
      <button className={`contact-me-btn ${size}`} onClick={this.redirectToContactPage}>
        Contact me
      </button>
    );
  }
}

export default withRouter(ContactMeButton);
