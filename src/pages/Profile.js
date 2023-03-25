import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

const Profile = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="profile scroll">
            <div className="inner">
                <h2 data-aos="fade-up">Profile</h2>
                <div className="contents">
                    <div className="profile-box">
                        <div
                            className="profile-left"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >
                            <div className="left-box">
                                <img
                                    src={`${path}/images/profile.jpg`}
                                    style={{
                                        width: 200,
                                        height: 200,
                                        borderRadius: "100%",
                                        objectFit: "cover",
                                    }}
                                    alt="profile"
                                />
                                <p>
                                    <span>옥지은</span>
                                </p>
                                <p>1994.10.09</p>
                                <div className="purpose">
                                    <BsFillPencilFill
                                        style={{ marginRight: "8px" }}
                                    />
                                    성장곡선을 그리는 개발자!
                                </div>
                            </div>
                        </div>

                        <div
                            className="profile-middle"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="400"
                            data-aos-offset="0"
                        >
                            <div className="middle-box">
                                <div className="txt">
                                    <h4>INTRO</h4>
                                    <p>
                                        안녕하세요, 항상 꾸준한 사람{" "}
                                        <b>옥지은</b>
                                        입니다.
                                        <br />
                                        배움을 즐기면서 꾸준하게 학습하며 유연한
                                        성장곡선을 이루고 싶습니다.
                                    </p>
                                </div>
                                <div className="txt">
                                    <h4>ACTIBITY</h4>
                                    <p>
                                        2022-10-28 - 2023-04-13 <br />
                                        기업 요구를 반영한 프로젝트 중심
                                        프론트엔드 React(리액트) 개발자 양성
                                    </p>
                                    <p>
                                        2022-12-19 - 2023-01-13
                                        <br />
                                        실무능력까지 길러주는 인터랙티브 웹
                                        디자인 기초 입문
                                    </p>
                                </div>
                                <div className="txt">
                                    <h4>LICENSE </h4>
                                    <p> 🚘 1종 보통면허</p>
                                    <p> 📜 신HSK 4급</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="profile-right"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0"
                        >
                            <div className="right-box">
                                <div className="txt">
                                    <h4>MBTI </h4>
                                    <img
                                        src={`${path}/images/mbti.jpg`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
