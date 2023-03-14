import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
    const path = process.env.PUBLIC_URL;
    const style = {
        width: 100,
        height: 100,
        background: "green",
        position: "absolute",
        left: 100,
        top: 100,
    };
    const box = useRef(null);
    return (
        <div className="visual scroll">
            <div className="inner">
                {/* 첫인상 남기기(사진/대표단어 ) */}

                <div className="visual-txt">
                    <h2>Frontend Developer</h2>
                    <h3>성장곡선을 그리는 프론트엔드 개발자 </h3>
                    <h4>
                        느리더라도 꾸준히 발전하며 지속적인 학습과 도전을 통해
                        새로운 지식과 기술을 습득하고,
                        <br />
                        사용자가 필요로 하는 가치 있는 서비스를 제공하는 것을
                        목표로 노력합니다.
                    </h4>
                </div>

                <img src={`${path}/images/visual.png`} alt="visual" />

                {/* <img src="/images/visual.png" alt="visual" /> */}
                {/* Anime 샘플 */}
                <div
                    ref={box}
                    className="box"
                    style={style}
                    onClick={(e) => {
                        // 에니메이션 대상,옵션
                        // new Anime(e.target, {
                        //     prop: "left",
                        //     value: 400,
                        //     duration: 500,
                        // });
                        //    에니메이션 대상,옵션
                        // new Anime(window, {
                        //     prop: "scroll",
                        //     value: 2000,
                        //     duration: 1500,
                        // });
                        new Anime(box.current, {
                            prop: "left",
                            value: 400,
                            duration: 500,
                            callback: () => {
                                new Anime(box.current, {
                                    prop: "top",
                                    value: 400,
                                    duration: 500,
                                    callback: () => {
                                        alert("완료");
                                    },
                                });
                            },
                        });
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Visual;
