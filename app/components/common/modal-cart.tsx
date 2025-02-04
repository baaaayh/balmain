"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useCartStore, useModalStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/common/modal-cart.module.scss";
import ModalCartItem from "@/app/components/common/modal-cart-item";

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
                        <ModalCartItem
                            key={`${item.item_code}-${item.selectedColor}-${item.selectedSize}-${index}`}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
            <div className={clsx(styles["cart__total"])}>
                <span>Total (Estimated)</span>
                <strong>
                    $
                    {cartState
                        .reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                        )
                        .toLocaleString()}
                    .00
                </strong>
            </div>
            <div className={clsx(styles["cart__button"])}>
                <Link
                    href="/cart"
                    className="btn btn-grey"
                    onClick={modalActions.closeModal}
                >
                    <span>GO TO CART</span>
                </Link>
            </div>
        </div>
    );
}
