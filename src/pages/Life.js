import React from "react";

const Life = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="life scroll">
            <div className="inner">
                <h2>Life</h2>
                <div className="contents">
                    {/* 나의 대외활동, 취미, 회사 대표가 바라는 인재상 */}
                    <ul className="life-list">
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="400"
                            >
                                <img
                                    src={`${path}/images/dance.gif`}
                                    alt="life"
                                />
                                <span># Dance (girl's hiphop)</span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="500"
                            >
                                <img
                                    src={`${path}/images/life1.jpg`}
                                    alt="life"
                                />
                                <span> # 등산 </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="600"
                            >
                                <img
                                    src={`${path}/images/life2.jpg`}
                                    alt="life"
                                />
                                <span> # 여행 </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="700"
                            >
                                <img
                                    src={`${path}/images/life3.jpg`}
                                    alt="life"
                                />
                                <span> # 꽃놀이 </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="800"
                            >
                                <img
                                    src={`${path}/images/life4.jpg`}
                                    alt="life"
                                />
                                <span> # Cafe 탐방 </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="900"
                            >
                                <img
                                    src={`${path}/images/life5.jpg`}
                                    alt="life"
                                />
                                <span> # Painting </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="1000"
                            >
                                <img
                                    src={`${path}/images/life6.jpg`}
                                    alt="life"
                                />
                                <span> # 전시회 관람 </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="life-cont"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="1100"
                            >
                                <img
                                    src={`${path}/images/drive.gif`}
                                    alt="life"
                                />
                                <span> # Drive </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Life;
