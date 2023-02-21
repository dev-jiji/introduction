import React from "react";

const Profile = () => {
    return (
        <section className="profile scroll">
            <div className="inner">
                {/* 자기소개(인사팀) : 약력, 학력,업무,교육,성격,MBTI */}
                <h2>Profile</h2>
                <div className="contents">
                    <div className="profile-box">
                        <img src="/images/profile2.png" alt="profile" />
                    </div>
                    <div className="profile-box">
                        <img src="/images/profile1.png" alt="profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
