"use client";
import { useCartStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/common/modal.module.scss";
export default function ModalCart() {
    const { cart: cartState } = useCartStore((state) => state);

    return (
        <div className={clsx(styles["cart"])}>
            <div className={clsx(styles["cart__head"])}>
                <h2>
                    BAG <sup>({cartState.length})</sup>
                </h2>
            </div>
            <div className={clsx(styles["cart__list"])}>
                <ul>
                    {cartState.map((item) => (
                        <li
                            key={item.product_id}
                            className={clsx(styles["cart__item"])}
                        >
                            <div className={clsx(styles["cart__inner"])}>
                                <div
                                    className={clsx(styles["cart__figure"])}
                                ></div>
                                <div className={clsx(styles["cart__contents"])}>
                                    <h3>{item.name}</h3>
                                    <span>
                                        Color: {item.selectedColor.name}
                                    </span>
                                    <span>Size: {item.selectedSize}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <b>${item.price}.00</b>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
