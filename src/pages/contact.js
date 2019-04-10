import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="About"/>
    <div className="Main__Container">
      <h1>Contact me</h1>
      <form className="Contact__Form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div class="Contact__Form__Field">
          <input type="email" name="email" size="50" required />
          <label for="email">Email:</label>
        </div>
        <div class="Contact__Form__Field">
          <textarea name="message" rows="1" cols="49" required></textarea>
          <label for="message">Message:</label>
        </div>
        <p>
          <button className="Contact__Form__Button" type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default ContactPage;
