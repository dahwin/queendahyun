import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Your Journy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unleash the power of the most groundbreaking software ever created! 
      Elevate your productivity to new heights with QueenDahyun. 
      Access this remarkable tool for free and experience the magic 
      of operating alongside expert AI, opening doors to unparalleled 
      efficiency and success. Seize the opportunity and transform your work into a 
      seamless journey of innovation and accomplishment!



      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        
      </div>
    </div>
  </section>
);

export default Billing;
