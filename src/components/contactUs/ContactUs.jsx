import React from 'react';
import './ContactUs.css'
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from 'emailjs-com';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0kzs0pb',
            'template_97ajqdr',
            e.target,
            'GCsKWa0vn3lBtzJpK')
            .then(res => toast.success("Сообщение было отправлено. Скоро с Вами свяжутся"))
            .catch(err => toast.error("Что-то пошло не так"));
    }

    return (
        <>
            <ToastContainer/>
            <div style={{fontFamily: 'cursive'}} className="contact3 mx-3">
                <div className="row no-gutters">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-shadow">
                                    <img
                                        src='https://i.ibb.co/3p2CqDP/contactus.png'
                                        className="img-fluid" alt='12'/>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="contact-box ml-3">
                                    <h1 className="mt-2">Написать нам на почту</h1>
                                    <form onSubmit={(e) => sendEmail(e)} className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input required={true} name='name' className="form-control" type="text"
                                                           placeholder="Имя"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input name='email' className="form-control" type="Email"
                                                           placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input name='phone' className="form-control" type="text"
                                                           placeholder="Телефон"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <textarea required={true} name='message' className="form-control" rows={3}
                                                          placeholder="Сообщение"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" style={{backgroundColor: '#B38867'}}
                                                        className="btn mt-3 text-white border-0 px-3 py-2">
                                                    <span>Отправить</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact2">
                                <div className="card border-1 mb-4">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail">
                                                <div className="mr-3 align-self-center">
                                                    <img
                                                    src='https://i.ibb.co/jT8spwC/address.png'
                                                    />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Адрес:</h6>
                                                    <p className="">Беларусь,
                                                        <br/>Гродно</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail">
                                                <div className="mr-3 align-self-center">
                                                    <img
                                                    src='https://i.ibb.co/2S5n5yZ/phone.png'
                                                    />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Телефон:</h6>
                                                    <p className="">+375336577722,
                                                        <br/> +375295894708</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail">
                                                <div className="mr-3 align-self-center">
                                                    <img
                                                    src='https://i.ibb.co/0DmbdDK/email.png'
                                                    />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Почта:</h6>
                                                    <p className="">
                                                        grodno.clean@mail.ru,
                                                        <br/> viktar.varabei@mail.ru
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </>
    );
};

export default ContactUs;