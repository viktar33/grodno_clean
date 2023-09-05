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
                        src='https://i.ibb.co/1J7srH5/1041281825-0-320-3072-2048-1920x0-80-0-0-c0d71f834f264f73cbf726ac035a024a.jpg'
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