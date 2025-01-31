import ProductGridSection from "@/app/components/common/product-grid-section";
import ProductDetailSlider from "./product-detail-slider";
import ProductDetailInfo from "@/app/components/product/product-detail-info";
import { getProductDetailData, getSelectedMenuData } from "@/app/lib/actions";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-page.module.scss";

export default async function ProductDetailPage({ id }: { id: number }) {
    const productData = await getProductDetailData(id);
    const menuData = await getSelectedMenuData(productData.menu_id);

    return (
        <>
            {productData && (
                <div className={clsx(styles["detail-container"])}>
                    <div className={clsx(styles["detail"])}>
                        <div className={clsx(styles["detail__left"])}>
                            <ProductDetailSlider
                                id={id}
                                productData={productData}
                            />
                        </div>
                        <div className={clsx(styles["detail__right"])}>
                            <ProductDetailInfo
                                id={id}
                                selectedMenu={menuData[0]}
                                productData={productData}
                            />
                        </div>
                    </div>
                    <ProductGridSection title={"COMPLETE THE LOOK"} />
                    <ProductGridSection title={"YOU MAY ALSO LIKE"} />
                </div>
            )}
        </>
    );
}
