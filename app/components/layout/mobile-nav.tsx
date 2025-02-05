"use client";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/layout/mobile-nav.module.scss";
import { useSideNavStore } from "@/app/lib/store";
export default function MobileNav() {
    const { isOpen, actions } = useSideNavStore((state) => state);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const handleMobileMenu = useCallback(() => {
        actions.toggleSideNav();
    }, [actions]);

    useEffect(() => {
        function calcWindowWidth() {
            const ww = window.innerWidth;
            setWindowWidth(ww);
        }
        calcWindowWidth();
        window.addEventListener("resize", calcWindowWidth);
    }, []);

    return (
        <>
            {windowWidth <= 900 && (
                <div className={clsx(styles["floating-nav"])}>
                    <div className={clsx(styles["mobile-nav"])}>
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    className={clsx(styles["btn-mobmenu"], {
                                        [styles["btn-mobmenu--active"]]: isOpen,
                                    })}
                                    onClick={handleMobileMenu}
                                >
                                    <span
                                        className={clsx(
                                            styles["btn-mobmenu__icon"]
                                        )}
                                    >
                                        <span></span>
                                    </span>
                                    <span
                                        className={clsx(
                                            styles["btn-mobmenu__text"]
                                        )}
                                    >
                                        MENU
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="btn btn-icon btn-icon--search"
                                >
                                    <span className="btn-icon__text">
                                        SEARCH
                                    </span>
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="javascript:;"
                                    className="btn btn-icon btn-icon--user"
                                >
                                    <span className="btn-icon__text">USER</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cart"
                                    className="btn btn-icon btn-icon--shoppingbag"
                                >
                                    <span className="btn-icon__text">
                                        SHOPPINGBAG
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles["help-menu"])}>
                        <button
                            type="button"
                            className={clsx(styles["help-menu__button"])}
                        >
                            <span>HELP</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
