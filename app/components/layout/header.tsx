"use client";
import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/layout/header.module.scss";

export default memo(function Header() {
    const [fadeOut, setFadeOut] = useState(false);
    const scrollTopRef = useRef(0);

    useEffect(() => {
        function handleLogo() {
            scrollTopRef.current = window.scrollY;
            if (scrollTopRef.current > 0) setFadeOut(true);
        }

        window.addEventListener("scroll", handleLogo);

        return () => window.removeEventListener("scroll", handleLogo);
    }, []);

    return (
        <header className={clsx(styles["header"])}>
            <div className={clsx(styles["header__inner"])}>
                <div className={clsx(styles["header__banner"])}>
                    <div className={clsx(styles["header-slider"])}>
                        <ul>
                            <li>Complimentary shipping for all orders</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={clsx(styles["full-logo"], {
                        [styles["full-logo--fadeout"]]: fadeOut,
                    })}
                >
                    <Image
                        width={500}
                        height={145}
                        src="/images/common/logo-lg-w.svg"
                        priority
                        alt="BALMAIN PARIS"
                    />
                </div>
                <div className={clsx(styles["header__logo"])}>
                    <Link href="/">
                        <Image
                            width={60}
                            height={60}
                            src="/images/common/header_logo_big_w.svg"
                            alt="BALMAIN LOGO"
                            priority
                        ></Image>
                    </Link>
                </div>
            </div>
        </header>
    );
});
