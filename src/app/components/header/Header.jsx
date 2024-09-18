import "./Header.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <header className={`header-search-bar headers  ${isScrolled ? 'scrolled' : ''}`}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        {/* Logo */}
                        <Link className="navbar-brand" to="">
                            <img src={Logo} alt="Logo" className="Logo" />
                        </Link>

                        {/* Toggle Button */}
                        <button
                            className="navbar-toggler shadow-none border-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* SideBar */}
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            {/* SideBar Header */}
                            <div className="offcanvas-header border-bottom pl-2">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <Link className="navbar-brand" to="">
                                        <img src={Logo} alt="Logo" className="Logo" />
                                    </Link>
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close custom-close-button shadow-none"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>

                            {/* SideBar Body */}
                            <div className="offcanvas-body d-flex p-lg-4">
                                {/* Navigation Links */}
                                <ul className="navbar-nav Title-navbar-nav">
                                    {['Demos', 'Blog', 'Shop', 'Elements', 'Features'].map((item, index) => (
                                        <li className="nav-item Titleitem" key={index}>
                                            <Link className="nav-link Titlelink" to="">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="icon-container ">
                                    <Link to="" className=" hoverCi">
                                        <CiSearch />
                                    </Link>
                                    <Link to="" className=" hoverCi">
                                        <CiHeart />
                                    </Link>
                                    <Link to="" className=" hoverCi">
                                        <SlBasket />
                                    </Link>
                                    <Link to="" className=" hoverCi">
                                        <AiOutlineUser />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
