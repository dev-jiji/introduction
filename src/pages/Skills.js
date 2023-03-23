import React from "react";

const Skills = () => {
    const path = process.env.PUBLIC_URL;

    return (
        <section className="skills scroll">
            <div className="inner">
                {/* 기술적 역량 : 기술적 내용 설명, 자격증, 운전면허 등 */}
                <h2>Skills</h2>
                <div className="contents">
                    <ul className="skills-list">
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-html.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="300"
                                />
                                <div className="skill-overlay">
                                    <h3>HTML 5</h3>
                                    <p>
                                        웹 표준성을 준수하여 시맨틱 마크업을
                                        수행할 수 있습니다.
                                    </p>
                                    <p>HTML로 레이아웃을 잡을 수 있습니다.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-css.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="400"
                                />
                                <div className="skill-overlay">
                                    <h3>CSS 3</h3>
                                    <p>
                                        스타일시트 표준을 준수하여 코드를 작성할
                                        수 있습니다.
                                    </p>
                                    <p> 반응형 웹 디자인을 할 수 있습니다.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-js.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="500"
                                />
                                <div className="skill-overlay">
                                    <h3>JavaScript</h3>
                                    <div>
                                        <p>
                                            웹사이트에 필요한 동적 기능들을 구현할 수 있습니다.
                                        </p>
                                        <p>
                                            ECMAScript의 변화를 꾸준히 살피고
                                            학습합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-react6.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="600"
                                />
                                <div className="skill-overlay">
                                    <h3>React</h3>
                                    <p>컴포넌트 기반 설계를 할 수 있습니다.</p>
                                    <p> 가상DOM과 JSX에 대해 이해합니다.</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-redux2.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="800"
                                />
                                <div className="skill-overlay">
                                    <h3>Redux</h3>
                                    <p> 상태 관리에 대해서 이해합니다.</p>
                                    <p>
                                        action, reducer, middleware 등의 개념을
                                        이해합니다.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-type.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="1000"
                                />
                                <div className="skill-overlay">
                                    <h3>TypeScript</h3>
                                    <p>
                                        변수, 함수에 대한 타입을 선언할 수
                                        있습니다.
                                    </p>
                                    <p>
                                        인터페이스와 제네릭에 대해 이해하고
                                        있습니다.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-git5.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="700"
                                />
                                <div className="skill-overlay">
                                    <h3>GitHub</h3>
                                    <p>
                                        add, commit, pull, push, branch 사용이
                                        가능합니다.
                                    </p>
                                    <p>
                                        GitHub Pages를 이용하여, 정적인
                                        웹사이트를 무료로 호스팅할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-figma6.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="900"
                                />
                                <div className="skill-overlay">
                                    <h3>Figma</h3>
                                    <p>
                                        컴포넌트에 맞는 UI,와이어프레임을 구성할
                                        수 있습니다.
                                    </p>
                                    <p>
                                        팀 협업을 위한 사용 방법을 이해하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skill-item">
                                <img
                                    src={`${path}/images/skill-sass.png`}
                                    alt="skill"
                                    data-aos="fade-up"
                                    data-aos-duration="300"
                                    data-aos-delay="1100"
                                />
                                <div className="skill-overlay">
                                    <h3>SASS</h3>
                                    <p>
                                        중첩 구조와 상속에 대해 이해하고 사용할
                                        수 있습니다.
                                    </p>
                                    <p>
                                        함수와 믹스인에 대해 이해하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
