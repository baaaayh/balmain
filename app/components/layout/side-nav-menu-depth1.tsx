"use client";
import { useCallback, memo } from "react";
import SideNavMenuDepth2 from "@/app/components/layout/side-nav-menu-depth2";
import Link from "next/link";
import clsx from "clsx";
import { SideNavMenuProps } from "@/type";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";

export default memo(function SideNavMenuDepth1({
    expandedDepth2,
    expandedDepth3,
    setExpandedDepth2,
    setExpandedDepth3,
    depth1,
    depth2Menus,
    menus,
    index,
    path,
}: SideNavMenuProps) {
    const handleDepth1Click = useCallback(
        (index: number) => {
            setExpandedDepth2((prev) => (prev === index ? null : index));
        },
        [setExpandedDepth2]
    );

    return (
        <li
            className={clsx(styles["menu__item"], {
                [styles["menu__item--border"]]: depth1.border,
            })}
        >
            {expandedDepth2 !== index &&
                (depth2Menus.length > 0 ? (
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                        onClick={() => handleDepth1Click(index)}
                    >
                        {depth1.depth1}
                    </button>
                ) : (
                    <Link
                        href={path || "/"}
                        className={clsx(styles["menu__depth1"])}
                    >
                        {depth1.depth1}
                    </Link>
                ))}
            {expandedDepth2 === index && depth2Menus.length > 0 && (
                <SideNavMenuDepth2
                    menus={menus}
                    depth1={depth1}
                    depth2Menus={depth2Menus}
                    expandedDepth2={expandedDepth2}
                    setExpandedDepth2={setExpandedDepth2}
                    expandedDepth3={expandedDepth3}
                    setExpandedDepth3={setExpandedDepth3}
                    index={index}
                    path={path}
                />
            )}
        </li>
    );
});
