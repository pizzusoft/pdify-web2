import { features } from "../constants";
import styles, { layout } from "../style";
import { FeatureBanner } from "./../assets/index";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
        } feature-card  hover:translate-x-[5px] hover:translate-y-[0px] transition duration-300 ease-in-out`}
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
            <img
                src={icon}
                alt='star'
                className='w-[70%] h-[70%] object-contain'
            />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
                {content}
            </p>
        </div>
    </div>
);

const Features = () => (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <div className='flex flex-col w-full justify-center items-center'>
                <div className=''>
                    <h2
                        className={`font-poppins text-white text-lg font-bold mb-8 xunderline underline-offset-8`}
                    >
                        Are you struggling to make PDF?
                        {/* <br className='sm:block hidden' /> PDIFY is here to help
                        you. */}
                    </h2>
                </div>
                <img src={FeatureBanner} alt='' className='' />

                {/* <div className='w-[50%]'>
                    
                    <p
                        className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}
                    >
                        The right tool simplifies complex processes, allowing
                        you to accomplish tasks more efficiently and
                        effectively.The right tool can streamline your workflow,
                        saving you time and reducing stress.
                    </p>
                </div> */}
            </div>

            {/* <Button styles={`mt-10`} /> */}
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default Features;
