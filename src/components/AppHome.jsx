import React from "react";

const AppHome = () => {
    return (
        <div>
            <div className={`bg-primary dark:bg-slate-800 ${styles.flexStart}`}>
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
        </div>
    );
};

export default AppHome;
