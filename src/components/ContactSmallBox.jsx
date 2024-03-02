import React from "react";
import "./style/ContactSmallBox.css"
const ContactSmallBox = () => (
  
    <div className="container" id="contact" >
      <form action="https://fabform.io/f/{insert-form-id-here}" method="post">
        <div className="form-group">
          <label htmlFor="name" >Email:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Object:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group btn">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
  
  export default ContactSmallBox;
  