import styled from 'styled-components'
import SundayImg from '../../img/sundaycoffe-img1.png'
import eatImg from '../../img/must-eat.png'
import DiaryImg from '../../img/todayDiary.png'
import imageGetImg from '../../img/ImageGet.png'
import projectImg from '../../img/portfolio2.png'


export const ProjectContainer=styled.div`
    padding: 15rem 10rem;
    background-color: #F9FCF7;
    position: relative;
    .title{
        font-size: 3rem;
        padding: 2rem;
        text-align: center;
    }
    .sun-img{
        position: absolute;
        left: 15%;
        top: -5%;
        width: 20%;
        height: auto;
        /* transform: translateX(-50%) rotate(0deg); */
        animation :sunmove 10s linear infinite;
    }
    @keyframes sunmove {
        100%{
            transform: rotate(360deg);
        }
    }
    @media screen and (max-width:700px){
        padding: 15rem 3rem;
        .sun-img{
            width: 50%;
        }
    }
`

export const ProjectInfo=styled.div`
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    h2{
        text-align: center;
        padding: 2rem 0;
    }
    .project-img{
        height: 400px;
        /* width: 700px; */
        border-radius: 15px;
        box-shadow: 0 15px 45px -10px rgba(34, 34, 34, 0.24);
        background-image: url(${SundayImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        transition: 3s;
        
    }
    .pro-img2{
        background-image: url(${DiaryImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        transition: 3s;
    }
    .pro-img3{
        background-image: url(${projectImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        transition: 3s;
    }
    .pro-img4{
        background-image: url(${eatImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        transition: 3s;
    }
    .pro-img5{
        background-image: url(${imageGetImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        transition: 3s;
    }
    .project-img:hover{
        background-position: bottom;
    }
    .project-info{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .project-desc{
        padding: 0 1rem;
        font-size: 1.1rem;
    }
    @media screen and (max-width:1120px){
        .project-info{
            grid-template-columns: repeat(1,1fr);
        }
    }
`

export const ProjectSKills=styled.ul`
    margin: 2rem 0;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(3,1fr);

`

export const ProjectSKill=styled.li`
    background-color: #abecd6;
    list-style: none;
    border-radius: 10px;
    padding: 10px 15px;
    margin: 10px;
    color: #fff;
    font-size: 0.9rem;
`

export const ProjectBtn=styled.a`
    padding: 1rem 2rem;
    border:1px solid #abecd6;
    border-radius: 20px;
    background-color: #fff;
    margin-right: 10px;
    box-shadow: 0 15px 45px -10px rgba(34, 34, 34, 0.24);
    transition: 0.5s;
    :hover{
        background-color: #abecd6;
        color:#fff;
    }
`

export const ProjectGitBtn=styled.a`
    padding: 1rem 2rem;
    border:1px solid #abecd6;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 15px 45px -10px rgba(34, 34, 34, 0.24);
    transition: 0.5s;
    :hover{
        background-color: #abecd6;
        color:#fff;
    }
`