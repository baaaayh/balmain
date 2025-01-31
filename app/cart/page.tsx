import Cart from "@/app/components/cart/cart";
import clsx from "clsx";
import styles from "@/app/styles/cart/page.module.scss";
export default function CartPage() {
    return (
        <div className={clsx(styles["cart-page"])}>
            <Cart />
        </div>
    );
}
