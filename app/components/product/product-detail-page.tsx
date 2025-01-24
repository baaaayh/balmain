import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-page.module.scss";
export default async function ProductDetailPage({ id }: { id: number }) {
    return (
        <div className={clsx(styles["detail"])}>
            <h2>{id}</h2>
        </div>
    );
}
