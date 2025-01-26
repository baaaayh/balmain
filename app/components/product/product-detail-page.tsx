import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-page.module.scss";
import { getProductDetailData } from "@/app/lib/actions";

export default async function ProductDetailPage({ id }: { id: number }) {
    const data = await getProductDetailData(id);

    console.log(data);

    return (
        <div className={clsx(styles["detail"])}>
            <h2>{id}</h2>
        </div>
    );
}
