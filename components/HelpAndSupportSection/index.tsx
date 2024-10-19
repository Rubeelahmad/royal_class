import styles from "./HelpAndSupportSection.module.scss"
import Image from "next/image";
import supportImg from './icons/support.png'

const HelpAndSupportSection = () => {
  
  return (
    <div className={`${styles.wrapBox}  `}>
      <div className="container   py-4 md:py-6 ">
        <div className={styles.newArrivalsCardsSection}>
        <Image src={supportImg} alt="newArrivalImg"/>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportSection;
