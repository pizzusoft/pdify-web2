import styles from "./style";
import { Routes, Route, Navigate } from "react-router-dom";
import gsap from "gsap";

import React, { Suspense } from "react";
import LoadingSunpense from "./components/LoadingSunpense";

// lazzy loading
const NavWrapper = React.lazy(() => import("./components/Wrapper/NavWrapper"));
const Hero = React.lazy(() => import("./components/Hero"));
const Features = React.lazy(() => import("./components/Features"));
const Download = React.lazy(() => import("./components/Download"));
const PrivacyAndSecurity = React.lazy(() =>
    import("./components/PrivacyAndSecurity")
);
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
    return (
        <div className='dark bg-primary dark:bg-slate-800 text-gray-600 dark:text-white w-full overflow-hidden  select-none'>
            <Suspense fallback={<LoadingSunpense />}>
                <NavWrapper />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <div>
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
                                    </div>
                                </div>
                            </div>
                        }
                    ></Route>
                    <Route
                        path='/privacy'
                        element={<PrivacyAndSecurity />}
                    ></Route>
                    <Route
                        path='*'
                        element={<Navigate to='/' replace />}
                    ></Route>
                </Routes>
                <div
                    className={`bg-primary dark:bg-slate-800 ${styles.flexStart}`}
                >
                    <Footer />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

/*

*/
