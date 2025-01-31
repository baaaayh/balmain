"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/common/product-grid.module.scss";
import { getGridProductData, getMenuData } from "@/app/lib/actions";
import Card from "@/app/components/common/card";
import { ProductDataType, MenuDataType } from "@/type";
export default function ProductGrid() {
    const [gridData, setGridData] = useState<Array<ProductDataType>>([]);
    const [menuData, setMenuData] = useState<MenuDataType[]>([]);

    useEffect(() => {
        async function getGridData() {
            const productResult = await getGridProductData();
            const menuResult = await getMenuData();
            setGridData(productResult);
            setMenuData(menuResult);
        }
        getGridData();
    }, []);

    return (
        <div className={styles["product-grid"]}>
            {gridData &&
                gridData.map((data) => (
                    <Card
                        key={data.product_id}
                        product={data}
                        menuData={menuData}
                    />
                ))}
        </div>
    );
}
