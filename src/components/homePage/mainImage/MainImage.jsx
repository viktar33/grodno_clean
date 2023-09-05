import React from 'react';
import './MainImage.css';
import {Button} from "@mui/material";
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const MainImage = () => {
    return (
        <div className='mainImage'>
            <Pulse duration={2500}>
                <div className='image'>
                    <img
                        src='https://lh3.googleusercontent.com/pw/AIL4fc_f0xWdMVwbY19kNGsxiDh4C1LTEI5osT8VHcpDy3tUtboRjjrkLxpOR93LhnTswlYrNHkkdUb9zaNvjEWeuFlGNPLbuwuUc7-SFCoKwKbInV7-_Uiae5idr549Tek5dLUCkrMEb-8wRPb0NGubRDwyIqPrrfjfPIDYV7qUUY320d2K11zyl7yt-TCQrmRNe6nSjrHeB9Y6jEpRYfOqO8-9BxmLa4a7YgVYRCxrGkV0vhiZhO1LFgEW_aDvEU8WKHwMEE9Sg6diVF5heLQWrfQK1k4mJiutx3bbn3mwjAoszDnSpZL1bqIBjNfePpi7uAT3Ep3BWoclsOXAew9wgvEUxitELxvblPd8dqRVyJurWCMHNSnTkO725Q_Fy9dN4WrQuZtIeB841gDVyxXTR5taD861xh4WikJrDFsJA5TJIRBpGyASAx3zqAtGpBeSAEReDkrwZ14XsSO-Qj-esEtS0jhsvGpjAX8a_fQWl5LNbeVJts21JhekEdoqvLqLUqw8VOFLLsrZiMNP1z1J3CSVB0BWsmtsCRqeVY1QQwYimWnLh31AgJ6ACqHm_90BRLHq_hSS78Eh578kksvzX2HnFOBZZ_XcKmBk4hxuc_ekpXfCIgB-QWJ-rFcLujAuwJEHntaUQFHzUwFixtE5aXgBUh83ave5voNVf7LMO5Oq-N5-1cprC18lwheOgmzaB20uWyl7Sh7x5QQIntBGENdxOJ2jXMP9OeF9m0GN33P85siCfv_QGbaAXCqjRA2RpjwbrwaLl0aFS1J7f9wDuRu07Q8A9nWZwlaw_rQOm9OD_v0nmiPZVfEHCGF8u1K-WhCQDOopLDVzy1RtxuCbg7vaDVv0h2FpHtmaPkBGJZ29pnTUgHS5sGUBZpXynAhUOhJfG1Hki1Djlq8FgMbpllnB=w1608-h905-s-no?authuser=0'
                        alt='asd'/>
                </div>
            </Pulse>
            <div className='text'>
                <h1>Услуги по уходу за могилами и уборке на кладбище в Гродно и Гродненской области</h1>
                <hr style={{backgroundColor:'white',border:'2px solid'}}/>
                <Zoom top duration={3500}>
                    <div className='greet-buttons'>
                        <Button style={{backgroundColor: '#DDBC95'}} size='large' variant='contained'>К услугам</Button>
                        <Button style={{backgroundColor: '#B38867'}} size='large' variant='contained'>Написать нам</Button>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default MainImage;