import React from 'react';
import './LeftParagraph.css';
import LightSpeed from 'react-reveal/LightSpeed';

const LeftParagraph = () => {
    return (
        <div className='leftParagraph'>
            <div className='text'>
                <p>Уборка листвы и сорняков на могилах помогает сохранить их в хорошем состоянии и продлить срок их
                    эксплуатации. Это не только важно для сохранения культурного наследия и исторических памятников, но
                    и для уважения к усопшим и их близким. Уход за могилами может быть частью традиций и обрядов,
                    связанных с памятью о предках и близких людях.
                </p>
                <ul>
                    <LightSpeed left delay={300}>
                        <li>Уход за могилами является проявлением уважения и заботы о памяти усопших.
                        </li>
                    </LightSpeed>
                    <LightSpeed left delay={600}>
                        <li>Чистота и ухоженность могилы создают благоприятную атмосферу для посещения и молитвы.
                        </li>
                    </LightSpeed><LightSpeed left delay={900}>
                    <li>Непосещенные и запущенные могилы могут стать местом скопления мусора и привлечь грызунов и
                        насекомых.
                    </li>
                </LightSpeed>
                </ul>
            </div>
            <div className='image'>
                <img
                src='https://i.ibb.co/C95p9Ts/1662421797-2-kartinkof-club-p-novie-i-krasivie-kartinki-kladbishche-2.jpg'
                />
            </div>
        </div>
    );
};

export default LeftParagraph;