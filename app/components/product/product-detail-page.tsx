"use client";
import { useState, useEffect, memo } from "react";
import ProductGridSection from "@/app/components/common/product-grid-section";
import ProductDetailSlider from "./product-detail-slider";
import ProductDetailInfo from "@/app/components/product/product-detail-info";
import Footer from "@/app/components/layout/footer";
import { getProductDetailData, getSelectedMenuData } from "@/app/lib/actions";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-page.module.scss";
import { MenuDataType, ProductDetailDataType } from "@/type";

export default memo(function ProductDetailPage({ id }: { id: number }) {
    const [productData, setProductData] =
        useState<ProductDetailDataType | null>(null);
    const [menuData, setMenuData] = useState<MenuDataType | null>(null);
    const [headHeight, setHeadHeight] = useState(0);

    useEffect(() => {
        async function getProductData() {
            const result = await getProductDetailData(id);
            setProductData(result);
        }
        getProductData();
    }, [id]);

    useEffect(() => {
        async function getMenuData() {
            if (productData) {
                const result = await getSelectedMenuData(productData.menu_id);
                setMenuData(result[0]);
            }
        }
        getMenuData();
    }, [productData]);

    return (
        <>
            {productData && (
                <div
                    className={clsx(
                        "detail-container",
                        styles["detail-container"]
                    )}
                >
                    <div
                        className={clsx(styles["detail"])}
                        style={{ paddingTop: `${headHeight}px` }}
                    >
                        <div className={clsx(styles["detail__left"])}>
                            <ProductDetailSlider
                                id={id}
                                productData={productData}
                            />
                        </div>
                        <div className={clsx(styles["detail__right"])}>
                            {menuData && (
                                <ProductDetailInfo
                                    id={id}
                                    selectedMenu={menuData}
                                    productData={productData}
                                    setHeadHeight={setHeadHeight}
                                />
                            )}
                        </div>
                    </div>
                    <ProductGridSection title={"COMPLETE THE LOOK"} />
                    <ProductGridSection title={"YOU MAY ALSO LIKE"} />
                    <Footer />
                </div>
            )}
        </>
    );
});
