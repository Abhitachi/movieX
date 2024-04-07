import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem" >Privacy Policy</li>
                    <li className="menuItem" >About Us</li>
                    {/* <li className="menuItem" onClick={() => navigate("/blog")}>Blog</li> */}
                    {/* <li className="menuItem" onClick={() => navigate("/faq")}>FAQ</li> */}

                </ul>
                <div className="infoText">
                </div>
                <div className="socialIcons">
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://github.com/Abhitachi"}
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://www.linkedin.com/in/abhishek-shettar-46342315b/"}
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://twitter.com/abhishekshetter"}
                    >
                        <FaTwitter />
                    </Link>
                </div>
                <div className="menuItems" style={{ marginTop: "20px" }}>
                    <span className="menuItem" onClick={() => navigate("/")}>
                        &copy;{new Date().getFullYear()} Abhishek Shettar
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
