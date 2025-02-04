"use client";
import { memo } from "react";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
import { ProductDetailDataType } from "@/type";

export default memo(function CartEditModalColors({
    productData,
    changeProduct,
    changedState,
}: {
    productData: ProductDetailDataType | null;
    changeProduct: (product: { id: string; name: string }) => void;
    changedState: {
        productId: number | null;
        selectedColor: {
            id: string;
            name: string;
        } | null;
        selectedSize: string;
    } | null;
}) {
    return (
        <div className={clsx(styles["edit-modal__colors"])}>
            <ul>
                {productData &&
                    productData.colors.map((color) => (
                        <li
                            key={color.id}
                            className={clsx(
                                styles[
                                    (styles["edit-modal__color"],
                                    color.name.toLowerCase())
                                ],
                                {
                                    [styles["edit-modal__color--active"]]:
                                        Number(color.id) ===
                                        Number(changedState?.selectedColor?.id),
                                }
                            )}
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    changeProduct({
                                        id: String(color.id),
                                        name: color.name,
                                    })
                                }
                            >
                                <span>{color.name}</span>
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
});
