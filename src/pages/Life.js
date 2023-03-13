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
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="300"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="400"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="500"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="600"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="700"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="800"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="900"
                                alt="life"
                            />
                        </li>
                        <li>
                            <img
                                src={`${path}/images/life.png`}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="1000"
                                alt="life"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Life;
