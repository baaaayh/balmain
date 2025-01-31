import ProductGridSection from "@/app/components/common/product-grid-section";
import CarContainer from "@/app/components/cart/cart-container";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart.module.scss";
export default function Cart() {
    return (
        <>
            <div className={clsx(styles["cart"])}>
                <div className={clsx(styles["cart__left"])}>
                    <CarContainer />
                </div>
                <div className={clsx(styles["cart__right"])}></div>
            </div>
            <ProductGridSection title="YOU MAY ALSO LIKE" />
        </>
    );
}
