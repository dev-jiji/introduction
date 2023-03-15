import React from "react";

const Visual = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="visual scroll">
            <div className="inner">
                {/* 첫인상 남기기(사진/대표단어 ) */}
                
                    <div className="visual-txt">
                        <h2>Frontend Developer</h2>
                        <h3>성장곡선을 그리는 프론트엔드 개발자 🎨</h3>
                        <h4>
                            느리더라도 꾸준히 발전하며 지속적인 학습과 도전을
                            통해 새로운 지식과 기술을 습득하고,
                            <br />
                            사용자가 필요로 하는 가치 있는 서비스를 제공하는
                            것을 목표로 노력합니다.
                        </h4>
                    </div>
                    <img src={`${path}/images/profile.jpg`} alt="visual" />
               
            </div>
        </div>
    );
};

export default Visual;
