import React from "react";
import styles from "./ViewProductsButton.module.scss";

interface ViewProductsBtnProps {
  viewAll: boolean;
  toggleView: () => void;
}

const ViewProductsBtn: React.FC<ViewProductsBtnProps> = ({
  viewAll,
  toggleView,
}) => {
  return (
    <div className={styles.viewProductsBtn}>
      <button
        onClick={toggleView}
        className="bg-secondary text-sm md:text-base py-2 px-6 rounded-[4px] text-white"
      >
        {viewAll ? "Show Less" : "View All Products"}
      </button>
    </div>
  );
};

export default ViewProductsBtn;
