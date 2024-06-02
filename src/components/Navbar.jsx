import { useState } from "react";

import { Logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-4 justify-between items-center navbar'>
            <div className='flex justify-center items-center gap-4'>
                <img src={Logo} alt='hoobank' className='xw-[124px] h-[32px]' />
                <span className='text-slate-700 dark:text-dimWhite text-4xl font-extrabold'>
                    PDIFY
                </span>
            </div>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${
                            active === nav.title
                                ? "text-white"
                                : "text-slate-600 dark:text-white"
                        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 dark:bg-slate-900 bg-slate-300 xbg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title
                                        ? "text-white"
                                        : "text-dimWhite"
                                } ${
                                    index === navLinks.length - 1
                                        ? "mb-0"
                                        : "mb-4"
                                }`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        {/* <li
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mt-2`}
                            onClick={() => setIsDark((prev) => !prev)}
                            title={`${isDark ? `Dark` : `Light`}`}
                        >
                            {isDark ? (
                                <div className='flex justify-between items-center gap-2'>
                                    <NightIcon cssClass={"fill-white"} />{" "}
                                    {`Dark`}
                                </div>
                            ) : (
                                <div className='flex justify-start items-center gap-2 text-yellow-500'>
                                    <LightIcon cssClass={"fill-yellow-500"} />
                                    {`Light`}
                                </div>
                            )}
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
