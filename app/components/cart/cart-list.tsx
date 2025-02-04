"use client";
import CartListItem from "@/app/components/cart/cart-list-item";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-list.module.scss";
import { CartProductDataType } from "@/type";

export default function CartList({
    cartList,
}: {
    cartList: CartProductDataType[];
}) {
    return (
        <div className={clsx(styles["cart-list"])}>
            <ul>
                {cartList.map((item, index) => (
                    <CartListItem
                        key={`${item.item_code}-${item.selectedColor}-${item.selectedSize}-${index}`}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}
