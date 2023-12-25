import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        People's statement <br className="sm:block hidden" /> about us:
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Our revolutionary AI software, generously offered for free testing, empowers users to experience 
        transformative capabilities locally. We extend heartfelt thanks to early adopters for shaping the 
        future with valuable feedback. Anticipate a paradigm shift in task execution, 
        as our software integrates NLP, vision, and audio seamlessly, ushering in a new era of innovation.
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
