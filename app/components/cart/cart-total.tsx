"use client";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-total.module.scss";
import { CartProductDataType } from "@/type";
export default function CartTotal({
    cartState,
}: {
    cartState: CartProductDataType[];
}) {
    const subtotal = cartState.reduce(
        (acc: number, item: CartProductDataType) => {
            return acc + item.price * item.quantity;
        },
        0
    );
    const tax = (subtotal / 100) * 20;

    return (
        <div className={clsx(styles["cart-total"])}>
            <div className={clsx(styles["cart-total__detail"])}>
                <ul>
                    <li>
                        <b>Subtotal</b>
                        <span>
                            ${subtotal.toLocaleString()}
                            .00
                        </span>
                    </li>
                    <li>
                        <b>Sales Tax</b>
                        <span>
                            ${tax.toLocaleString()}
                            .00
                        </span>
                    </li>
                    <li>
                        <b>Shipping</b>
                        <span>FREE</span>
                    </li>
                </ul>
            </div>
            <div className={clsx(styles["cart-total__estimated"])}>
                <b>Total (Estimated)</b>
                <span>${(subtotal + tax).toLocaleString()}.00</span>
            </div>
            <div className={clsx(styles["cart-total__checkout"])}>
                <button type="button" className="btn btn-grey">
                    <span>CHECKOUT</span>
                </button>
            </div>
        </div>
    );
}
