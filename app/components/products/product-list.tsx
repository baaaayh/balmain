"use client";
import { useState, useEffect, memo } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
import { getProductsData } from "@/app/lib/actions";
import clsx from "clsx";
import styles from "@/app/styles/products/products-list.module.scss";
import { ProductsDataType } from "@/type";

export default memo(function ProudctList() {
    const [productsData, setProductsData] = useState<Array<ProductsDataType>>(
        []
    );
    const { selectedMenuId } = useMenuContext();

    useEffect(() => {
        const getProductsList = async () => {
            if (selectedMenuId === null) return;
            const data = await getProductsData(selectedMenuId);
            if (data) {
                setProductsData((prev) => [...prev, data]);
            }
        };

        getProductsList();
    }, [selectedMenuId]);

    console.log(productsData);

    return (
        <div className={clsx(styles["products-list"])}>
            <ul>{productsData.length > 0 && <li>ProductsData</li>}</ul>
        </div>
    );
});
