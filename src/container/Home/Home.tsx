import React from 'react';
import "./Home.css";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h3 className="tittle">
                Links
            </h3>
            <div className="container">
                <div className="block-home">
                    <div className="card">
                        <NavLink to="informationAboutMe">
                             <span className="text-cards">
                                  About us
                             </span>
                        </NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="contacts">
                             <span className="text-cards">
                                  Contacts
                             </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;