import React from "react";

const LoadingSunpense = () => {
    return (
        <div className='w-screen h-screen bg-slate-800 flex flex-col justify-center items-center'>
            <p className='text-red-800 text-4xl font-bold '>PDIFY</p>
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
