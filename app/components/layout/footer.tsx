"use client";
import { memo } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import ModeButton from "@/app/components/common/mode-button";
import styles from "@/app/styles/layout/footer.module.scss";

export default memo(function Footer() {
    return (
        <footer className={clsx(styles["footer"])}>
            <div className={clsx(styles["footer__inner"])}>
                <div className={clsx(styles["footer__sns"])}>
                    <ul>
                        <li>
                            <Link
                                href="https://www.snapchat.com/add/Balmainofficial"
                                target="_blank"
                            >
                                <span className={clsx(styles["icon-snapchat"])}>
                                    SANPCHAT
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/balmainparis"
                                target="_blank"
                            >
                                <span className={clsx(styles["icon-facebook"])}>
                                    FACEBOOOK
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.youtube.com/Balmain"
                                target="_blank"
                            >
                                <span className={clsx(styles["icon-youtube"])}>
                                    YOUTUBE
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/Balmain"
                                target="_blank"
                            >
                                <span
                                    className={clsx(styles["icon-instagram"])}
                                >
                                    INSTAGRAM
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com/Balmain"
                                target="_blank"
                            >
                                <span className={clsx(styles["icon-x"])}>
                                    X
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.tiktok.com/@balmain"
                                target="_blank"
                            >
                                <span className={clsx(styles["icon-tiktok"])}>
                                    TIKTOK
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.pinterest.fr/balmain/"
                                target="_blank"
                            >
                                <span
                                    className={clsx(styles["icon-pinterest"])}
                                >
                                    PINTEREST
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={clsx(styles["footer__logo"])}>
                    <Link href="/">
                        <Image
                            width={200}
                            height={58}
                            src="/images/common/logo-lg-w.svg"
                            alt="balmain"
                            priority
                            layout="intrinsic"
                        />
                    </Link>
                </div>
                <div className={clsx(styles["footer__middle"])}>
                    <div className={clsx(styles["footer__breadcrumb"])}>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles["footer__mode"])}>
                        <ModeButton />
                    </div>
                </div>
                <div className={clsx(styles["footer__bottom"])}>
                    <div className={clsx(styles["footer__family"])}>
                        <ul>
                            <li>
                                <Link
                                    href="/"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Newsletter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/stores/find"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Boutiques
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/order/track/form"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Track your order
                                </Link>
                            </li>
                            <li>
                                <button className="footer-link overlay-modal">
                                    Returns
                                </button>
                            </li>
                            <li>
                                <button className="footer-link overlay-modal">
                                    Shipping
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="https://balmain-career.talent-soft.com/homepage.aspx?LCID=2057"
                                    target="_blank"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/legal/"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Legal notice
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/legal/?topic=bal-privacy-policy"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="policy-cookies">
                                    Cookies center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/contact"
                                    className={clsx(styles["footer__link"])}
                                >
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/page/faq"
                                    className={clsx(styles["footer__link"])}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="https://us.balmain.com/en/editorial-pages/redirection-page.html">
                                    Care Instructions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="http://www.balmainhair.com"
                                    target="_blank"
                                >
                                    Balmain Hair Couture
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://us.balmain.com/en/experience/balmain-middle-east"
                                    target="_blank"
                                >
                                    Balmain Middle East
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles["footer__environment"])}></div>
                </div>
            </div>
        </footer>
    );
});
