"use client";
import { memo } from "react";
import Link from "next/link";
import CartList from "@/app/components/cart/cart-list";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-container.module.scss";
import { CartProductDataType } from "@/type";
export default memo(function CartContainer({
    cartState,
}: {
    cartState: CartProductDataType[];
}) {
    return (
        <div className={clsx(styles["cart-container"])}>
            <div className={clsx(styles["cart-container__head"])}>
                <h2>SHOPPING BAG ({cartState.length})</h2>
                <Link href="/">BACK</Link>
            </div>
            <div className={clsx(styles["cart-container__body"])}>
                <CartList cartState={cartState} />
            </div>
        </div>
    );
});
