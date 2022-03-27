import styled from 'styled-components'

export const FooterContainer=styled.div`
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    padding: 10rem;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
`

export const FooterInfo=styled.div`
    text-align: center;
    h1{
        color: #333;
        font-size: 3rem;
    }
    span{
        display: inline-block;
        padding: 1rem 0;
        font-size: 1.4rem;
    }
    .mail-icon{
        font-size:1.5rem;
    }
    a{
        display: inline-block;
        font-size: 2rem;
        color: #333;
        background-color: #fff;
        width: 50px;
        height: 50px;
        position: relative;
        border-radius: 50%;
        transition: 0.3s;

    }
    .git-icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: 0.3s;
    }
    .git-link{
        position: relative;
    }
    .git-link a:hover .git-icon{
        opacity: 0.8;
    }
`