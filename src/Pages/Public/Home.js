import React from "react";

import Content from "../../Componnent/Content";
import FormationList from "../../Componnent/FormationList";
import Bandeau from "../../Componnent/Bandeau";
import ContentProjet from "../../Componnent/ContentProjet";



const Home = () =>{
    return(
    <div>
        <ContentProjet />
        <FormationList />
        <Bandeau />
        <Content />
    </div>
    );
}
export default Home;
