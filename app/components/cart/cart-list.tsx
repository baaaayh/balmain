"use client";
import Image from "next/image";
import { useCartStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-list.module.scss";

export default function CartList() {
    const { cart: cartState } = useCartStore((state) => state);

    console.log(cartState);
    return (
        <div className={clsx(styles["cart-list"])}>
            <ul>
                {cartState.map((item) => (
                    <li
                        key={item.item_code}
                        className={clsx(styles["cart-list__item"])}
                    >
                        <div className={clsx(styles["cart-list__inner"])}>
                            <div className={clsx(styles["cart-list__figure"])}>
                                <Image
                                    src={item.thumbUrl}
                                    width={150}
                                    height={170}
                                    alt={""}
                                />
                            </div>
                            <div className={clsx(styles["cart-list__info"])}>
                                <h3></h3>
                                <span>Color: {}</span>
                                <span>Size: {}</span>
                                <span>${}.00</span>
                                <div
                                    className={clsx(
                                        styles["cart-list__modify"]
                                    )}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
