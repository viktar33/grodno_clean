import React from 'react';
import './Services.css'
import Pricing from "./pricing/Pricing";

const Services = () => {

    return (
        <div>
            <div className="section-title text-center title-ex1">
                <h2>Перечень наших услуг</h2>
                <h5 style={{color:'white'}}>Выберите необходимые вам пункты и позвоните нам для уточнения деталей</h5>
            </div>
            <table>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Цена, руб.</th>
                </tr>
                <tr>
                    <td>Покраска ограждения с удалением ржавчины</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Восстановление надписей на памятнике</td>
                    <td>от 150</td>
                </tr>
                <tr>
                    <td>Декорация участка живыми цветами и насаждениями</td>
                    <td>от 150</td>
                </tr>
                <tr>
                    <td>Обработка участка от сорняков и травы</td>
                    <td>от 150</td>
                </tr>
                <tr>
                    <td>Благоустройство могилы подсыпанием песка или щебня	</td>
                    <td>от 40</td>
                </tr>
            </table>
            <Pricing/>
        </div>
    );
};

export default Services;