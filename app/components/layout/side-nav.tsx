"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import clsx from "clsx";
import SideNavUtils from "@/app/components/layout/side-nav-utils";
import styles from "@/app/styles/layout/side-nav.module.scss";

export default function SideNav() {
    const [navState, setNavState] = useState(false);
    const [isExpended, setIsExpended] = useState(false);

    const handleNavState = useCallback(() => {
        setNavState((prev: boolean) => !prev);
    }, []);

    const handleTransitionEnd = useCallback(() => {
        if (navState) {
            setIsExpended(true);
        } else {
            setIsExpended(false);
        }
    }, [navState]);

    return (
        <nav
            className={clsx(styles["side-nav"], {
                [styles["side-nav--active"]]: navState,
            })}
            onTransitionEnd={handleTransitionEnd}
        >
            <div
                className={clsx(styles["side-nav__inner"], {
                    [styles["side-nav__inner--active"]]: isExpended,
                })}
            >
                <div className={clsx(styles["side-nav__contents"])}>
                    <div className={clsx(styles["side-nav__header"])}>
                        <button
                            type="button"
                            className={clsx("btn btn-menu", {
                                ["btn-menu--active"]: isExpended,
                            })}
                            onClick={handleNavState}
                        >
                            <span className="btn btn-icon__text">MENU</span>
                        </button>
                    </div>
                    <SideNavUtils navState={navState} isExpended={isExpended} />
                    <nav className={clsx(styles["side-nav__menu"])}>
                        <div className={clsx(styles["side-nav__row"])}></div>
                        <div className={clsx(styles["side-nav__row"])}></div>
                        <div className={clsx(styles["side-nav__row"])}></div>
                    </nav>
                </div>
                <div className={clsx(styles["side-nav__footer"])}>
                    <ul>
                        <li>
                            <Link
                                href=""
                                className="btn btn-navfoot btn-navfoot--marker"
                            >
                                BOUTIQUES
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="btn btn-navfoot btn-navfoot--phone"
                            >
                                +1 646 343 9792
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
