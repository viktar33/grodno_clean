import React from 'react';
import './Footer.css'
import { faFacebook,faInstagram,faVk,faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Grodno<span>Clean</span></h3>
                    <p className="footer-links">
                        <a href="#">Про нас</a>
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                    </p>
                    <p className="footer-company-name">Grodno Clean © 2023</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Беларусь</span> Гродненская область, Гродно</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+375336577722</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">grodno.clean@mail.ru</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Про компанию</span>
                        Компания, специализирующаяся на уборке и обслуживанию захоронений
                    </p>
                    <div className="footer-icons">
                        <a><FontAwesomeIcon icon={faFacebook} /></a>
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                        <a><FontAwesomeIcon icon={faVk} /></a>
                        <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;