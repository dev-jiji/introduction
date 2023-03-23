import React from "react";

const Visual = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="visual scroll">
            <div className="inner">
                {/* 첫인상 남기기(사진/대표단어 ) */}
                {/* <img src={`${path}/images/bg.jpg`} alt="" /> */}
                <div className="visual-txt">
                    <h2>
                        FRONTEND DEVELOPER
                        <br />
                        <b>성장곡선</b> 을 그리는 옥지은 입니다
                    </h2>
                    <h4>
                        느리더라도
                        <span>꾸준히 발전 하며
                        지속적인 학습과 도전</span>을 통해<br/> 새로운 지식과
                        기술을 습득하고,
                        <br />
                        <span>사용자가 필요로 하는</span> <br/>
                        가치 있는 서비스를<br/>
                        제공하는 것을 목표로 노력합니다.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Visual;
