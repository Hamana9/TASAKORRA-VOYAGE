import React, { useState } from "react";

const OffreForm = () => {
  const [formData, setFormData] = useState({
    titre: "",
    duree: "",
    description: "",
    tarifs: "",
    location: "",
    contact: "",
    remarque: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Réponse de la requête :', JSON.stringify(formData));
    

    try {
      const response = await fetch('https://api-tasakorra.koyeb.app/AddOffre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // const responseData = await response.json(); // Convertir la réponse en JSON

      // Imprimer la réponse JSON

      if (response.ok) {
        window.alert(
          `Nouvelle offre insérée avec succès.`
        );
        console.log('Nouvelle offre insérée avec succès');
        // Réinitialiser le formulaire après l'insertion réussie si nécessaire
        setFormData({
          titre: "",
          duree: "",
          description: "",
          tarifs: "",
          location: "",
          contact: "",
          remarque: ""
        });
      } else {
        console.error('Erreur lors de l\'insertion de l\'offre');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };


  return (
    <div className="container" id="contact">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="titre">Titre : <span style={{ color: "red" }}> *</span></label>
          <input type="text" id="titre" name="titre" value={formData.titre} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="duree">Duree : <span style={{ color: "red" }}> *</span></label>
          <input type="text" id="duree" name="duree" value={formData.duree} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="tarifs">Tarifs : <span style={{ color: "red" }}> *</span></label>
          <input type="number" id="tarifs" name="tarifs" value={formData.tarifs} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location : <span style={{ color: "red" }}> *</span></label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <textarea id="contact" name="contact" value={formData.contact} onChange={handleChange} ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="remarque">Remarque :</label>
          <textarea id="remarque" name="remarque" value={formData.remarque} onChange={handleChange} ></textarea>
        </div>

        <div className="form-group btn">
          <button type="submit">Envoyer</button>
        </div>

      </form>
    </div>
  );
};

export default OffreForm;
