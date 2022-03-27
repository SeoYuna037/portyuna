import React from 'react'
import { FaGithub } from 'react-icons/fa';

import {FooterContainer,FooterInfo} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer id='contact'>
                <FooterInfo>
                    <h1>Contact</h1>
                        <span>tjyuna99@gmail.com</span>
                    <div className='git-link'>
                        <a href="https://github.com/SeoYuna037">
                            <FaGithub className='git-icon'/>
                        </a>
                    </div>
                </FooterInfo>
            </FooterContainer>
        </>
    )
}

export default Footer
