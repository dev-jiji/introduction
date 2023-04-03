import React from "react";

const Vision = () => {
    return (
        <section className="vision scroll">
            <div className="inner">
                {/* 1년 목표, 3년후 목표, 5년후 목표 */}
                <h2>Vision</h2>
                <div className="contents">
                    <ul className="vision-list">
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="500"
                                className="vision-content aos-init aos-animate"
                            >
                                <img src="../images/vision1.png" alt="새싹" />
                                <span className="vision-title">
                                    <strong>1년 후, </strong> 기본에 충실한
                                    개발자
                                </span>
                                <span className="vision-text">
                                    1년 동안 걸어온 길을 돌아보며
                                    <br />
                                    기본적인 FE 개발에 필요한 지식을 다지며 제가
                                    가진 기술 스택을 꾸준히 발전시키고 기본을
                                    놓치지 않도록 꾸준히 학습하고자 합니다.
                                    <br />
                                    코드의 가독성과 유지보수성을 고려한 개발
                                    방법론을 습득하고자 합니다.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="1500"
                                className="vision-content aos-init aos-animate"
                            >
                                <img src="../images/vision2.png" alt="꽃" />
                                <span className="vision-title">
                                    <strong>3년 후,</strong> 성장하는 개발자
                                </span>
                                <span className="vision-text">
                                    새로운 기술과 트렌드에 대한 지식을 확장하고,
                                    이를 실무에 적용하는 것을 목표로 하고
                                    있습니다.
                                    <br />
                                    또한, 협업 능력을 더욱 향상시켜 함께 일하는
                                    동료들과의 소통과 협력을 최적화하며,
                                    도태되지않고 꾸준히 성장하는 개발자가 되고자
                                    합니다.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="3000"
                                className="vision-content aos-init aos-animate"
                            >
                                <img src="../images/vision3.png" alt="나무" />
                                <span className="vision-title">
                                    <strong>5년 후,</strong> 경험이 풍부한
                                    개발자
                                </span>
                                <span className="vision-text">
                                    저의 강점인 끈기와 책임감으로 포기하지 않고
                                    <br />
                                    쌓아온 경험을 바탕으로, 기술적인 문제를
                                    해결하는 데에 능숙해지고
                                    <br />
                                    효율적이고 안정적인 웹 서비스를 구현할 수
                                    있는 개발자가 되고자 합니다.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Vision;
