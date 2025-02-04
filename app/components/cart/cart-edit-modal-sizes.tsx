"use client";
import { memo } from "react";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
import { ProductDetailDataType, ChangedStateType } from "@/type";

export default memo(function CartEditModalSizes({
    productData,
    handleSizeInput,
    changedState,
}: {
    productData: ProductDetailDataType | null;
    handleSizeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changedState: ChangedStateType | null;
}) {
    return (
        <div className={clsx(styles["edit-modal__sizes"])}>
            <ul>
                {productData &&
                    [...productData.sizes].map((size) => (
                        <li key={size}>
                            <input
                                id={size}
                                name={"sizes_radio"}
                                type="radio"
                                value={size}
                                onChange={handleSizeInput}
                                checked={changedState?.selectedSize === size}
                            />
                            <label htmlFor={size}>{size}</label>
                        </li>
                    ))}
            </ul>
        </div>
    );
});
