"use client";
import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { ProductDetailDataType, MenuDataType } from "@/type";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-options.module.scss";

export default function ProductDetailOptions({
    productData,
    id,
    handleSizeInput,
    selectedMenu,
    selectedSize,
    alertText,
}: {
    productData: ProductDetailDataType;
    id: number;
    handleSizeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    selectedMenu: MenuDataType | null;
    selectedSize: string;
    alertText: string;
}) {
    const [selectedColor, setSelectedColor] = useState<{
        id: string;
        name: string;
    } | null>(null);

    useEffect(() => {
        const color =
            productData &&
            productData.colors.find((color) => Number(color.id) === id);
        setSelectedColor(
            color ? { id: color.id.toString(), name: color.name } : null
        );
    }, [productData, id]);

    return (
        <div className={styles["detail__options"]}>
            <div className={styles["detail__top"]}>
                <div className={styles["detail__current"]}>
                    {productData &&
                        selectedColor &&
                        productData.colors.find(
                            (color) => Number(color.id) === id
                        )?.name}
                </div>
                <div className={styles["detail__colors"]}>
                    <ul>
                        {productData &&
                            productData.colors.map((color) => (
                                <li
                                    key={color.id}
                                    className={clsx(
                                        styles[
                                            (styles["detail__color"],
                                            color.name.toLowerCase())
                                        ],
                                        {
                                            [styles["detail__color--active"]]:
                                                Number(color.id) === id,
                                        }
                                    )}
                                >
                                    <Link
                                        href={`${selectedMenu?.path}${color.id}`}
                                    >
                                        <span>{color.name}</span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className={styles["detail__bottom"]}>
                <strong>SIZE</strong>
                {alertText !== "" && <p>{alertText}</p>}
                <div className={styles["detail__size"]}>
                    <ul>
                        {productData &&
                            [...productData.sizes].reverse().map((size) => (
                                <li key={size}>
                                    <input
                                        id={size}
                                        name={"sizes_radio"}
                                        type="radio"
                                        value={size}
                                        onChange={handleSizeInput}
                                        checked={selectedSize === size}
                                    />
                                    <label htmlFor={size}>{size}</label>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
