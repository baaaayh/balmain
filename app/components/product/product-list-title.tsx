"use client";
import { useMenuContext } from "@/app/lib/menu-context";
import styles from "@/app/styles/product/product-list-title.module.scss";
import clsx from "clsx";
export default function ProductListTitle() {
    const menuContext = useMenuContext();
    const menu = menuContext?.currMenuData;

    return (
        <div>
            <div></div>
            <div>
                <h2 className={clsx(styles["page-title"])}>
                    {menu?.depth3 || menu?.depth2}
                </h2>
            </div>
        </div>
    );
}
