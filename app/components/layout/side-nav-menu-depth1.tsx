"use client";
import Link from "next/link";
import { useCallback } from "react";
import SideNavMenuDepth2 from "@/app/components/layout/side-nav-menu-depth2";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";
import { SideNavMenuProps } from "@/type";

export default function SideNavMenuDepth1({
    expandedDepth2,
    expandedDepth3,
    setExpandedDepth2,
    setExpandedDepth3,
    depth1,
    depth2Menus,
    menus,
    index,
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
                (!depth1.link ? (
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                        onClick={() => handleDepth1Click(index)}
                    >
                        {depth1.depth1}
                    </button>
                ) : (
                    <Link
                        href={depth1.link}
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
                />
            )}
        </li>
    );
}
