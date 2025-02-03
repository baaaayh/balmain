"use client";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-modify.module.scss";

export default function CartModify({ quantity }: { quantity: number }) {
    return (
        <div className={clsx(styles["cart-modify"])}>
            <ul className={clsx(styles["cart-modify__buttons"])}>
                <li>
                    <button type="button">EDIT</button>
                </li>
                <li>
                    <button type="button">REMOVE</button>
                </li>
            </ul>
            <div className={clsx(styles["cart-modify__control"])}>
                <button
                    type="button"
                    className={clsx(styles["cart-modify__plus"])}
                ></button>
                <div className={clsx(styles["cart-modify__quantity"])}>
                    {Number(quantity)}
                </div>
                <button
                    type="button"
                    className={clsx(styles["cart-modify__minus"])}
                ></button>
            </div>
        </div>
    );
}
