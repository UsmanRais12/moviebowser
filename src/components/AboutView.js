import React from "react";
import Hero from "./Hero";
const AboutView = ()=> {
    return(
        <div>
            <Hero text="welcome to react 201 project by Usman Rais"/>
            <div className="container">
            <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <p>
                    These are the features availible in this project
                </p>
                <ul>
                  <li>Search any movie</li>
                  <li>View its title , release date and complete description</li>
                 <li>Check vote average and vote count</li>
                </ul>  
            </div>
            <p className="justify-content-center">Instructor : <a href ="https://kalob.io/" target={"_blank"}>Sir Kalob Taulien</a> <br></br> Student: <a href="https://usmanrais.com" target={"_blank"}>Usman Rais</a></p>
            </div>
        </div>
        </div>
    )
  }
export default AboutView;  