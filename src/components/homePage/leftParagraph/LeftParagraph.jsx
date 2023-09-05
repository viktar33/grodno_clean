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
                    src='https://lh3.googleusercontent.com/pw/AIL4fc8vpEwNpd3qT-kFYZvmpy1H5B1m59aTt69hB4Xk7SsJY1ChqWuNAF-efUooqgzjjmXzAT8jw8T5GL2YFKjKrTGooplh3A068YU64t1nbi_ksnkDQk95SIlffKAESRnFk4Lb7jXI0rmFmyFDOfygfY1uSUuI8sBKzizVlP0YAj8Iv2zJdf890uVaJPVpZuvC1YRPWZQPBIp-pmRp2DaL0SPp_PGJRh1LkADJSFC1MSqQS0hjP4HNDIEP-_c3VqY3dhEHS7bKgEZTwBZyruiRtqeVd1DNPzk0Fj7eg0oCm_l_K9MYaKV0KBJinbV99K6pKNIvmBxlVR1Jtw7lYtvU5jUoARHTWg9cL3KnOnJ5gOjF-_GA3CqVvxslEV26pWZb1HoERJK8NxlYZM6UUPbxBR6iBxbhv1CL8aiB3CLSn5zv2TA3j9LKDzcfz6KInR2cuLhnb7wpdd9md8IG5ycJw7FcaPq_MxO-P5xoBBEeqa-mvu_0vCCohesvJo0WBujL3HjrKxwP7055LzXXFNLvJYtkXH6XUh37zGuK8TSSdRkwpkEaKlHlrA6O1qodozjLqprjicjUsFa_75kG-YHYM0wmlGgSVKFoqi6Tb0fDP6m9hEP6onh5TMMIAhfTJgbAYVqM0faMlgAnlm7LRmb1DU0sJO-YxJ6vSycKh0ctcBfx-7sEQl-OqMVSsPrJV2phB-3LOpsDNPMQqhjxCV3n6JhrYSgdsmdrXnOA5aSrgCjxKiwPtLnacl3UiMaqSn4chHCykXlRNOO_HFFQn1UphUDBXB4zcOg7N-A2R40HDxueQhxfinO1_cHszDaDB81rQ1n4RNmqzf8cAIfuxPhqf3yyA3XyE6osACC0qGJFJ9xegL10vs5XJVikbqgk2ZW2J8ZtolE8uGbyvXFZ0PNBDNFH=w1809-h905-s-no?authuser=0'/>
            </div>
        </div>
    );
};

export default LeftParagraph;