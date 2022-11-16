// import App from App.js
import React from "react";
import Hero from "./Hero";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
const Home = ( )=>{
    return(
    <div>
        <Hero text="Welcome to react 201"/>
        <div className="container">
            <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <p>
                    Welcome to React App 'Movie Browser' project. This is a Project of React 201 of Udemy Course "Full stack web development bootcamp".
                </p>
                <h4>Instructor: </h4> Sir Kalob Taulien 
                <br></br>
                <h4>Student: </h4> Usman Rais
            </div>
            </div>
        </div>
    </div>
    )
}
export default Home;