"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore, useModalStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/common/modal-cart.module.scss";
export default function ModalCart() {
    const { cart: cartState } = useCartStore((state) => state);
    const { actions: modalActions } = useModalStore((state) => state);

    useEffect(() => {
        document.addEventListener("click", function (e: MouseEvent) {
            const $target = e.target;
            if ($target instanceof HTMLElement && $target.closest(".dim")) {
                modalActions.closeModal();
            }
        });
    }, [modalActions]);

    return (
        <div className={clsx(styles["cart"])}>
            <div className={clsx(styles["cart__head"])}>
                <h2>
                    BAG <sup>({cartState.length})</sup>
                </h2>
            </div>
            <div className={clsx(styles["cart__list"])}>
                <ul>
                    {cartState.map((item, index) => (
                        <li
                            key={`${item.product_id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                            className={clsx(styles["cart__item"])}
                        >
                            <div className={clsx(styles["cart__inner"])}>
                                <div className={clsx(styles["cart__figure"])}>
                                    <Image
                                        src={item.thumbUrl}
                                        width={128}
                                        height={174}
                                        priority
                                        alt={item.name}
                                    />
                                </div>
                                <div className={clsx(styles["cart__contents"])}>
                                    <div
                                        className={clsx(styles["cart__option"])}
                                    >
                                        <h3>{item.name}</h3>
                                        <span>
                                            Color: {item.selectedColor.name}
                                        </span>
                                        <span>Size: {item.selectedSize}</span>
                                        <span>Quantity: {item.quantity}</span>
                                        <b>${item.price}.00</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={clsx(styles["cart__total"])}>
                <span>Total (Estimated)</span>
                <strong>
                    $
                    {cartState.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                    )}
                    .00
                </strong>
            </div>
            <div className={clsx(styles["cart__button"])}>
                <Link href="/cart" className="btn btn-grey">
                    <span>GO TO CART</span>
                </Link>
            </div>
        </div>
    );
}
