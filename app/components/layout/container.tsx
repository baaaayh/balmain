"use client";
import { useState, useCallback } from "react";
import SideNav from "@/app/components/layout/side-nav";

export default function Container({ children }: { children: React.ReactNode }) {
    const [navState, setNavState] = useState(false);
    const [isExpended, setIsExpended] = useState(false);

    const handleNavState = useCallback(() => {
        setNavState((prev: boolean) => !prev);
    }, []);

    const handleNavClose = useCallback(() => {
        setNavState(false);
    }, []);

    const handleTransitionEnd = useCallback(() => {
        if (navState) {
            setIsExpended(true);
        } else {
            setIsExpended(false);
        }
    }, [navState]);

    return (
        <div className={`container ${navState ? "container--widenav" : ""}`}>
            <SideNav
                handleNavState={handleNavState}
                handleNavClose={handleNavClose}
                handleTransitionEnd={handleTransitionEnd}
                navState={navState}
                isExpended={isExpended}
            />
            {children}
        </div>
    );
}
