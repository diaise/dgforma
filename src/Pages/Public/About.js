import React from "react";


const About = () =>{
 return(
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
         <h2>JENJOU</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p style={{textAlign:"justify"}}>
            Aliquam fringilla,erat sit amet imperdiet bibendum, ligula augue sollicitudin augue,
            et bibendum metus massa vel eros. Nunc velit diam, hendrerit non bibendum in,
            ultricies quis massa. Nam dictum congue rutrum. Praesent facilisis purus ac felis pharetra venenatis.
            Curabitur ac vestibulum justo, eu cursus elit. Vivamus a tellus quis arcu commodo tempus in vitae neque. Proin egestas pharetra nunc,
            quis tincidunt turpis porttitor in.
          </p>
        </div>
        <div className="col-md-6">
         <img src="./photo5.jpg" className="img-fluid" alt="qui somme nous"/>
        </div>
      </div>
    </div>
  );
}
export default About;

