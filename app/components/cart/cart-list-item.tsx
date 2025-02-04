"use client";
import { memo } from "react";
import { CartProductDataType } from "@/type";
import Image from "next/image";
import CartModify from "@/app/components/cart/cart-modify";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-list-item.module.scss";

export default memo(function CartListItem({
    item,
}: {
    item: CartProductDataType;
}) {
    return (
        <li className={clsx(styles["cart-list__item"])}>
            <div className={clsx(styles["cart-list__inner"])}>
                <div className={clsx(styles["cart-list__figure"])}>
                    <Image
                        src={item.thumbUrl}
                        width={384}
                        height={519}
                        alt={item.name}
                        priority
                    />
                </div>
                <div className={clsx(styles["cart-list__info"])}>
                    <div className={clsx(styles["cart-list__text"])}>
                        <div className={clsx(styles["cart-list__left"])}>
                            <h3>{item.name}</h3>
                            <span>Color: {item.selectedColor.name}</span>
                            <span>Size: {item.selectedSize}</span>
                        </div>
                        <div className={clsx(styles["cart-list__right"])}>
                            <span>
                                ${Number(item.price).toLocaleString()}
                                .00
                            </span>
                        </div>
                    </div>
                    <CartModify cartItem={item} />
                </div>
            </div>
        </li>
    );
});
