import React from 'react';
import "./Contacts.css"

const Contacts = () => {
    return (
        <>
          <div className="block-contacts">
              <h3>Our Contacts</h3>
              <div className="contacts-info">
                  <div className="block-info-contacts">
                      <div className="info-block-contacts">
                          <a className="links-contacts" href="#">+7 995 888-35-63</a>
                          <a className="links-contacts" href="#">zakaz@mir-kovrolina.ru</a>
                          <a className="links-contacts" href="#">Пн-Пт, 9:00 до 18:00</a>
                      </div>
                  </div>
                  <div className="block-img-contacts">
                      <img src="/img/map-1.jpg"/>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Contacts;