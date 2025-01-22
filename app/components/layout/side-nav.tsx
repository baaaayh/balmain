"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MenuProvider } from "@/app/lib/menu-context";
import SideNavUtils from "@/app/components/layout/side-nav-utils";
import SideNavMenu from "@/app/components/layout/side-nav-menu";
import SideNavFooter from "@/app/components/layout/side-nav-footer";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav.module.scss";

export default function SideNav() {
    const pathname = usePathname();
    const [isExpended, setIsExpended] = useState(false);
    const [navState, setNavState] = useState(false);

    const handleNavState = useCallback(() => {
        setNavState(!navState);
    }, [setNavState, navState]);

    const handleNavClose = useCallback(() => {
        setNavState(false);
    }, [setNavState]);

    const handleTransitionEnd = useCallback(() => {
        if (navState) {
            setIsExpended(true);
        } else {
            setIsExpended(false);
        }
    }, [navState]);

    useEffect(() => {
        handleNavClose();
    }, [pathname, handleNavClose]);

    return (
        <MenuProvider>
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
                        <SideNavUtils
                            navState={navState}
                            isExpended={isExpended}
                        />
                        <SideNavMenu
                            navState={navState}
                            isExpended={isExpended}
                        />
                    </div>
                    <SideNavFooter
                        navState={navState}
                        isExpended={isExpended}
                    />
                </div>
            </nav>
        </MenuProvider>
    );
}
