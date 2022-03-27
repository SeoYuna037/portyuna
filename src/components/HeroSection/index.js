import React from 'react';

import { HeroContainer } from './HeroElements';

import Computer from '../../img/computer-front-color.png';
import notifyHeart from '../../img/notify-heart-dynamic-gradient.png';
import Folder from '../../img/folder-dynamic-color.png';
import Mobile from '../../img/mobile-dynamic-color.png';

const HeroSection = () => {
    return (
        <HeroContainer id="main">
            
            <div className='intro-content'>
                
                <div className="img-content">
                    <img className='computer-img' src={Computer} alt="" />
                    <img className='notifyHeart-img' src={notifyHeart} alt="" />
                    <img className='Folder-img' src={Folder} alt="" />
                    <img className='Mobile-img' src={Mobile} alt="" />
                </div>
                <div className='text-content'>
                    <h1>끝없이 발전하는 개발자,<br/>서유나입니다</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi commodi, quibusdam quis enim ratione ullam corrupti modi. Suscipit, iste?</span>
                </div>
            </div>
            
        </HeroContainer>
    )
}

export default HeroSection
