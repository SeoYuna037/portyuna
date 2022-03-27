import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import { Nav, NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks } from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
          <NavbarContainer>
              <MobileIcon onClick={toggle}>
                  <FontAwesomeIcon icon={faAlignJustify}/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to='main'>Main</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='about'>About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='project'>Project</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='contact'>Contact</NavLinks>
                  </NavItem>
              </NavMenu>
          </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
