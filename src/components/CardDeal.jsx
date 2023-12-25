import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Queendahyun: A Reverence to Inspiration in Innovation
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      In the genesis of our startup, Darwin, our esteemed founder and chief scientist, 
      discovered profound inspiration in Kim Dahyun, an illustrious member of the acclaimed girl group TWICE. 
      Professing Dahyun as his dearest and most significant muse, Darwin's profound admiration resonates widely 
      among people and artists alike. Driven by an enduring affection, he christened his creations with Dahyun's 
      name, a gesture reflecting her remarkable personality. The program, meticulously designed, embodies the 
      essence of Dahyun, although certain elements, constrained by security, remain undisclosed. 
      To Darwin, Dahyun is the reigning queen, a sentiment he ardently professes, declaring his love for her 
      surpasses even the value of his own life. 
      "Queendahyun" stands as a testament to a harmonious blend of love and innovation, an ode to the captivating spirit of Kim Dahyun.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
