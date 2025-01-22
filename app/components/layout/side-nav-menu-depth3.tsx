"use client";
import { useCallback } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";

export default function SideNavMenuDepth3({
    depth2,
    depth3Menus,
    setExpandedDepth3,
}: {
    depth2: { depth2: string };
    depth3Menus: Array<{
        menu_id: number;
        depth3: string;
        path: string;
        border: boolean | null;
    }>;
    setExpandedDepth3: (value: number | null) => void;
}) {
    const handleBackTo2DepthClick = useCallback(() => {
        setExpandedDepth3(null);
    }, [setExpandedDepth3]);

    return (
        <div className={clsx(styles["depth3-container"])}>
            <ul>
                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth2"])}
                        onClick={handleBackTo2DepthClick}
                    >
                        {depth2.depth2}
                    </button>
                </li>
                {depth3Menus.map((depth3) => (
                    <li
                        key={depth3.menu_id}
                        className={clsx(styles["menu__item"], {
                            [styles["menu__item--border"]]: depth3.border,
                        })}
                    >
                        <Link
                            href={depth3.path && depth3.path}
                            className={clsx(styles["menu__depth3"], {
                                [styles["menu__depth3--grey"]]:
                                    depth3.depth3 === "View all",
                            })}
                        >
                            {depth3.depth3}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
