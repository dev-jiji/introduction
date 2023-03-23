import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
    const path = process.env.PUBLIC_URL;

    return (
        <section className="portfolio scroll">
            <div className="inner">
                {/* 개발 담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 -> 프론트)) */}
                <h2 data-aos="fade-up">Portfolio</h2>
                <div className="contents">
                    {/* 팀 프로젝트 */}
                    <div className="portfolio-box">
                        <h3>Team Project</h3>

                        <div className="portfolio-team">
                            <div className="portfolio-left">
                                <a
                                    href="https://youtu.be/hzXEDjayTVc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <iframe
                                        width="700"
                                        height="400"
                                        src="https://www.youtube.com/embed/hzXEDjayTVc"
                                        title="배달대"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                        style={{
                                            borderRadius: "50px 0 50px 0",
                                            boxShadow: "2px 2px 20px #141414",
                                        }}
                                    ></iframe>
                                </a>
                                이미지 클릭시 프로젝트 영상이 재생됩니다.
                                <img
                                    src={`${path}/images/click.png`}
                                    alt=""
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginLeft: "30px",
                                        marginBottom: "5px",
                                    }}
                                />
                            </div>
                            <div className="portfolio-right">
                                <ul className="portfolio-team-list">
                                    <li className="object">배달대 </li>
                                    <li className="date">
                                        23.01.09 ~ 23.02.05
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                marginRight: "20px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {" "}
                                            주제
                                        </span>{" "}
                                        음식 배달 / 주문 서비스
                                    </li>
                                    <li style={{ marginBottom: "20px" }}>
                                        {" "}
                                        <span
                                            style={{
                                                marginRight: "20px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            목표
                                        </span>{" "}
                                        '배달대는 배달비 0원'
                                    </li>
                                    <li className="contribute">
                                        <div
                                            className="contribute-left"
                                            style={{
                                                fontWeight: 700,
                                            }}
                                        >
                                            개인 <br />
                                            기여도
                                        </div>
                                        <div className="contribute-right">
                                            <p>
                                                개인정보(로그인, 회원가입,
                                                마이페이지,정보 수정)
                                            </p>
                                            <p>리뷰등록, 아낀 배달비</p>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: "20px" }}>
                                        React.js / JavaScript / Redux Toolkit
                                        Axios / stylecomponent
                                    </li>

                                    <li
                                        style={{
                                            marginRight: "50px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        GitHub
                                        <a
                                            href="https://github.com/dev-jiji/MainProject-1.git"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            alt="portfolio"
                                            style={{
                                                marginLeft: "50px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            작업물 보기
                                        </a>
                                        <img
                                            src={`${path}/images/click.png`}
                                            alt=""
                                            style={{
                                                width: 30,
                                                height: 30,
                                                marginLeft: "10px",
                                                marginBottom: "5px",
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="portfolio-team">
                            <div className="portfolio-left">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <iframe
                                        width="700"
                                        height="400"
                                        src="https://www.youtube.com/embed/grLY0o287xQ"
                                        title="허니머니"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>
                                </a>
                                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
                            </div>
                            <div className="portfolio-right">
                                <ul className="portfolio-team-list">
                                    <li>프로젝트명 : 허니머니(커플 가계부)</li>
                                    <li>
                                        프로젝트 기간 : 2023.02.09 ~ 2023.03.02{" "}
                                    </li>
                                    <li>프로젝트 주제 : 가계부 서비스 </li>
                                    <li>
                                        프로젝트 목적 : '서로의 믿음과 신뢰를
                                        위한 커플들의 통장 관리'
                                    </li>
                                    <li>
                                        프로젝트 기여도 : 공지사항 관련(추가
                                        등록, 수정, 삭제), 차트 통계
                                    </li>
                                    <li>
                                        프로젝트 도구 : React.js,JavaScript,
                                        Redux Toolkit, Axios,
                                        React-Hook-Form(Yup), 리액트 쿼리, NIVO
                                        Chart, React Calendar, Swiper, Tailwind
                                        CSS
                                    </li>
                                    <li>프로젝트 Git : </li>
                                </ul>
                            </div>
                        </div>

                        <div className="portfolio-team">
                            <div className="portfolio-left">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/sample.png`}
                                        alt="project"
                                    />
                                </a>
                                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
                            </div>
                            <div className="portfolio-right">
                                <ul className="portfolio-team-list">
                                    <li>프로젝트명 : skycastle</li>
                                    <li>프로젝트 기간 : 2023.03.06 ~</li>
                                    <li>프로젝트 주제 : 성적 관리 서비스 </li>
                                    <li>
                                        프로젝트 목적 : 고3 학생들의 영어 성적
                                        향상을 위한 관리
                                    </li>
                                    <li>
                                        프로젝트 기여도 : 게시판 (리스트, 등록,
                                        디테일, 리뷰)
                                    </li>
                                    <li>
                                        프로젝트 도구 :
                                        React.js,JavaScript,TypeScript, Redux
                                        Toolkit, Axios, 리액트 쿼리, NIVO,
                                        TailwindCSS, stylecomponent, Ant Degign
                                    </li>
                                    <li>프로젝트 Git : </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 개인 스터디 프로젝트 */}
                    <div className="portfolio-box">
                        <h3>Study Project</h3>
                        {/* Swiper 배치 */}
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={0}
                            pagination={true}
                            navigation={true}
                            breakpoints={{
                                860: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                960: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1180: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="portfolio-slide"
                        >
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/stx.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/hansalim2.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/binggrea.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/hyundai.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/todo.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="portfolio"
                                >
                                    <img
                                        src={`${path}/images/sample.png`}
                                        alt="portfolio"
                                    />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
