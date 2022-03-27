import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Nav=styled.nav`
    background: #FFE092;
    height: 80px;
     display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 80;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer=styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const MobileIcon=styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu=styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavItem=styled.li`
    height: 80px;
`

export const NavLinks=styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.8rem;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`