"use client";
import { useCallback } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";
import { SideNavMenuProps } from "@/type";
import SideNavMenuDepth3 from "./side-nav-menu-depth3";

export default function SideNavMenuDepth2({
    expandedDepth2,
    expandedDepth3,
    setExpandedDepth2,
    setExpandedDepth3,
    depth1,
    depth2Menus,
    menus,
    index,
}: SideNavMenuProps) {
    const handleBackTo1DepthClick = useCallback(() => {
        setExpandedDepth2(null);
    }, [setExpandedDepth2]);

    const handlDepth2Click = useCallback(
        (index: number) => {
            setExpandedDepth3((prev) => (prev === index ? null : index));
        },
        [setExpandedDepth3]
    );

    console.log(depth2Menus);

    return (
        <div className={clsx(styles["depth2-container"])}>
            <ul>
                {expandedDepth3 === null && (
                    <li className={clsx(styles["menu__item"])}>
                        <button
                            type="button"
                            className={clsx(styles["menu__depth2"])}
                            onClick={handleBackTo1DepthClick}
                        >
                            {depth1.depth1}
                        </button>
                    </li>
                )}
                {depth2Menus.map((depth2, i) => {
                    const depth3Menus = menus.filter(
                        (menu) =>
                            menu.depth_level === 3 &&
                            menu.parent_menu_id === depth2.menu_id
                    );
                    return (
                        ((expandedDepth2 === index &&
                            expandedDepth3 === null) ||
                            expandedDepth3 === i) && (
                            <li
                                key={depth2.menu_id}
                                className={clsx(styles["menu__item"], {
                                    [styles["menu__item--border"]]:
                                        depth2.border,
                                })}
                            >
                                {depth2.path === null &&
                                    depth2.link === null && (
                                        <>
                                            {expandedDepth3 === null && (
                                                <button
                                                    type="button"
                                                    className={clsx(
                                                        styles["menu__depth2"]
                                                    )}
                                                    onClick={() =>
                                                        handlDepth2Click(i)
                                                    }
                                                >
                                                    {depth2.depth2}
                                                </button>
                                            )}
                                            {expandedDepth3 === i && (
                                                <SideNavMenuDepth3
                                                    depth2={depth2}
                                                    depth3Menus={depth3Menus}
                                                    setExpandedDepth3={
                                                        setExpandedDepth3
                                                    }
                                                />
                                            )}
                                        </>
                                    )}
                                {(depth2.path !== null ||
                                    depth2.link !== null) && (
                                    <Link
                                        href={
                                            depth2.path
                                                ? depth2.path
                                                : depth2.link || "#"
                                        }
                                        className={clsx(styles["menu__depth2"])}
                                    >
                                        {depth2.depth2}
                                    </Link>
                                )}
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
}
