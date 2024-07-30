import React from "react";
import styles from "../style";
const LoadingSunpense = () => {
    return (
        <div className='w-screen h-screen bg-slate-800 flex flex-col justify-center items-center'>
            <p className='text-white text-5xl font-extrabold text-gradient'>
                PDIFY
            </p>
            <div className='lds-ellipsis text-red-800'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSunpense;
