"use client";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/common/modal-cart-item.module.scss";
import { CartProductDataType } from "@/type";
export default function ModalCartItem({ item }: { item: CartProductDataType }) {
    return (
        <li className={clsx(styles["cart__item"])}>
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
                    <div className={clsx(styles["cart__option"])}>
                        <h3>{item.name}</h3>
                        <span>Color: {item.selectedColor.name}</span>
                        <span>Size: {item.selectedSize}</span>
                        <span>Quantity: {item.quantity}</span>
                        <b>${Number(item.price).toLocaleString()}.00</b>
                    </div>
                </div>
            </div>
        </li>
    );
}
