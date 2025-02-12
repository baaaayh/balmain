"use client";
import Card from "@/app/components/common/card";
import { useState, useEffect } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
import { getProductsData, getAllProductsData } from "@/app/lib/actions";
import { usePathname } from "next/navigation";
import { getMenuData } from "@/app/lib/actions";
import ProductListTitle from "@/app/components/product/product-list-title";
import clsx from "clsx";
import styles from "@/app/styles/product/product-list.module.scss";
import { ProductDataType, MenuDataType } from "@/type";

export default function ProudctList() {
    const [products, setProducts] = useState<ProductDataType[]>([]);
    const [productsCount, setProductsCount] = useState(0);
    const pathname = usePathname();
    const menuContext = useMenuContext();
    const menu = menuContext?.currMenuData;
    const [menuData, setMenuData] = useState<MenuDataType[]>([]);

    useEffect(() => {
        const fetchProductsByMenu = async () => {
            if (!menu) return;

            const fetchData =
                menu.depth1 || menu.depth2 || menu.depth3 === "View all"
                    ? getAllProductsData(menu.menu_id)
                    : getProductsData(menu.menu_id);

            try {
                const data = await fetchData;
                setProducts(data);
                setProductsCount(data.length);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProductsByMenu();
    }, [menu, pathname]);

    useEffect(() => {
        async function getGridData() {
            const menuResult = await getMenuData();
            setMenuData(menuResult);
        }
        getGridData();
    }, []);

    return (
        <>
            <ProductListTitle productsCount={productsCount} />
            <div className={clsx(styles["product-list"])}>
                {products.map((product) => (
                    <Card
                        key={product.product_id}
                        product={product}
                        menuData={menuData}
                    />
                ))}
            </div>
        </>
    );
}
