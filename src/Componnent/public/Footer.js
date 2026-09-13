import React from "react";
import '../../Componnent/public/Footer.css';


const Footer = () =>{
  return(
    <div className="footer-dark">
          <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Accueil</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Qui sommes nous</h3>
                        <ul>
                            <li>Présentation</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>DGFORMA</h3>
                        <p>Inscrivez-vous gratuitement à nos lives d'information</p>
                    </div>
                    
                </div>
                
            </div>
          </footer>
        </div>
  );
}
export default Footer;

