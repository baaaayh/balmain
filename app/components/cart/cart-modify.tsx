"use client";
import { useReducer, useEffect, memo } from "react";
import { useCartStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-modify.module.scss";
import { CartProductDataType } from "@/type";

export default memo(function CartModify({
    cartItem,
}: {
    cartItem: CartProductDataType;
}) {
    const { cart, actions } = useCartStore((state) => state);
    const { updateCartQuantity } = actions;

    function reducer(state: number, action: { type: string }) {
        switch (action.type) {
            case "INCREAMENT":
                return state + 1;
            case "DECREAMENT":
                return state > 1 ? state - 1 : state;
            default:
                return state;
        }
    }

    const [quantity, dispatch] = useReducer(reducer, cartItem.quantity);

    useEffect(() => {
        updateCartQuantity(cartItem.product_id, quantity);
    }, [quantity, cartItem.product_id, updateCartQuantity]);

    return (
        <div className={clsx(styles["cart-modify"])}>
            <ul className={clsx(styles["cart-modify__buttons"])}>
                <li>
                    <button type="button">EDIT</button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() =>
                            actions.removeCartItem(cartItem.product_id)
                        }
                    >
                        REMOVE
                    </button>
                </li>
            </ul>
            <div className={clsx(styles["cart-modify__control"])}>
                <button
                    type="button"
                    className={clsx(styles["cart-modify__plus"])}
                    onClick={() => dispatch({ type: "DECREAMENT" })}
                >
                    +
                </button>
                <div className={clsx(styles["cart-modify__quantity"])}>
                    {
                        cart.filter(
                            (item) => item.product_id === cartItem.product_id
                        )[0].quantity
                    }
                </div>
                <button
                    type="button"
                    className={clsx(styles["cart-modify__minus"])}
                    onClick={() => dispatch({ type: "INCREAMENT" })}
                >
                    -
                </button>
            </div>
        </div>
    );
});
