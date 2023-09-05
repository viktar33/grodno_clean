import React from 'react';
import './Subscribe.css';
import Pulse from 'react-reveal/Pulse';
import {Button} from "@mui/material";
import emailjs from "emailjs-com";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Subscribe = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0kzs0pb',
            'template_eosmr1p',
            e.target,
            'GCsKWa0vn3lBtzJpK')
            .then(res => toast.success("Сообщение было отправлено. Скоро с Вами свяжутся"))
            .catch(err => toast.error("Что-то пошло не так"));
    }

    return (
        <>
            <ToastContainer/>
        <Pulse>
            <div className="newsletter-subscribe">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Напишите нам</h2>
                        <p className="text-center">Оставьте Вашу почту и мы обязательно свяжемся в течении рабочего дня.</p>
                    </div>
                    <form onSubmit={(e) => sendEmail(e)}  className="form-inline">
                        <div className="form-group"><input required={true} className="form-control" type="email" name="email"
                                                           placeholder="Ваша почта"/></div>
                        <div className="form-group">
                            <Button type='submit' style={{backgroundColor: '#DDBC95', marginTop:'2%'}} size='large' variant='contained'>Отправить</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Pulse>
            </>
    );
};

export default Subscribe;