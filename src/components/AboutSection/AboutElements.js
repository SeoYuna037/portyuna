import styled from 'styled-components'

export const AboutContainer=styled.div`
    width: 100%;
    height: 100%;
    background-color: #F9FCF7;
    padding: 15rem 10rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .cube-img{
        width: 250px;
        height: 250px;
        transform: rotate(-20deg);
        animation: cubemove 4s linear infinite;
    }
    @keyframes cubemove {
        50%{
            transform: rotate(20deg);
        }
    }
    @media screen and (max-width:800px){
        padding: 15rem 5rem;
        
    }
`

export const AboutInfo=styled.div`
    width: 100%;
    height: auto;
`

export const AboutContext=styled.div`
    h1{
        font-size: 3rem;
        padding: 2rem;
        text-align: center;
    }
    .about-context{

        background-color: #abecd6;
        h1{
            text-align: left;
            font-weight: 400;
            font-size: 3rem;
            position: relative;
        }
        h1::after{
            content: '';
            border-bottom: 1px solid #fff;
            position: absolute;
            width: 300px;
            bottom: -10px;
            left: 35px;
        }
        span{
            display: inline-block;
            padding: 3rem 2rem;
            border-radius: 15px;
            color: #046625;
            font-size: 1.3rem;
        }
    }
    .about-exp{
        display: flex;
        justify-content: center;
        margin: 3rem 0;
        align-items: center;
        background-color: #fff;
        .about-exp-content{
            padding: 2rem 0;
            /* border:1px solid #000; */
            width: 500px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            padding: 10px;
            width: 50px;
            height: 50px;
            border: 1px solid #abecd6;
            border-radius: 50%;
        }
        span{
            padding: 0 10px;
        }
    }
    @media screen and (max-width:830px){
        .about-exp .about-exp-content span{
            font-size: 0.8rem;
        }
    }
`


export const AboutSkills=styled.div`
    padding: 7rem 0;
    h1{
        font-size: 3rem;
        padding: 2rem;
        text-align: center;
    }
`

export const AboutSKill=styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    .skill{
        width: 200px;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    .skill-caption{
        background-color: rgba(255,255,255,0.6);
        position: absolute;
        width:200px;
        height:200px;
        z-index: 10;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
        opacity: 0;
        border-radius: 50%;
        font-weight: 400;
        padding: 1rem;
    }
    .skill:hover .skill-caption{
        opacity: 1;
        transform: rotateY(360deg);
    }
    .skill-image{
        border-radius: 50%;
        background-color: #fff;
        width: 200px;
        height: 200px;
        position: relative;
        box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
    }
    .skill img{
        position: absolute;
        width: 150px;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .skill h2{
        padding: 1rem 1.5rem;
        text-align: center;
        font-weight: 400;
    }
    @media screen and (max-width:830px){
        grid-template-columns: repeat(2,1fr);
        
    }
`