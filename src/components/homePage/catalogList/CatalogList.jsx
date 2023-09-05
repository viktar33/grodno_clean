import React from 'react';
import './CatalogList.css'
import Zoom from 'react-reveal/Zoom';


const CatalogList = () => {

    const data = [
        {
            id: 1,
            title:'Звонок',
            desc:'Обсудим объём работ, перечень необходимых Вам услуг',
            icon: 'https://i.ibb.co/xLH1V9y/1.png'
        },
        {
            id: 2,
            title:'Выезд на место',
            desc:'Выезд осущетсвляется в течении 1-3 рабочих дней',
            icon:'https://i.ibb.co/HzfYkVd/2.png'
        },
        {
            id: 3,
            title:'Уборка места',
            desc:'Мы выполняем все необходимые процедуры, оговоренные ранее',
            icon: 'https://i.ibb.co/5jRLbtD/3.png'
        },
        {
            id: 4,
            title:'Фотоотчёт',
            desc:'Присылаем вам в мессенджер фото, на которых фиксируем выполненные работы',
            icon: 'https://i.ibb.co/J5G4dpP/4.png'
        }
    ];

    return (
        <div className="catalog-list">
            {data.map((service, index = service.id) => (
                <Zoom left delay={index / 3 * 1000}>
                    <div key={index} className="catalog-item">
                        <img
                            src={service.icon}
                            alt='icon'/>
                        <h4 style={{color:'white'}}>{service.title}</h4>
                        <h6 >{service.desc}</h6>
                    </div>
                </Zoom>
            ))}
        </div>
    );
};

export default CatalogList;