"use client";
import { memo, useEffect, useState } from "react";
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
    const [itemState, setItemState] = useState(item);

    useEffect(() => {
        setItemState(item);
    }, [item]);

    return (
        <li className={clsx(styles["cart-list__item"])}>
            <div className={clsx(styles["cart-list__inner"])}>
                <div className={clsx(styles["cart-list__figure"])}>
                    <Image
                        src={itemState.thumbUrl}
                        width={384}
                        height={519}
                        alt={itemState.name}
                        priority
                    />
                </div>
                <div className={clsx(styles["cart-list__info"])}>
                    <div className={clsx(styles["cart-list__text"])}>
                        <div className={clsx(styles["cart-list__left"])}>
                            <h3>{itemState.name}</h3>
                            <span>Color: {itemState.selectedColor.name}</span>
                            <span>Size: {itemState.selectedSize}</span>
                        </div>
                        <div className={clsx(styles["cart-list__right"])}>
                            <span>
                                ${Number(itemState.price).toLocaleString()}
                                .00
                            </span>
                        </div>
                    </div>
                    <CartModify cartItem={itemState} />
                </div>
            </div>
        </li>
    );
});
