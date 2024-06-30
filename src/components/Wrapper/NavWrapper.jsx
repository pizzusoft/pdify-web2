import React from "react";
import styles from "./../../style";

const Navbar = React.lazy(() => import("./../../components/Navbar"));

const NavWrapper = () => {
    return (
        <div
            className={`${styles.paddingX} ${styles.flexCenter} fixed  w-full bg-slate-800 z-50`}
        >
            <div className={`${styles.boxWidth} `}>
                <Navbar />
            </div>
        </div>
    );
};

export default NavWrapper;
