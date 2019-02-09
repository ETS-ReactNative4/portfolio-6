import React from 'react';

import Nav from '@components/Nav';
import ContactForm from '@components/ContactForm';

import './style.scss';

const ContactPage = () => (
  <div className="contact-page">
    <section className="contact-page__header-container">
      <h2 className="contact-page__header purple-bold">
        Get in touch.
      </h2>
      <h2 className="contact-page__header">
        Let's build something great together!
      </h2>
    </section>
    <section className="contact-page__contact-form-container">
      <ContactForm />
    </section>
  </div>
);

export default Nav(ContactPage);
