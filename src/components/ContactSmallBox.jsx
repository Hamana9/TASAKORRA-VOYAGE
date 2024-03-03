import React, { useState } from "react";
import "./style/ContactSmallBox.css"

const ContactSmallBox = () => {
  //nom , numTel , email , object , message
  const [formData, setFormData] = useState({
    nom: "",
    numTel: "",
    email: "",
    object: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeNum = (e) => {
    const { name, value } = e.target;
    // Empêcher la saisie de caractères non numériques
    const numericValue = value.replace(/\D/g, '');
    setFormData({ ...formData, [name]: numericValue });
  };
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    console.log('Réponse de la requête :', JSON.stringify(formData));


    try {
      // const response = await fetch('https://api-tasakorra.koyeb.app/contact', {
      const response = await fetch('http://localhost:3000/contact', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });



      if (response.ok) {
        window.alert(
          `Votre message est envoyé avec succès.`
        );
        console.log('Votre message est envoyé avec succès.');
        // Réinitialiser le formulaire après l'insertion réussie si nécessaire
        setFormData({
          nom: "",
          numTel: "",
          email: "",
          object: "",
          message: ""
        });
      } else {
        console.error('Erreur lors de l\'insertion du contact');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };
  return (

    <div className="container" id="contact" >
      <form onSubmit={handleSubmitContact}>
        <div className="form-group">
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="numTel">Num Tel:</label>
          <input type="text" id="numTel" name="numTel"  value={formData.numTel} onChange={handleChangeNum} pattern="[0-9]*" required  />
        </div>

        <div className="form-group">
          <label htmlFor="email" >Email:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="object">Object:</label>
          <input type="text" id="object" name="object" value={formData.object} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group btn footerBtnn">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};



export default ContactSmallBox;
