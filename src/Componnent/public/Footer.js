import React from "react";
import '../../Componnent/public/Footer.css';
import { Link } from "react-router-dom";

const Footer = () =>{
  return(
    <div className="footer-dark">
          <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to='/'>Accueil</Link></li>
                            <li><Link to='/Service'>Services</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Qui sommes nous</h3>
                        <ul>
                            <li><Link to='/About'>Présentation</Link></li>
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

