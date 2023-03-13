import React from "react";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Profile = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="profile scroll">
            <div className="inner">
                {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
                <h2 data-aos="fade-up">Profile</h2>
                <div
                    className="contents"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                >
                    <div className="profile-box">
                        <div className="profile-left">
                            <img
                                src={`${path}/images/logo.jpg`}
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: "100%",
                                }}
                                alt="profile"
                            />

                            <div className="profile-txt">
                                <p>이름</p>
                                <p>성장곡선을 그리는 개발자</p>
                            </div>
                        </div>
                        <div className="profile-right">
                            <SiGmail style={{ width: 45, height: 45 }} />
                            <BsGithub style={{ width: 45, height: 45 }} />
                        </div>
                    </div>
                    {/* <div className="profile-box">
                        <img src={`${path}/images/result.png`} alt="profile" />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Profile;
