import React from "react";
import { privacyAndSecurity } from "../constants";
import styles from "../style";

const PrivacyAndSecurity = () => {
    return (
        <div
            className={`mt-[70px] dark bg-primary dark:bg-slate-800 text-gray-600 dark:text-white h-full overflow-hidden select-none ${styles.flexStart}`}
        >
            <div
                className={`max-w-[1200px] flex flex-col gap-4 mt-10 px-6 sm:px-12`}
            >
                <h1
                    className={`font-poppins font-semibold text-[25px] sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center underline underline-offset-8 `}
                >
                    Privacy and Security
                </h1>
                <p
                    className={`${styles.paragraph} text-base mt-5 text-justify`}
                >
                    Thank you for using the PDIFY Extension. Your privacy and
                    security are important to us. This Privacy and Security
                    Policy outlines how we handle your information and ensure
                    the security of our Extension.
                </p>
                {privacyAndSecurity.map((privacy, id) => (
                    <div key={id} className='flex flex-col gap-4'>
                        {/* header */}
                        <h1
                            className={`font-poppins font-semibold xs:text-[30px] text-[25x] text-white xs:leading-[50px] leading-[46.8px] w-full`}
                        >
                            {id + 1}
                            {". "}
                            {privacy.heading} :
                        </h1>
                        {/* sub header */}
                        <h3
                            className={`${styles.paragraph}font-lg font-normal  text-justify`}
                        >
                            {privacy.subHeading}
                        </h3>
                        {/* points */}
                        {privacy.points.length > 0 && (
                            <div className='flex flex-col gap-8'>
                                {privacy.points.map((point, idx) => (
                                    <div key={idx} className=''>
                                        <h1
                                            className={`text-2xl font-medium mb-4`}
                                        >
                                            {point.title}
                                        </h1>
                                        <p className={`${styles.paragraph}`}>
                                            {point.des}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className='h-[2px] w-full bg-slate-500 mt-14'></div>
            </div>
        </div>
    );
};

export default PrivacyAndSecurity;
