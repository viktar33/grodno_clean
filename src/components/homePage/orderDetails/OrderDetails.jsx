import React from 'react';
import './OrderDetails.css';
import Bounce from 'react-reveal/Bounce';

const OrderDetails = () => {
    return (
        <div style={{margin: '2%'}} className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <Bounce left duration={3000}>
                            <div className="timeline">
                                <p className="timeline-content">
                                    <span className="timeline-year">🧽</span>
                                    <h3 style={{margin: '5%'}} className="title">1 Шаг</h3>
                                    <p style={{margin: '5%'}} className="description">
                                        Очистка могильных плит от листвы, сухих веток и других остатков растительности.
                                    </p>
                                </p>
                            </div>
                        </Bounce>
                        <Bounce right duration={3000}>
                            <div className="timeline">
                                <p className="timeline-content">
                                    <span className="timeline-year">🧹</span>
                                    <h3 style={{margin: '5%'}} className="title">2 Шаг</h3>
                                    <p style={{margin: '5%'}} className="description">
                                        Очистка земли от сорняков и мусора.
                                    </p>
                                </p>
                            </div>
                        </Bounce>
                        <Bounce left duration={3000}>
                            <div className="timeline">
                                <p className="timeline-content">
                                    <span className="timeline-year">🗑</span>
                                    <h3 style={{margin: '5%'}} className="title">3 Шаг</h3>
                                    <p style={{margin: '5%'}} className="description">
                                        Удаление мусора из могильных ям и окружающей территории.
                                    </p>
                                </p>
                            </div>
                        </Bounce>
                        <Bounce right duration={3000}>
                            <div className="timeline">
                                <p className="timeline-content">
                                    <span className="timeline-year">🚿</span>
                                    <h3 style={{margin: '5%'}} className="title">4 Шаг</h3>
                                    <p style={{margin: '5%'}} className="description">
                                        Поливание земли для увлажнения почвы и улучшения роста растений.
                                    </p>
                                </p>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;