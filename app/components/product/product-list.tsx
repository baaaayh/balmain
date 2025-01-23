"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
import { getProductsData, getAllProductsData } from "@/app/lib/actions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/app/styles/product/product-list.module.scss";
import { ProductDataType } from "@/type";

export default function ProudctList() {
    const [products, setProducts] = useState<ProductDataType[]>([]);
    const pathname = usePathname();
    const menuContext = useMenuContext();
    const menu = menuContext?.currMenuData;

    useEffect(() => {
        const fetchProductsByMenu = async () => {
            if (!menu) return;

            console.log(menu);

            const fetchData =
                menu.depth1 || menu.depth2 || menu.depth3 === "View all"
                    ? getAllProductsData(menu.menu_id)
                    : getProductsData(menu.menu_id);

            try {
                const data = await fetchData;
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProductsByMenu();
    }, [menu, pathname]);

    return (
        <div className={clsx(styles["product-list"])}>
            <ul>
                {products.map((product, index) => (
                    <li
                        key={`${product.product_id}-${product.item_code}-${index}`}
                    >
                        <div>{product.base_item_code}</div>

                        <Link href={`${pathname}/${product.product_id}`}>
                            {product.image_filenames
                                .filter(
                                    (filename) =>
                                        filename.endsWith("F.avif") ||
                                        filename.endsWith("F.jpg")
                                )
                                .map((filename, index) => {
                                    return (
                                        <Image
                                            key={`${filename}-${index}`}
                                            width={828}
                                            height={1119}
                                            src={`/images/products/${product.base_item_code}/${product.color}/${filename}`}
                                            alt={product.image_alt}
                                            priority
                                        />
                                    );
                                })}
                        </Link>
                        <h3>{product.name}</h3>
                        <p>Color: {product.color}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
