"use client";
import { useState, useEffect, useCallback } from "react";
import { getMenuData } from "@/app/lib/actions";
import { menuDataType } from "@/type";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";
import Link from "next/link";

export default function SideNavMenu({
    navState,
    isExpended,
}: {
    navState: boolean;
    isExpended: boolean;
}) {
    const [menus, setMenus] = useState<Array<menuDataType>>([]);
    const [expandedDepth2, setExpandedDepth2] = useState<number | null>(null);
    const [expandedDepth3, setExpandedDepth3] = useState<number | null>(null);

    useEffect(() => {
        const getMenuList = async () => {
            const result = await getMenuData();
            setMenus(result);
        };

        getMenuList();
    }, []);

    const handleDepth1Click = useCallback((index: number) => {
        setExpandedDepth2((prev) => (prev === index ? null : index));
    }, []);

    const handleBackTo1DepthClick = useCallback(() => {
        setExpandedDepth2(null);
    }, []);

    const handlDepth2Click = useCallback((index: number) => {
        setExpandedDepth3((prev) => (prev === index ? null : index));
    }, []);

    const handleBackTo2DepthClick = useCallback(() => {
        setExpandedDepth3(null);
    }, []);

    return (
        <nav
            className={clsx(styles["menu"], {
                [styles["menu--active"]]: isExpended,
                [styles["menu--closing"]]:
                    (!navState && isExpended) || (navState && !isExpended),
            })}
        >
            <ul>
                {menus
                    ?.filter((menu) => menu.depth_level === 1)
                    .map((depth1, index) => {
                        const depth2Menus = menus.filter(
                            (menu) =>
                                menu.depth_level === 2 &&
                                menu.parent_menu_id === depth1.menu_id
                        );

                        return expandedDepth2 === null ||
                            expandedDepth2 === index ? (
                            <li
                                key={depth1.menu_id}
                                className={clsx(styles["menu__item"], {
                                    [styles["menu__item--border"]]:
                                        depth1.border,
                                })}
                            >
                                {expandedDepth2 !== index &&
                                    (!depth1.link ? (
                                        <button
                                            type="button"
                                            className={clsx(
                                                styles["menu__depth1"]
                                            )}
                                            onClick={() =>
                                                handleDepth1Click(index)
                                            }
                                        >
                                            {depth1.depth1}
                                        </button>
                                    ) : (
                                        <Link
                                            href={depth1.link}
                                            className={clsx(
                                                styles["menu__depth1"]
                                            )}
                                        >
                                            {depth1.depth1}
                                        </Link>
                                    ))}
                                {expandedDepth2 === index &&
                                    depth2Menus.length > 0 && (
                                        <div
                                            className={clsx(
                                                styles["depth2-container"]
                                            )}
                                        >
                                            <ul>
                                                {expandedDepth3 === null && (
                                                    <li
                                                        className={clsx(
                                                            styles["menu__item"]
                                                        )}
                                                    >
                                                        <button
                                                            type="button"
                                                            className={clsx(
                                                                styles[
                                                                    "menu__depth2"
                                                                ]
                                                            )}
                                                            onClick={
                                                                handleBackTo1DepthClick
                                                            }
                                                        >
                                                            {depth1.depth1}
                                                        </button>
                                                    </li>
                                                )}
                                                {depth2Menus.map(
                                                    (depth2, i) => {
                                                        const depth3Menus =
                                                            menus.filter(
                                                                (menu) =>
                                                                    menu.depth_level ===
                                                                        3 &&
                                                                    menu.parent_menu_id ===
                                                                        depth2.menu_id
                                                            );
                                                        return (
                                                            ((expandedDepth2 ===
                                                                index &&
                                                                expandedDepth3 ===
                                                                    null) ||
                                                                expandedDepth3 ===
                                                                    i) && (
                                                                <li
                                                                    key={
                                                                        depth2.menu_id
                                                                    }
                                                                    className={clsx(
                                                                        styles[
                                                                            "menu__item"
                                                                        ],
                                                                        {
                                                                            [styles[
                                                                                "menu__item--border"
                                                                            ]]:
                                                                                depth2.border,
                                                                        }
                                                                    )}
                                                                >
                                                                    {depth2.path ===
                                                                    null ? (
                                                                        <>
                                                                            {expandedDepth3 ===
                                                                                null && (
                                                                                <button
                                                                                    type="button"
                                                                                    className={clsx(
                                                                                        styles[
                                                                                            "menu__depth2"
                                                                                        ]
                                                                                    )}
                                                                                    onClick={() =>
                                                                                        handlDepth2Click(
                                                                                            i
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        depth2.depth2
                                                                                    }
                                                                                </button>
                                                                            )}
                                                                            {expandedDepth3 ===
                                                                                i && (
                                                                                <div
                                                                                    className={clsx(
                                                                                        styles[
                                                                                            "depth3-container"
                                                                                        ]
                                                                                    )}
                                                                                >
                                                                                    <ul>
                                                                                        <li
                                                                                            className={clsx(
                                                                                                styles[
                                                                                                    "menu__item"
                                                                                                ]
                                                                                            )}
                                                                                        >
                                                                                            <button
                                                                                                type="button"
                                                                                                className={clsx(
                                                                                                    styles[
                                                                                                        "menu__depth2"
                                                                                                    ]
                                                                                                )}
                                                                                                onClick={
                                                                                                    handleBackTo2DepthClick
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    depth2.depth2
                                                                                                }
                                                                                            </button>
                                                                                        </li>
                                                                                        {depth3Menus.map(
                                                                                            (
                                                                                                depth3
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        depth3.menu_id
                                                                                                    }
                                                                                                    className={clsx(
                                                                                                        styles[
                                                                                                            "menu__item"
                                                                                                        ],
                                                                                                        {
                                                                                                            [styles[
                                                                                                                "menu__item--border"
                                                                                                            ]]:
                                                                                                                depth3.border,
                                                                                                        }
                                                                                                    )}
                                                                                                >
                                                                                                    <Link
                                                                                                        href={
                                                                                                            depth3.path &&
                                                                                                            depth3.path
                                                                                                        }
                                                                                                        className={clsx(
                                                                                                            styles[
                                                                                                                "menu__depth3"
                                                                                                            ],
                                                                                                            {
                                                                                                                [styles[
                                                                                                                    "menu__depth3--grey"
                                                                                                                ]]:
                                                                                                                    depth3.depth3 ===
                                                                                                                    "View all",
                                                                                                            }
                                                                                                        )}
                                                                                                    >
                                                                                                        {
                                                                                                            depth3.depth3
                                                                                                        }
                                                                                                    </Link>
                                                                                                </li>
                                                                                            )
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <Link
                                                                            href={
                                                                                depth2.path
                                                                            }
                                                                            className={clsx(
                                                                                styles[
                                                                                    "menu__depth2"
                                                                                ]
                                                                            )}
                                                                        >
                                                                            {
                                                                                depth2.depth2
                                                                            }
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            )
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </li>
                        ) : null;
                    })}
            </ul>
        </nav>
    );
}
