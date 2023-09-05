import React from 'react';
import './RightParagraph.css';
import LightSpeed from "react-reveal/LightSpeed";

const RightParagraph = () => {
    return (
        <div className='rightParagraph'>
            <div className='image'>
                <img src='https://lh3.googleusercontent.com/pw/AIL4fc8gVIeJ_rw-l57Ag2lwl_3KNmdxHJovu2KUMR_6gTyKPd_FwOzbatyhxgkcAHAzclV50Gn0XEgFffiJAbr2gdfEmmThQXEq0DPomYNbDuMvPtZ1dkltTqDnCuOWc9sPIi5zjbuQs3NFRNX5bTsJz-g5_hFzRK_dNseN89H9o_lwUihLUMrfrTt9Sn9IJU_B6a04LIj9C5DWouC1iqastcoUvzJU3LBLEfNXPiY8GmGDwVJoEIh4q6jYDL8kXC7nNaOrdYSjRCfiN0xACK4jFsil2uqiTqCsnBnrwIgcfNbmlSkA41v77hqESU5wz0YOZKx2lCmFLkLIn-39Q4UwyWcgtLQwCZTpJRo_ZP-JBgnrfSgDsT9ESGp7EHyFc2u1UGxpMSrfw-xFoTCyHOJ_BDEuFh4q_M5aex1m_U6HXmdgOChjlDh47yMUKjvHENbX5AS_85SayJn6S-sOycRSKO4ZfBwk53MDvt26ytAe_sbuvixO1eWV9OZ_xhCG8QrdqGqbhIHygMz-dKz3eolxaD0IoZPYTAF4iJfgj8TdaNPE99gsJtXCtJyt400HPY8TFEpO7aZ-7p1ieM3Ygsi9QPqN1VgDNEOVtE9zHthPSTXUE5Zk52IsdoN2R2YkSYj5B1OzN9NpA_mBlWrEaoz58NYNak6zlO83sBQ78UewV-w5BAbRoj4c7rJCoDbo8_tq5f_wWq5fvpe4cU0uYRqspNcaF7NaN3XeSRvTOI4wmj8Dho25HcqOUPeaXOjWhxzZd2IOtVef3dfQN4MCG0TupDovsMFojSU1KOvLhHLadkQUu04OiHp6Ezfjo4YeZdceKapsHEVpGYkD7HndBcFHSzZAUyK_asU5eL_Xn5zx1wpALgSkyFrW9_7RK8x7wBmr3bnNcYQx0ezyw7jt_XBrXFDD=w1320-h905-s-no?authuser=0'/>
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