"use client";
import { useEffect, useState, useCallback, memo } from "react";
import { usePathname } from "next/navigation";
import { MenuProvider } from "@/app/lib/menu-context";
import SideNavUtils from "@/app/components/layout/side-nav-utils";
import SideNavMenu from "@/app/components/layout/side-nav-menu";
import SideNavFooter from "@/app/components/layout/side-nav-footer";
import { useSideNavStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav.module.scss";

export default memo(function SideNav() {
    const { isOpen, actions } = useSideNavStore((state) => state);
    const pathname = usePathname();
    const [isExpended, setIsExpended] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const handleNavState = useCallback(() => {
        actions.toggleSideNav();
    }, [actions]);

    const handleNavClose = useCallback(() => {
        actions.closeSideNav();
    }, [actions]);

    const handleTransitionEnd = useCallback(() => {
        if (isOpen) {
            setIsExpended(true);
        } else {
            setIsExpended(false);
        }
    }, [isOpen]);

    useEffect(() => {
        actions.closeSideNav();
    }, [pathname, handleNavClose, actions]);

    useEffect(() => {
        function calcWindowWidth() {
            const ww = window.innerWidth;
            setWindowWidth(ww);
        }
        calcWindowWidth();
        window.addEventListener("resize", calcWindowWidth);
    }, []);

    useEffect(() => {
        if (isOpen && windowWidth <= 900) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [windowWidth, isOpen]);

    return (
        <MenuProvider>
            {
                <nav
                    className={clsx(styles["side-nav"], {
                        [styles["side-nav--active"]]: isOpen,
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
                                    <span className="btn btn-icon__text">
                                        MENU
                                    </span>
                                </button>
                            </div>
                            <SideNavUtils
                                navState={isOpen}
                                isExpended={isExpended}
                            />
                            <SideNavMenu
                                navState={isOpen}
                                isExpended={isExpended}
                            />
                        </div>
                        <SideNavFooter
                            navState={isOpen}
                            isExpended={isExpended}
                        />
                    </div>
                </nav>
            }
        </MenuProvider>
    );
});
