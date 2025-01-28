"use client";
import ProductGrid from "@/app/components/common/product-grid";
import styles from "@/app/styles/product/product-detail-section.module.scss";

export default function ProductDetailSection({ title }: { title: string }) {
    return (
        <section className={styles["product-section"]}>
            <div className={styles["product-section__inner"]}>
                <h2>{title}</h2>
                <div className={styles["product-section__contents"]}>
                    <ProductGrid />
                </div>
            </div>
        </section>
    );
}
