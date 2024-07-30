import React from "react";
import { HeroBanner } from "../assets";
import { layout } from "../style";
const ImageModal = () => {
    return (
        <div
            className={`${layout.imageModal} z-[100] absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-700`}
        >
            <img src={HeroBanner} />
        </div>
    );
};

export default ImageModal;
