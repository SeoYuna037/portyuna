import React from 'react'
import {AboutContainer,AboutInfo,AboutContext,AboutSkills,AboutSKill} from './AboutElements'

import cssImg from '../../img/css.png';
import htmlImg from '../../img/html.png';
import jsImg from '../../img/js.png';
import jqueryImg from '../../img/jquery.png';
import reactImg from '../../img/react.png';
import Cube from '../../img/cube-dynamic-color.png';
import firebaseImg from '../../img/firebase.png';
import school from '../../img/iconmonstr-school-24.svg'
import certificate from '../../img/iconmonstr-certificate-15.svg'
import trophy from '../../img/iconmonstr-trophy-8.svg'


const AboutSection = () => {
    return (
        <>
            <AboutContainer id='about'>
                <img className='cube-img' src={Cube} alt="" />
                <AboutInfo>
                    {/* <AboutImg>
                        <img src="" alt="" />
                    </AboutImg> */}
                    <AboutContext>
                        <h1>About Me</h1>
                        <div className='about-context'>
                            <h1>전 이런 개발자를 목표로 합니다</h1>
                            <span>
                                저는 '미디어소프트웨어학과'라는 전공으로 다양한 공부를 해왔습니다. 3D 모델링도, 데이터 분석도, 컴퓨터 그래픽스, 게임 개발 등 다양한 분야를 접할 수 있는 기회가 있었습니다. 하지만 그 중에서도 직접 웹사이트를 제작하는 것이 가장 즐거웠습니다. 짧은 시간 배운 수업이 아쉬워 졸업 후에도 다양한 강의를 찾아 들어가며 웹사이트를 만들고 있습니다.<br/>
                                기술을 끊임없이 변합니다. 저 또한 끊임없이 변하는 개발자가 되겠습니다. 시대에 발맞춰가며 공부를 멈추지 않고 계속하며 발전해나가겠습니다.<br/>
                                예전부터 저는 지인들에게 열심히 한다는 말을 자주 들어왔습니다. 어렵다고, 못하겠다고 쉽게 포기하지 않고 해야할 일을 끝까지 붙잡는 집념을 가졌습니다. 모르는 것이 있으면 물어보고, 직접 찾아보고 시도합니다. 그 집념으로 끝없이 공부하겠습니다.
                            </span>
                        </div>
                        <div className="about-exp">
                            <div className="about-exp-content">
                                <img src={school} alt="" />
                                <span>성결대학교 졸업</span>
                            </div>
                            <div className="about-exp-content">
                                <img src={certificate} alt="" />
                                <span>정보처리기사</span>
                            </div>
                            <div className="about-exp-content">
                                <img src={trophy} alt="" />
                                <span>2021 한이음<br/>공모전 입상</span>
                            </div>
                        </div>
                    </AboutContext>
                </AboutInfo>
                <AboutSkills>
                    <h1>About Skills</h1>
                    <AboutSKill>
                        <div className="skill html">
                            <div className="skill-caption">
                                <span>주어진 디자인 레이아웃대로 페이지를 디자인할 수 있습니다.</span>
                            </div>
                            <div className='skill-image'><img src={htmlImg} alt="" /></div>
                            <h2>HTML</h2>
                        </div>
                        <div className="skill css">
                        <div className="skill-caption">
                                <span>페이지 디자인 및 반응형 제작, 간단한 애니메이션, 효과 등을 할 수 있습니다 </span>
                            </div>
                            <div className='skill-image'><img src={cssImg} alt="" /></div>
                            <h2>CSS</h2>
                        </div>
                        <div className="skill javascript">
                            <div className="skill-caption">
                                <span>기초 개념을 이해하고 있고 ES6문법을 사용하기 위해 노력합니다</span>
                            </div>
                            <div className='skill-image'>
                                <img src={jsImg} alt="" />
                            </div>
                            <h2>JavaScript</h2>
                        </div>
                        <div className="skill jquery">
                            <div className="skill-caption">
                                <span>간단한 화면 구성 제어를 할 수 있습니다</span>
                            </div>
                            <div className='skill-image'>
                                <img src={jqueryImg} alt="" />
                            </div>
                            <h2>JQuery</h2>
                        </div>
                        <div className="skill react">
                            <div className="skill-caption">
                                <span>useState, useEffect, 컴포넌트, axios, styled-components, scss 등을 활용한 경험이 있습니다</span>
                            </div>
                            <div className='skill-image'>
                                <img src={reactImg} alt="" />
                            </div>
                            <h2>REACT</h2>
                        </div>
                        <div className="skill firebase">
                            <div className="skill-caption">
                                <span>Database, Storage를 활용한 경험이 있습니다</span>
                            </div>
                            <div className='skill-image'>
                                <img src={firebaseImg} alt="" />
                            </div>
                            <h2>Firebase</h2>
                        </div>
                    </AboutSKill>
                </AboutSkills>
            </AboutContainer>
        </>
    )
}

export default AboutSection
