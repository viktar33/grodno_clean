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
                                        src='https://lh3.googleusercontent.com/pw/AIL4fc_5pE8j0eLe7udLt-ARo6PI9zLjB7TjtBcYwnOMqKuAOdJDmGvI9KqM7V5yAaZUNMumoWlgEJaexTScDCYgfbSbeDXtc8gDFqwxvZ6VNKBkHRN1dZ_QSa5S-J8oj4NCG0x8BbHraq2mOYKCr5Tu1Z0cH2q1KckZ-oVRLyxZ9i4CYxxlOI-v35iOlTCy3cYcU7jItmxq2hXs_Kdm6G6gWb5grbjGoHBYq1oMUrkMpVLDqvx93OYR-_yaYOD9jzJe7knwHL4sJpb5Xqsos1iwCK66-IO_T_PyY8TAifbptnPlBRRljASPuJnb3DQ2wQ30JfXVMbFBRjrF3wvTyDfg0N6t2Ty3mzDFqFe0m0RTmahxoAj-KpehnL1YGIX8vebZ0rSjkA_FDlNA1JKkUPYPVUe3NCzgaUwoCAWym4IIB_yROg5rr6NpTy8I0AfzizyFaxVc5ypIaHalUFE-UKLNwwNCv1Lq7Uk_jBLgKjKmrr8dfJwEa1yg91M_6drRKPvZD2vUJy4iFRDZt5MfwRugTBUIcW3GkdaGFyzl2fuGgLxKDrBmDg4uu8tQgThz_QJU1hbRFHuYQ59TB_o9X06fMwUDXDLEW5ikwSkjOZJaRqJDVNSSg90HigjFlbIROxUgV3HwQ5RrfE6fzBN_WV0nxtX2-8Iy6YEuYM58vv2yI796kqCOf2n7UY1Rp7OsnUR-ccAeDL7FnqfBdu3q424XURrI18ZcI6_LroHBjW0WMq1JoEusP7VIsFka0vMKFWfCCBPKNvk3BMGGesITOREAgmKaHKT-4xUL5p2_kf5PiALmwUpCKA4UQRmtlEHked5GO18ocB-igmU8J9zVm8pMNKqcZrsdaAE4agBT2e0EysB4JwlVcZ-BSzQOKuqbdJ2wrgzpcifP-Jnq13gbdLieKVr8=w842-h325-s-no?authuser=0'
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
                                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9mBKchSnMdKIYxQHhUtRHnaLP4ZFillCUWNzLnjvqqRJuNZUZYzwshPof-tF9rCY2sPD1gQg4kVl5ftAObBxBqIUS8MWmFNh64KJyWxtvWqC_NkGVDGzeAiIi7trJ6uKt-cDRgZY8ytXmt6FQdlNfdOkNeIY9c6Kc2S7WmrHr6BjQ5sWQDAgAQeJqTYY5g6of0wA5aMR9ub5F68lIG_owZmGfuK0dGqj3hUqm32miRbY0jH0l8zOoE4HXktEDw2FmSTmwK9up-YqTttE4MN59kkak9wgOl7mK8v68M3yAMIuw6zpOACKtPvcg6Qtb9Eun1noR3m0ugYCZf31fq848GqG5yRgiYuGEoonaVs6yo9DCEKSim8PbEyHMu1ncmLolkRodVM158NKunU7qMB6jSB8efweTAO9hAr0y6u09DTLE7Auo1TDiWqD1gLr1D4-yP-8WDxH10idGuynldJAmCQNX4wteBFbd0n63Grr3ptoq3Nrdg91CkO3yBej7jiCijJkt0rNUcJqPUMspjCly4bUygRbp0E_O5XQmL3jhjUv3uBpfyua0zXQN9Lfy763nnmhU-uxTBsZWbUyz4Et8Mkn-S8gyhG9MBZUun31cNKfcSCx6EoCknmn174hVLn6ut5GwVe__x4qiErQPwmEaxv421DfMJPqqr5IErud63cZtKFCa3uwuO1DMXlHgtrzutVCSgVfgnrAzgUC4HpMBYLNL24qYQTgAK4viFG1khGwY6sM1L-VgFLiA97gdA2wUHerKQXIjqbchmQloqlERvRljs7XLcrWMjVJH3ytEHiV1-ufRpc60wturK1zQm5DxBmDvzR27po2-jx3bXXOtJaggOCqRvhP5ukohwTzJ8XXvelFsMyPpPqPijc3glZI-PcIx7Rw2Nd577cjj7e91R=w905-h905-s-no?authuser=0"/>
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
                                                        src="https://lh3.googleusercontent.com/pw/AIL4fc-HEzNutatXc11x1ZG0dr4m5f9-WOZkYlhTGrurQVCT19rUQtdoazkdswVPMorfOLdO-VskcrSNrSDCCmFS9bjdZPHFTNj1uWyL5RPAuxVhodCa2YTt-DlXxVRNSY5ZcathmGZeam1Lo5mB1rDMe4CEJhrlC7KAwJoQ3svt7I2xkQWBIvY3WucPMti6gaT11Uo0gLhVIifLX-rFpEA-QyKMBkZUto64hJyPnMK-uiOTC6eBwoZqXqTj-KTAAyXkTRw5tzb_A7HWWmqu3J3gLMyf_LZXOwjKFZmcs1e64Dm-YqXaA07rvceTUW7YE5u7OdJI15_olWT6ZAYaEJ2Ni2U1RT9ejiya7AjDfCzsHMZsChFCQlG4IyzkVpf5MaLtGBqyH2-L4whinc2hL55nI88ArXed71w3_4vEzXmqvdi2bDSZfOvGLRoo9UhdSucsgPdtlzys98fCZXakHa52FEXdK11g8UwysENuATtdcZPNIY2DlAezZ2ukZdeMJZmevwDMubrOI-oE_Oj8yC0CPoXFSr42jmsdQSt9d_XzaI_B5OfT4IOYU3pY-iDNaKuE9ZMNpNmHr6oNLt4pyHQ2m606ues22OMcsHDgxU47qN5kzAXRxBqZpasU6dm5GjZnB_lfSTVN32uHkzrSfxiLKXy4_dYTY3uIISzA8LmBAUwnIzq8Fd_dp_Jq8uaiAEQ5h2RrcKlJxva0NaxsSYCtCb0Btecc-NIHylHPGccNViIVOfrPGfwlOS1dSxJD00psm4X4sXcn76cc1gzCH95SR_FYsGOi0G3vEt-ViSvCsu0hmGQDfG4P6q_y7VRWCLinwTAx9DKS74IPyHQJxnGEhohb29_ObzuDsImlpsowCDcoSG3L-ZlATkNIFkfZYmjO1D-AvIFtbhoPkfyWps0z8TYH=w512-h512-s-no?authuser=0"/>
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
                                                        src="https://lh3.googleusercontent.com/pw/AIL4fc-b7M-lnnV3cCOq8f3HIfWyTBoYm16zZ0ewvx4IzwpGEImUJKocEeSR5qFhuiaXPYzToGQE_iO81eS1EkQ7_FRJr1vu79A7NnHqVI2WJKWaR7Wp__p2rXUEbDYr_SEbQhHHKsifijIKEZygZP0ynBWq_syVAL8Phxse-CZ9Y6EmU5SbpVmfoeueKMvKzfLdYyNkhHrdmrTk3-An3qozk9y3_DyTRd7cx96efPcq39__4Mzzm5tCgnxX5DLB3jZcipV_pLiuOVB31ZyplcbFI8wOmTxvYLqPVry92dd7bnBT4IjFslljXIf5POH7AKr4WzHntzYevDHohJASCUldWjFB2cBaw7OnggZXb6k_LkkfcRFxZVouPEONJ5a8RGxNNEBtTxVMADkwfVDmWDqOg9JRzn13Mgw8AmC5pHJFK1wSwI00LyRH3Ms9e-SNUE0QTmBz3GQ1ZVsuizNBTQ5MmUD9knc_cvQxZgoPm-jGz9QymhdmwJcljIW11W6K3b_pZP27tGXWefSCPsj53cvGoV3vRdgj1dJT0aWmgY6GHyo4pEvL_fmuCjFBPtudk90z3z1BhRwMjHwcE_pQLyKikP3EwB9qo9CTTslw_DKcdJI612JgZtuWKDWc2K7JYfKI0fdiiA5v1JDMuRz1h3_9K4mt-x31Fj2XWb7wX6KPXPUq-38AlXZcbL2vaWDYiQceRscs49SlqIjwwzU0S5aDeeGXCZDBu9MJ54gfWsDQ65SJ-wwrzGVT0mIxrcaMAyWK8Ma_yXapbrgtsNyadta1TjH9aStB4xco4B3yrdYsEn-89VfQjFGYjAJ7yfvVkM3olXu02x44j3ZWhGHSb6f1X2nxir8YdBJj_GVcBXFWtUX655T0tPEDP8L0HqeYo7ehtMvrEpYxf-chSTLzFXVyNrem=w512-h512-s-no?authuser=0"/>
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