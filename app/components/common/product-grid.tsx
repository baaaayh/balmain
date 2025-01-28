"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/common/product-grid.module.scss";
import { getGridProductData } from "@/app/lib/actions";
import Card from "@/app/components/common/card";
import { ProductDataType } from "@/type";
export default function ProductGrid() {
    const [gridData, setGridData] = useState<Array<ProductDataType>>([]);

    useEffect(() => {
        async function getGridData() {
            const result = await getGridProductData();
            setGridData(result);
        }
        getGridData();
    }, []);

    return (
        <div className={styles["product-grid"]}>
            {gridData &&
                gridData.map((data) => (
                    <Card key={data.product_id} product={data} />
                ))}
        </div>
    );
}
