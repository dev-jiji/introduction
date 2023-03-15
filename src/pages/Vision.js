import React from "react";

const Vision = () => {
    return (
        <section className="vision scroll">
            <div className="inner">
                {/* 1년 목표, 3년후 목표, 5년후 목표 */}
                <h2>Vision</h2>
                <div className="contetns">
                    <ul className="vision-list">
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="4000"
                                class="vision-content aos-init aos-animate"
                            >
                                <img src="" alt="" />
                                <span class="vision-title">
                                    <strong>1년 후</strong>저는 무엇이 될 것
                                    입니다.
                                </span>
                                <span class="vision-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati ipsum quis
                                    necessitatibus quae quod, dolorum, sunt
                                    deserunt consectetur ipsa quaerat molestiae
                                    expedita harum perspiciatis dolorem quisquam
                                    aliquam id quidem deleniti.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="3000"
                                class="vision-content aos-init aos-animate"
                            >
                                <img src="" alt="" />
                                <span class="vision-title">
                                    <strong>5년 후</strong> 저는 무엇이 될 것
                                    입니다.
                                </span>
                                <span class="vision-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati ipsum quis
                                    necessitatibus quae quod, dolorum, sunt
                                    deserunt consectetur ipsa quaerat molestiae
                                    expedita harum perspiciatis dolorem quisquam
                                    aliquam id quidem deleniti.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                data-aos="flip-left"
                                data-aos-duration="2000"
                                class="vision-content aos-init aos-animate"
                            >
                                <img src="" alt="" />
                                <span class="vision-title">
                                    <strong>10년 후</strong> 저는 무엇이 될 것
                                    입니다.
                                </span>
                                <span class="vision-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati ipsum quis
                                    necessitatibus quae quod, dolorum, sunt
                                    deserunt consectetur ipsa quaerat molestiae
                                    expedita harum perspiciatis dolorem quisquam
                                    aliquam id quidem deleniti.
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
