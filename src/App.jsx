import styles from "./style";
import React, { Suspense } from "react";

// lazzy loading
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const Features = React.lazy(() => import("./components/Features"));
const Download = React.lazy(() => import("./components/Download"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
    return (
        <div className='dark bg-primary dark:bg-slate-800 text-gray-600 dark:text-white w-full overflow-hidden  select-none'>
            <Suspense
                fallback={
                    <div className='w-screen h-screen bg-slate-800 flex flex-col justify-center items-center'>
                        <p className='text-red-800 text-4xl font-bold '>
                            PDIFY
                        </p>
                        <div className='lds-ellipsis text-red-800'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                }
            >
                <div
                    className={`${styles.paddingX} ${styles.flexCenter} fixed  w-full bg-slate-800 z-50`}
                >
                    <div className={`${styles.boxWidth} `}>
                        <Navbar />
                    </div>
                </div>

                <div
                    className={`bg-primary dark:bg-slate-800 ${styles.flexStart}`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>

                <div
                    className={`bg-primary dark:bg-slate-800 ${styles.paddingX} ${styles.flexCenter}`}
                >
                    <div className={`${styles.boxWidth}`}>
                        {/* status of extension */}
                        <Features />
                        <Download />
                        <Footer />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;

/*

*/
