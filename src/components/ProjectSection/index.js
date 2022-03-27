import React from 'react'
import { FaHtml5,FaCss3Alt,FaGithub,FaLink,FaReact,FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase,SiStyledcomponents,SiJquery } from 'react-icons/si';

import {ProjectContainer,ProjectInfo,ProjectSKill,ProjectSKills,ProjectBtn,ProjectGitBtn} from './ProjectElements'
import SunImg from '../../img/sun-dynamic-color.png'



const ProjectSection = () => {
    return (
        <>
            <ProjectContainer id='project'>
                <img src={SunImg} alt="" className='sun-img' />
                <h1 className='title'>Project</h1>
                <ProjectInfo>
                    <h2>Sunday Coffee(가상커피샵 사이트)</h2>
                    <div className='project-info'>
                        <div className="project-img">
                        </div>
                        <div className="project-desc">
                            <span>
                                (1인 프로젝트) html, css의 기초를 다시 다지기 위한 가상 커피샵 사이트를 제작하였습니다<br/>
                                -자바스크립트를 활용한 팝업창(하루동안 안 보기)<br/>
                                -간단한 슬라이드 애니메이션<br/>
                                -22.03.01 ~ 22.03.11
                            </span>
                            <ProjectSKills>
                                <ProjectSKill>
                                  <FaHtml5/>HTML
                                </ProjectSKill>
                                <ProjectSKill>
                                    <FaCss3Alt/>CSS
                                </ProjectSKill>
                                <ProjectSKill>
                                    <IoLogoJavascript/>JavaScript
                                </ProjectSKill>
                            </ProjectSKills>
                            <ProjectBtn>
                                <FaLink/><a href="https://seoyuna037.github.io/Sunday_coffee/#0">Link</a>
                            </ProjectBtn>
                            <ProjectGitBtn>
                                <FaGithub/><a href="https://github.com/SeoYuna037/Sunday_coffee">Github</a>
                            </ProjectGitBtn>
                        </div>
                    </div>
                </ProjectInfo>
                <ProjectInfo>
                    <h2>Today Diary</h2>
                    <div className='project-info'>
                        <div className="project-img pro-img2">
                        </div>
                        <div className="project-desc">
                            <span>
                                (1인 프로젝트) 사진과 내용이 담긴 일기를 저장하고 Todo List 기능을 담았습니다.<br/>
                                -파이어베이스 RealTime Database를 이용한 로그인, 회원가입 기능<br/>
                                -파이어베이스 Database, Storage를 이용해 일기 데이터 저장<br/>
                                -로그인한 사용자별로 일기를 보여줌<br/>
                                -test ID : test / test password : testtest
                                -22.03.12 ~ 22.03.22
                            </span>
                            <ProjectSKills>
                                <ProjectSKill>
                                  <FaHtml5/>HTML
                                </ProjectSKill>
                                <ProjectSKill>
                                    <FaCss3Alt/>CSS
                                </ProjectSKill>
                                <ProjectSKill>
                                    <IoLogoJavascript/>JavaScript
                                </ProjectSKill>
                                <ProjectSKill>
                                  <SiJquery/>JQuery
                                </ProjectSKill>
                                <ProjectSKill>
                                    <SiFirebase/>Firebase
                                </ProjectSKill>
                            </ProjectSKills>
                            <ProjectBtn>
                                <FaLink/><a href="https://firediay.web.app">Link</a>
                            </ProjectBtn>
                            <ProjectGitBtn>
                                <FaGithub/><a href="https://github.com/SeoYuna037/TodayDiary">Github</a>
                            </ProjectGitBtn>
                        </div>
                    </div>
                </ProjectInfo>
                <ProjectInfo>
                    <h2>Portfolio</h2>
                    <div className='project-info'>
                        <div className="project-img pro-img3">
                            <img src="" alt="" />
                        </div>
                        <div className="project-desc">
                            <span>
                                (1인 프로젝트) React를 활용한 포트폴리오. styled-components를 이용해 프로젝트 구성<br/>
                                -useState를 활용하여 사이드 바 제작<br/>
                                -간단한 애니메이션 효과<br/>
                                -22.03.22 ~ 진행 중
                            </span>
                            <ProjectSKills>
                                <ProjectSKill>
                                  <FaReact/>React
                                </ProjectSKill>
                                <ProjectSKill>
                                  <SiStyledcomponents/>Styled Components
                                </ProjectSKill>
                                <ProjectSKill>
                                  <FaHtml5/>HTML
                                </ProjectSKill>
                                <ProjectSKill>
                                    <FaCss3Alt/>CSS
                                </ProjectSKill>
                                <ProjectSKill>
                                    <IoLogoJavascript/>JavaScript
                                </ProjectSKill>
                            </ProjectSKills>
                            <ProjectBtn>
                                <FaLink/>Link
                            </ProjectBtn>
                            <ProjectGitBtn>
                                <FaGithub/><a href="https://github.com/SeoYuna037/react">Github</a>
                            </ProjectGitBtn>
                        </div>
                    </div>
                </ProjectInfo>
                <ProjectInfo>
                    <h2>Let's Drink</h2>
                    <div className='project-info'>
                        <div className="project-img pro-img4">
                        </div>
                        <div className="project-desc">
                            <span>
                                (1인 프로젝트) 검색을 통하여 원하는 칵테일의 내용을 확인할 수 있는 사이트입니다.<br/>
                                -ThcCocktailDB API 활용<br/>
                                -useState, useContext, useEffect 사용<br/>
                                -카테고리별 구분 개발 중<br/>
                                -22.03.25 ~ 진행 중
                            </span>
                            <ProjectSKills>
                                <ProjectSKill>
                                  <FaReact/>React
                                </ProjectSKill>
                                <ProjectSKill>
                                  <FaSass/>scss
                                </ProjectSKill>
                                <ProjectSKill>
                                  <FaHtml5/>HTML
                                </ProjectSKill>
                                <ProjectSKill>
                                    <FaCss3Alt/>CSS
                                </ProjectSKill>
                                <ProjectSKill>
                                    <IoLogoJavascript/>JavaScript
                                </ProjectSKill>
                            </ProjectSKills>
                            <ProjectBtn>
                                <FaLink/><a href="https://seoyuna037.github.io/cocktail/">Link</a>
                            </ProjectBtn>
                            <ProjectGitBtn>
                                <FaGithub/><a href="https://github.com/SeoYuna037/cocktail">Github</a>
                            </ProjectGitBtn>
                        </div>
                    </div>
                </ProjectInfo>
                <ProjectInfo>
                    <h2>Image Search</h2>
                    <div className='project-info'>
                        <div className="project-img pro-img5">
                        </div>
                        <div className="project-desc">
                            <span>
                                (1인 프로젝트) 검색을 통하여 이미지를 찾는 사이트입니다.<br/>
                                -Unsplash API 활용<br/>
                                -useState, axios 사용<br/>
                                -더 많은 사진을 보여줄 수 있는 기능 개발 중<br/>
                                -22.03.26 ~ 진행 중
                            </span>
                            <ProjectSKills>
                                <ProjectSKill>
                                  <FaReact/>React
                                </ProjectSKill>
                                <ProjectSKill>
                                    <SiStyledcomponents/>Styled Components
                                </ProjectSKill>
                                <ProjectSKill>
                                  <FaHtml5/>HTML
                                </ProjectSKill>
                                <ProjectSKill>
                                    <FaCss3Alt/>CSS
                                </ProjectSKill>
                                <ProjectSKill>
                                    <IoLogoJavascript/>JavaScript
                                </ProjectSKill>
                            </ProjectSKills>
                            <ProjectBtn>
                                <FaLink/><a href="https://seoyuna037.github.io/imageget/">Link</a>
                            </ProjectBtn>
                            <ProjectGitBtn>
                                <FaGithub/><a href="https://github.com/SeoYuna037/imageget">Github</a>
                            </ProjectGitBtn>
                        </div>
                    </div>
                </ProjectInfo>
            </ProjectContainer>
        </>
    )
}

export default ProjectSection;
