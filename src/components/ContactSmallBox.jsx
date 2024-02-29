import React from "react";
import "./style/ContactSmallBox.css"
const ContactSmallBox = () => (
    <div className="container" >
      <form action="https://fabform.io/f/{insert-form-id-here}" method="post">
        <div className="form-group">
          <label for="name">Email:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label for="email">Object:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group btn">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
  
  export default ContactSmallBox;
  