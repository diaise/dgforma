import React from "react";

import Content from "../../Componnent/Content";
import PopList from "../../Componnent/PopList";
import Bandeau from "../../Componnent/Bandeau";
import Bog from "../../Componnent/Bog";



const Home = () =>{
    return(
    <div>
        <Bog />
        <PopList />
        <Bandeau />
        <Content />
    </div>
    );
}
export default Home;
