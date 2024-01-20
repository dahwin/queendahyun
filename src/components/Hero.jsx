import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import React from 'react';
import microsoftLogo from './microsoft.png'; // Make sure to provide the correct path
// const Hero = () => {
//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             The State Of <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">The Art</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <GetStarted />
//           </div>
//         </div>

//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
//         Autonomous AI Agent:
//         QueenDahyun.
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         We have successfully managed large amounts of ai/ not 
//         only AI models but also Deep Learning Base Software  
//         products to running and operating as agents on 
//         consumer-level hardware on GPUs 
//         and even CPUs.
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//         {/* gradient start */}
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//         {/* gradient end */}
//       </div>

//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import DownloadButton from './DownloadButton';
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The State Of <br className="sm:block hidden" />{" "}
            <span className="text-gradient">The Art</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Autonomous AI Agent: QueenDahyun.
        </h1>

        {/* Replace the paragraph with the DownloadButton component */}
        <DownloadButton />

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* Gradient overlays */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* Gradient overlays end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
