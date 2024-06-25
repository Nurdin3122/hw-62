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
            <div className="container-2">
                <h3>Услуги</h3>
                <div className="block-cards">
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services">Приемка квартиры без отделки</p>
                            <span className="price-cards-services">70 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services1.png" alt="#"/>
                        </div>
                    </div>
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services">Приемка квартиры без отделки</p>
                            <span className="price-cards-services">70 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services2.png" alt="#"/>
                        </div>
                    </div>
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services part-2">Приемка квартиры во вторичном жилье</p>
                            <span className="price-cards-services">70 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services3.png" alt="#"/>
                        </div>
                    </div>
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services part-3">Контрольный замер площади</p>
                            <span className="price-cards-services">10 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services4.png" alt="#"/>
                        </div>
                    </div>
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services">Составление плана квартиры в электронном виде</p>
                            <span className="price-cards-services">30 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services5.png" alt="#"/>
                        </div>
                    </div>
                    <div className="cards-services">
                        <div className="info-cards-services">
                            <p className="text-cards-services">Заключение кадастрового инженера</p>
                            <span className="price-cards-services">100 руб/м2</span>
                        </div>
                        <div className="img-cards-services">
                            <img src="/img/cards-services5.png" alt="#"/>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Home;