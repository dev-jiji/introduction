import React from "react";

const Skills = () => {
    return (
        <section className="skills scroll">
            <div className="inner">
                {/* 기술적 역량 : 기술적 내용 설명, 자격증, 운전면허 등 */}
                <h2>Skills</h2>
                <div className="contents">
                    <ul className="skills-list">
                        <li>
                            <img src="/images/skill-html.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-css.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-js.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-react.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-git.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-redux.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-figma.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-type.png" alt="skill" />
                        </li>
                        <li>
                            <img src="/images/skill-sass.png" alt="skill" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
