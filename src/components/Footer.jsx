import styles from "../style";
import { Logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section
        className={`${styles.flexCenter} ${styles.paddingY} pb-2 flex-col mt-8 sm:mt-0`}
    >
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-[1] flex flex-col justify-center mr-10 w-full'>
                <div className='flex justify-center items-end gap-4'>
                    <img
                        src={Logo}
                        alt='pdify'
                        className='w-[52px] xh-[72.14px] object-contain'
                    />
                    <p className='text-white text-[40px] font-bold underline underline-offset-[10px]'>
                        PDIFY
                    </p>
                </div>
                <p
                    className={`${styles.paragraph} mt-4 xmax-w-[312px] text-center px-4`}
                >
                    A new way to make the pdf easy,fast and secure.
                </p>
            </div>

            <div className='flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((footerlink) => (
                    <div
                        key={footerlink.title}
                        className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
                    >
                        <h3 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                            {footerlink.title}
                        </h3>
                        <div className='flex flex-col mt-4'>
                            {footerlink.links.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                        index !== footerlink.links.length - 1
                                            ? "mb-4"
                                            : "mb-0"
                                    }`}
                                    target='_blank'
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
            <p className='font-poppins font-normal text-center text-base leading-[27px] text-white '>
                Copyright Ⓒ 2024 PDIFY. All Rights Reserved.
            </p>

            <div className='flex flex-row gap-4 md:mt-0 mt-6'>
                {socialMedia.map((social, index) => (
                    <div
                        key={index}
                        className='p-4 hover:bg-slate-500 rounded-full'
                    >
                        <img
                            src={social.icon}
                            alt={social.id}
                            key={social.id}
                            className={`w-[24px] xh-[32px] xobject-contain cursor-pointer `}
                            onClick={() => window.open(social.link)}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
