import styled from 'styled-components'

export const HeroContainer=styled.div`
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    padding: 0 30px;
    height: auto;
    position: relative;
    z-index: 1;
    .img-content{
        width: 100%;
        height: 100%;
    }
    .img-content{
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .computer-img{
        position: absolute;
        max-width: 60%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .notifyHeart-img{
        max-width: 15%;
        height: auto;
        position: absolute;
        left: 10%;
        top: 5%;
        transform: rotate(-20deg);
        animation: move-img 3s 0.1s linear infinite;
    }
    .Folder-img{
        max-width: 15%;
        height: auto;
        position: absolute;
        right: 15%;
        top: 20%;
        transform: rotate(35deg);
        animation: move-img 3s 0.3s linear infinite;
    }
    .Mobile-img{
        max-width: 15%;
        height: auto;
        position: absolute;
        left: 33%;
        bottom: 16%;
        animation: move-img 3s 0.5s linear infinite;
    }
    @keyframes move-img{
        50%{
            transform: translate(0,15px) rotate(0);
        }
    }
    .text-content{
        text-align: center;
        width: 40%;
        height: auto;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        color: #333;
    }
    .text-content h1{
        font-size: 3rem;
    }
    .text-content h1::after{
        content: '|';
        font-weight: 500;
        animation: blink 1.3s step-end infinite;
        padding: 3px;
    }
    @keyframes blink{
        50%{
            opacity: 0;
        }
    }
    @media screen and (max-width:1264px){
        .text-content{
            top: 34%;
        }
        .text-content h1{
            font-size: 2.1rem;
        }
        .text-content span{
            font-size: 0.9rem;
        }
        .notifyHeart-img{
            left: 15%;
            top: 8%;
        }
        .Folder-img{
            right: 15%;
            top: 20%;
        }
        .Mobile-img{
            left: 33%;
            bottom: 20%;
        }
    }
    @media screen and (max-width:830px){
        padding: 5rem 0;
        .text-content{
            top: 36%;
        }
        .text-content h1{
            font-size: 1.8rem;
        }
        .text-content span{
            font-size: 0.7rem;
        }
        .computer-img{
            max-width: 90%;
        }
        .notifyHeart-img{
            max-width: 24%;
            left: 5%;
            top: 10%;
        }
        .Folder-img{
            max-width: 24%;
            right: 6%;
            top: 24%;
        }
        .Mobile-img{
            max-width: 24%;
            left: 28%;
            bottom: 23%;
        }
    }
    @media screen and (max-width:700px){
        .text-content{
            top: 5%;
            width: 80%;
        }
        .text-content h1{
            font-size: 2.3rem;
        }
        .text-content span{
            font-size: 0.9rem;
        }
        .computer-img{
            max-width: 100%;
        }
        .notifyHeart-img{
            top: 20%;
        }
        .Folder-img{
            right: 8%;
            top: 30%;
        }
        .Mobile-img{
            left: 28%;
            bottom: 28%;
        }
    }
`
