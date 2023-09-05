import React from 'react';
import './RightParagraph.css';
import LightSpeed from "react-reveal/LightSpeed";

const RightParagraph = () => {
    return (
        <div className='rightParagraph'>
            <div className='image'>
                <img
                src='https://i.ibb.co/gPx5yQC/241734440-0-167-2000-1167-1920x0-80-0-0-1be80b8198ffe74313f133def1628ad2.jpg'
                />
            </div>
            <div className='text'>
                <p>Кроме того, уборка мусора и сорняков на могилах помогает сохранить чистоту прилегающей территории.
                    Она также способствует улучшению экологической ситуации, так как непосредственно влияет на
                    количество насекомых и грызунов, которые могут стать носителями инфекций и болезней.
                </p>
                <ul>
                    <LightSpeed right delay={300}>
                        <li>Уборка листвы и сорняков на могилах помогает сохранить их в хорошем состоянии и продлить
                            срок их эксплуатации.
                        </li>
                    </LightSpeed>
                    <LightSpeed right delay={600}>
                        <li>Забота о могилах способствует сохранению культурного наследия и исторических памятников.
                        </li>
                    </LightSpeed><LightSpeed right delay={900}>
                    <li>Уход за могилами может быть частью традиций и обрядов, связанных с памятью о предках и близких
                        людях.
                    </li>
                </LightSpeed>
                </ul>
            </div>
        </div>
    );
};

export default RightParagraph;