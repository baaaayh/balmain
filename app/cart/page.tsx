import Cart from "@/app/components/cart/cart";
import Footer from "@/app/components/layout/footer";
import clsx from "clsx";
import styles from "@/app/styles/cart/page.module.scss";
export default function CartPage() {
    return (
        <>
            <div className="contents">
                <div className="sub-inner">
                    <div className={clsx(styles["cart-page"])}>
                        <Cart />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
