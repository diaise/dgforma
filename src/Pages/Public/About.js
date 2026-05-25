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
         <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm1hdGlvbiUyMGVuJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww" className="img-fluid" alt="qui sommes nous"/>
        </div>
      </div>
    </div>
  );
}
export default About;

