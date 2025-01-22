"use client";
import { useState, useEffect } from "react";
import { getMenuData } from "@/app/lib/actions";
import { menuDataType } from "@/type";
import SideNavMenuDepth1 from "@/app/components/layout/side-nav-menu-depth1";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";

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
                            <SideNavMenuDepth1
                                key={depth1.menu_id}
                                depth1={depth1}
                                depth2Menus={depth2Menus}
                                expandedDepth2={expandedDepth2}
                                setExpandedDepth2={setExpandedDepth2}
                                expandedDepth3={expandedDepth3}
                                setExpandedDepth3={setExpandedDepth3}
                                menus={menus}
                                index={index}
                            />
                        ) : null;
                    })}
            </ul>
        </nav>
    );
}
