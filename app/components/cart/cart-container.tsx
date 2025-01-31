import CartList from "@/app/components/cart/cart-list";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-container.module.scss";

export default function CartContainer() {
    return (
        <div className={clsx(styles["cart-container"])}>
            <div className={clsx(styles["cart-container__head"])}></div>
            <div className={clsx(styles["cart-container__body"])}>
                <CartList />
            </div>
        </div>
    );
}
