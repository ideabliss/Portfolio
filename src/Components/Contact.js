import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title text-center">
          Let's <span className="text-highlight">Connect</span>
        </h2>
        <p className="text-center subtitle">
          Have a project in mind or just want to say hello? Fill in the form below.
        </p>

        <form className="contact-form mx-auto">
          <div className="form-row">
            <div className="form-group">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <label>Email</label>
            </div>
          </div>

          <div className="form-group">
            <input type="text" required />
            <label>Subject</label>
          </div>

          <div className="form-group">
            <textarea rows="5" required></textarea>
            <label>Message</label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn-submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact;
