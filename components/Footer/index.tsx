"use client";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Instagram from "./icons/InstagramIcon";
import Facebook from "./icons/FacebookIcon";
import Twitter from "./icons/TwitterIcon";
import Linkedin from "./icons/LinkedinIcon";
import QRCodeIcon from "./icons/QRCodeIcon";
import PlaneIcon from "./icons/PlaneIcon";
import GooglePlayIcon from "./icons/GooglePlay";
import AppStore from "./icons/AppStore";
import CopyRightIcon from "./icons/CopyRightIcon";

const Footer = () => {
  return (
    <div className={styles.wrapBox}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.gridbox}>
            <div className={styles.col}>
              <h2>Exclusive</h2>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Subscribe</Link>
                </li>
                <li>
                  <h4>Get 10% off your first order</h4>
                </li>
                <li>
                  <div className={styles.inputEmail}>
                    <input type="text" placeholder="Enter your email" />
                    <button>
                      <PlaneIcon />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h3>Support</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">
                    <p>
                      21st Floor, The Binary Tower, Marasi Drive, Business bay,
                      Dubai
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>info@royalclass.group</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="mt-4">+971-42408999</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h3>Account</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">My Account</Link>
                </li>
                <li>
                  <Link href="#">Login / Register</Link>
                </li>
                <li>
                  <Link href="#">Cart</Link>
                </li>
                <li>
                  <Link href="#">WishList</Link>
                </li>
                <li>
                  <Link href="#">Shop</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h3>Quick Links</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Use</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">QA</Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h3>DownLoad App</h3>
              <div className={styles.socialLinks}>
                <div className={styles.btnActions}>
                  <QRCodeIcon />
                  <div className={styles.appBtn}>
                    <GooglePlayIcon />
                    <AppStore />
                  </div>
                </div>
                <ul>
                  <li>
                    <Link href={"#"} target="_blank">
                      <Facebook />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} target="_blank">
                      <Instagram />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} target="_blank">
                      <Linkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} target="_blank">
                      <Twitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <CopyRightIcon />
        <p> Copyright Royal Class Group 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
