import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div style={{fontFamily:'cursive'}}>
            <section className="pricing-section">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title text-center title-ex1">
                                <h2>Выгодные предложения</h2>
                                <h5 style={{color:'white'}}>Подберите самый подходящий вариант для себя и экономьте свои деньги</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="price-card ">
                                <h2>Посещение могилы</h2>
                                <p>Подойдёт для могил в хорошем состоянии, которым необходим лишь знак внимания</p>
                                <p className="price"><span>40</span>/ Посещение</p>
                                <ul className="pricing-offers">
                                    <li>Возложение живых цветов</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Возложение искусственных цветов</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Возложение корзин</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Возложение венков</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Возложение цветов</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Зажжение свечи (лампадки)</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Отправка в электронном виде двух фотографий захоронения</li>
                                </ul>
                                <a href="#/" className="btn btn-dark btn-mid">Заказать сейчас</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-card">
                                <h2>Уборка могилы</h2>
                                <p>Стоимость может меняться в зависимости от обёмов. По договорённости. Покраска забора + 100 бел.руб.</p>
                                <p className="price"><span>100</span>/ Посещение</p>
                                <ul className="pricing-offers">
                                    <li>Уборка мусора, прополка, удаление сорняков</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Мойка памятника и ограды</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Полив цветов и растений</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Зажжение свечи (лампадки)</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Вывоз мусора</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Отправка в электронном виде двух фотографий захоронения</li>
                                </ul>
                                <a href="#/" className="btn btn-dark btn-mid">Заказать сейчас</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-card ">
                                <h2>Регулярное обслуживание</h2>
                                <p>Итого за: 4 выезда – от 500 BYN; 6 выездов – от 750 BYN; 12 выездов – от 1300 BYN.</p>
                                <p className="price"><span>450</span>/ 4 выезда</p>
                                <ul className="pricing-offers">
                                    <li>Уборка мусора, прополка, удаление сорняков</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Мойка памятника и ограды</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Полив цветов и растений</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Удаление ржавчины, покраска ограды</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Зажжение свечи (лампадки)</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Вывоз мусора</li>
                                    <hr style={{border:'1px solid grey'}}/>
                                    <li>Отправка в электронном виде двух фотографий захоронения</li>
                                </ul>
                                <a href="#/" className="btn btn-dark btn-mid">Заказать сейчас</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;