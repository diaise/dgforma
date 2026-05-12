import React from "react";
import './Contact.css'

const Contact = () =>{

    
    return(
      <div className="container mt-3 mb-5">
        <h1 className="mt-5 mb-5">Veuiller remplir le formulaire</h1>
        <div className="about">
            <form onSubmit="">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Civilité</label>
    <input type="text" name="username"className="form-control" id="username" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Demande de renseignements</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Envoyer</button>
</form>
</div>
</div>
    );
}
export default Contact;
