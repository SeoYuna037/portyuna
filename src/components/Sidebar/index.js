import React from 'react'
import { SidebarContainer,Icon, SidebarWrapper,SidebarMenu,SidebarLink } from './SidebarElements'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <FontAwesomeIcon icon={faXmark}/>
            </Icon>
            <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="main" onClick={toggle}>Main</SidebarLink>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='project' onClick={toggle}>Project</SidebarLink>
                        <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                    </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
