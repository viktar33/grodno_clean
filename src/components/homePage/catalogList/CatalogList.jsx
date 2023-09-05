import React from 'react';
import './CatalogList.css'
import Zoom from 'react-reveal/Zoom';
import phone from './1.png';
import car from './2.png';
import clean from './3.png';
import photo from './4.png';


const CatalogList = () => {

    const data = [
        {
            id: 1,
            title:'Звонок',
            desc:'Обсудим объём работ, перечень необходимых Вам услуг',
            icon: 'https://lh3.googleusercontent.com/pw/AIL4fc9ZpfldBpP03doTEzuqlgQDdNM5S_oEhTujdru0pQWigwD2DXDAajC-chxdTrgwmHQsDrJAcwAIvLPuJ9cpazBvi9Ssn3JsthUd8DmIOwJz5cZ3SZiYDzbM2qdUqykW1VJWS9_BzaAEeKTgD4SxsJUmXhLF2IVCzw8VYXTFKu1FUA274LedjWF4LqO69dxdlqkQycSNu50A6CHZ2u48WHcZ28SdlRs6HnYczSv_3Aj7v10RhNUiglwPLa8nIBDZh1ED6jIUMaBoFz0N3o55QSpi8u9pnrO3SL5w1susWzWIokX-yI807yUyUHtMMVm1aK58-3XyPzkO-EJwoRbEHDuUKhnDUhgRRRa6TvAW9yA0lGKY77OivfIRfcBYc9fWI01X0GSAsQoFjnYFOAfPbFcwrhOTQGpmW1YYNXAH-djrCc8AvmHlsBybK92Wt74OkqT66M7KEbsQQHby8cb-POS1RKxysK6nbDzJQD30L7zUMHFHSpEVC3_kUUGME3v7TbttbdSaFkBrr2c17Cv0eITJX9JrE3Wej15cg31hQsf2O-Co5zsmga0EloFLh-N02zZ_meTAJ4kp5o7NnZ2g571E4u5EB3e5AQzp2BOAzpjzHY7apP5kwdkhMkKNH-8xXjSEJ8KXp6ZFEB2z18Djt3MDNKg1AhM3vVqjHxu1y_MtAVBbJDnYb8y8HEtAWMt9IEbMClgFMUkQCSgDv83SxKmSeqIm8V4OXMdiz5X30XEvtfcwyamLAiiFOwNHbOku9Oi6wVG6Lvoqt2olvdP35_7GLylVob-agnr6wqo54ihY-x8L-QCOnqVjPW3GwQPsB1puEX1uV3Lv3PKFN5g5HSF4FWes9j5OOln65searKx1Ii5uwSq-jkc54sM_5tQFUQAC4YamCsNtRpYkTlbdoqFn=w512-h512-s-no?authuser=0'
        },
        {
            id: 2,
            title:'Выезд на место',
            desc:'Выезд осущетсвляется в течении 1-3 рабочих дней',
            icon: 'https://lh3.googleusercontent.com/pw/AIL4fc8Y5AqprdLTO93JITaFio5XY4K0RFr-mnpK-NtAfy_MsO_m8HWhU8Qp4pPqgxaSbwDLWNQ0ANyoTa6gv_L3XlN7mmmF9f-eFwdorxyIBy9cFOAOi2qjmeUPfxvgiZmS-b1k9FjLE5Z97N30b37C4cKqmnHF9V000hG0ReMhqwFAN96rvVxeSVNjeqvVYaPp6IF7HTJLgoh1JsfQlsHOtE6af0IKPcNVSk8mpR5QGzy_nb6dxiHe5tsceZme1xPw1Kwc8SdhOztPOgpyKdR_f0nRwntKZxmeot29NrVfxGFaTBHBi6Ngw2oOkIeLGIZTiZMYezcnlpSovgqCBehfTUoEhYGBLcvXfy-Aj2LwAprUVcuIFHw1u5G_CisFjw8kfNHhmPMKJSOMkS_t8DdbjGFXn9d5FqR-J8JpznVWmB86ucEY71QDMl_owrBrbUb_cC_K-e4pyQ4rL0oSKOPFcpKYkhc2ayT9jEXsCGW8MRE8A7nWfKqKlhK8NBaP2-2yOuRbNU3GYIjOxH6PiFtXdaGBGHqG-TXgC-qxZ0OduRU8A5lA7xfKYisFZPIubquszVdSapru82rtcJ7xziqCae_UrszORzmw2_2O7gb8TS759qUyMP9TqGpA5HB8fkd3iSocGlCvn04f2PhWn_2JICuSuUCRI7FTpwdVL3TtaMEBX61VIV1FLibOOpMqAfgMcmNx8fasEdRwcc4NEGATXQxgSglBTAl7bkaPhexBlcWtkzavUOPvGCZBWyoHZng7eSqJprZUHfAVYot80aNUr4IHrFMkqMK9JJQFtHnTsfb-H5VmRjpDn_9sdlbhi_CY87eph4Yb92v_dr7ev3L6NWfTS_0ptNMERJ3MbgjuRg_dGl9U7kgxeRgZoGT18em4cnQcFBw9AH9kFxdZR4BXey_K=w981-h490-s-no?authuser=0'
        },
        {
            id: 3,
            title:'Уборка места',
            desc:'Мы выполняем все необходимые процедуры, оговоренные ранее',
            icon: 'https://lh3.googleusercontent.com/pw/AIL4fc-yoft9-mbCLL43_NfkxOSGcBZDQuLNFL6XgctfPr3nZ6keICA13KO4hdsGeWUai1EI8A_SvO2Z1vNiPRDPhpax_LuWzqmr3FqvqaCyuH0aCkLp3FBqUmu8UIJrALmhXC7-W-ObGZMsdnCoKLbYSeDL2ZgHNWNYu_MSU7mfxCpp97zosG2TWx26ktRV_UnkFN3-zoTpR-IRsQYS4DnJRNqUVN_Tec_WhZZjg8OD6E08nzine9tj6jGhBhct8MVy5Uu2Oit6RiNxtn0XOI0rOYQKBOEgsJySHCpAVL7xbje6Ka3NyNxQTYxAtupNy3WGiIvCyG40vkYb5hmAvV7FkYBwEn2oNEAvpw_FeORnUegfi3VE0tA2RKKeP_MuKeZplNtAjddYQZcJEgVDb6HcfnlNoysH6gAQAjEm0nFC_jprRVOPfrW2POnoyMVGaUfNj7d-oLRQ3bPX-C1gR24W7Vd_fADukbRrvn7BF3KjUhAB-f7VrWRHBedPphlJ-J4bomEMM1D_iUP7jgZWkT1cWR4hkrPxYtyG_u_AqtetfjoM0evKVsUqs96zE2MIOUpHmCcqhDgN23ECh01xklpClhuJvSdvKPlbPzBd5vFracXztv8GwGDwS2kGrD8-49aG9xqYoZeRT0pudvCxA6bKN9l7osntmB-3tQzgG2cwAgrPQRuBfOH7xQN1fpeMzcxOxmkgXdK_Ukwjwr79bQNzW8LAlEqjsuxBKgvMa0pqeTRo8K7XtNICejbxN1BPQfPB43tniP4U__9Pu665GHxEpU3t_Vf0L6v5V3smIJb67Bd88lv8KOvcaRHDa35e3pLa97_Yp1X7TUh8NezigOtP2p0uFJEQ-kSw_gFtO8FyRG7MKPB56LJG3diQnXx09BafHtBvan3lL7UgIcoCpjz2g4qN=w905-h905-s-no?authuser=0'
        },
        {
            id: 4,
            title:'Фотоотчёт',
            desc:'Присылаем вам в мессенджер фото, на которых фиксируем выполненные работы',
            icon: 'https://lh3.googleusercontent.com/pw/AIL4fc-kKaUq1YImYLP9Q-RBPRnyQNbNujvdDZPox_IPQCTWeKB8QzVgGWegcuI3N9aeLNgTb3rx5a9WDhGlW0wOhXMknI7vfrVyWZwg8ZB-jpi0iwAruZiWlVnw44IYQpFC0g1KiIgNyzfMU4OC-8qWa652ORBDxOY03_WJCRe6BwuGne2FrxjWbbTYTkDlPlcgo_NH9WDrj2wN2rMEXQ47s4I6P8Bk9hmGjyTWL50azdPj2bn6WGn_E1WRdel7umDxrI7uflKkVL0fXBS4pWyq3mBGFwnXhN0toQdI2Qa0acIssg2rth6hJz3_0ahAffzw448IEP0oSUAiXbFp9FAeUi2d7FxdCbB2s8q2aWhsLV6vBALbVYo5WNvINYlIjFn0wEWBEapxNkiR_Qfa2HPV0n40beml_7Gn8-FcfXh7-lMJPBPEI8OoW8iYH3HavR2bEUWQBeTaTmIhMvkStwbq94P-wKpL-cKdJTq4v6HGC0Q0Fw6EGlHrUiD8BJY6KZzWqa9H_YUSYQuLNqBJOr9FG1LtohJVwb0FcfFHI0toRAACEH7A_a58gvW6Gj-BK211O6YLSWy5BPlDphYKYhn-LLNvvM-DYrRXL9_BtN9MmrGaQ7q50GK3kndgRGsuPGeVeEo3RTAm9X2ayen0HxzIAJGDQ91_zy3uqoCAhzzQtp1wq29t-BQ6i4eD5epUN8nKs4pdXLnFcWjpiduuTJ72MmGKoCESmdqawF94b50Wn9vts_jOGmzmWU4SYHfDnt-3Xy-B0ddIpbLbint8eZYXoO6LN2nhriZZ7Q1OLRkAyRH2HZYRBlzi3UKjdXJW94HfgIBsDz880Xs1tYKmG8b_DONX_0RiY9gng3S5FJPbnikLPWB9giepNBMeThq2KMq3lFJvPl5roUdSAdQqP5LsotoI=w600-h462-s-no?authuser=0'
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