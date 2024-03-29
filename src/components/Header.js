import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Anime from "../assets/Anime";
import { useEffect, useRef } from "react";

const Header = ({ setPage, setOpen, open, setHeaderBg, headerActive }) => {
    const header = useRef(null);
    const goTop = () => {
        new Anime(window, {
            prop: "scroll",
            value: -80,
            duration: 500,
        });
        setPage(0);
    };
    useEffect(() => {
        setHeaderBg(header.current);
    }, []);

    const path = process.env.PUBLIC_URL;

    return (
        <header
            className="header"
            ref={header}
            style={{
                backgroundColor: headerActive ? "#fff" : "#fbf7f4",
                borderBottom: headerActive ? "#ddd" : "#fbf7f4",
            }}
        >
            <div className="inner">
                <nav className="nav">
                    <span className="header-logo" onClick={() => goTop()}>
                        <img
                            src={`${path}/images/logo.jpg`}
                            alt="logo"
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 100,
                                marginRight: "8px",
                            }}
                        />
                        Dev-JEO
                    </span>
                    <ul className="gnb">
                        <li onClick={() => setPage(0)}>
                            <span>Home</span>
                        </li>
                        <li onClick={() => setPage(1)}>
                            <span>Profile</span>
                        </li>
                        <li onClick={() => setPage(2)}>
                            <span>Skill</span>
                        </li>
                        <li onClick={() => setPage(3)}>
                            <span>Portfolio</span>
                        </li>
                        <li onClick={() => setPage(4)}>
                            <span>Life</span>
                        </li>
                        <li onClick={() => setPage(5)}>
                            <span>Vision</span>
                        </li>
                    </ul>
                    <span
                        className="mobile-bt"
                        onClick={() => {
                            open ? setOpen(false) : setOpen(true);
                        }}
                    >
                        {open ? (
                            <FontAwesomeIcon icon={faXmark} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;
