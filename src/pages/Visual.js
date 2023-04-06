import React from "react";
// FontAwesome
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Visual = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="visual scroll">
            <div className="inner">
                <div className="visual-txt">
                    <h2>
                        안녕하세요,
                        <br />
                        <b>성장곡선</b> 을 그리는
                        <br />
                        프론트엔트 개발자
                        <br />
                        <span>옥지은</span>
                        입니다.
                    </h2>
                </div>
                
                <div className="icon">
                    <a href={`${path}/이력서.pdf`} download>
                    <button style={{position:"absolute",top:"90%",left:"-20px"}}>
                            DownLoad
                            {/* <FontAwesomeIcon icon={faDownload} style={{marginLeft:"12px"}}/> */}
                        </button>
                        <img
                            src={`${path}/images/resume.png`}
                            alt="git"
                            style={{ width: "6%", height: "6%"}}
                        />
                       
                    </a>
                    <a
                        href="https://github.com/dev-jiji"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="git"
                    >
                        <img
                            src={`${path}/images/skill-git5.png`}
                            alt="git"
                            style={{ width: "6%", height: "6%" }}
                        />
                    </a>
                    <a
                        href="https://www.notion.so/b25086090877423e9e5f285b72c5a8c5"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="notion"
                    >
                        <img
                            src={`${path}/images/notion.svg.png`}
                            alt="notion"
                            style={{ width: "6%", height: "6%" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Visual;
