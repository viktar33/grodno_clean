import React from 'react';
import './HomePage.css';
import MainImage from "./mainImage/MainImage";
import LeftParagraph from "./leftParagraph/LeftParagraph";
import RightParagraph from "./rightParagraph/RightParagraph";
import OrderDetails from "./orderDetails/OrderDetails";
import Subscribe from "./subscribe/Subscribe";
import CatalogList from "./catalogList/CatalogList";

const HomePage = () => {

    return (
        <>
            <MainImage/>
            <div className='greet'>
                <h2 style={{color:'white'}}>Почему так важно помнить о своих близких ?</h2>
                <h4>Обычно за уходом за могилой должны следить родственники усопшего, но не всегда у них достаточно
                    времени для этого. Если вы живете далеко от кладбища или не можете лично заботиться о могиле, то вы
                    можете заказать услугу по уходу за ней.</h4>
                <CatalogList/>
                <h4>Уход за могилами – это одно из самых важных проявлений уважения и заботы о памяти усопших. Чистота и
                    ухоженность могилы создают благоприятную атмосферу для посещения и молитвы, а непосещенные и
                    запущенные могилы могут стать местом скопления мусора и привлечь грызунов и насекомых.</h4>
                <LeftParagraph/>
                <RightParagraph/>
            </div>
            <OrderDetails/>
            <Subscribe/>
        </>
    )
        ;
};

export default HomePage;