"use client";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import Link from "next/link";
import { useCartStore, useModalStore } from "@/app/lib/store";
import ProudctTextContents from "@/app/components/product/product-text-contents";
import ProductDetailOptions from "@/app/components/product/product-detail-options";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-info.module.scss";
import { ProductDetailDataType, MenuDataType } from "@/type";

export default function ProductDetailInfo({
    id,
    productData,
    selectedMenu,
}: {
    id: number;
    productData: ProductDetailDataType;
    selectedMenu: MenuDataType;
}) {
    const [selectedColor, setSelectedColor] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [alertText, setAlertText] = useState("");
    const { actions: cartActions } = useCartStore((state) => state);
    const { actions: modalActions } = useModalStore((state) => state);

    useEffect(() => {
        const color =
            productData &&
            productData.colors.find((color) => Number(color.id) === id);
        setSelectedColor(
            color ? { id: color.id.toString(), name: color.name } : null
        );
    }, [productData, id]);

    const handleSizeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSelectedSize(e.target.value);
    }, []);

    const handleAddToCart = useCallback(() => {
        if (productData && selectedColor && selectedSize) {
            cartActions.addToCart({
                product_id: id,
                item_code: productData.item_code,
                menu_id: productData.menu_id,
                name: productData.name,
                quantity: 1,
                price: productData.price,
                selectedSize: selectedSize,
                selectedColor: selectedColor,
                thumbUrl: productData.image_filenames.find((image: string) =>
                    image?.split(".")[0].endsWith("F")
                )
                    ? productData.product_id > 1110
                        ? `/images/dummy/${
                              productData.product_id
                          }/${productData.image_filenames.find(
                              (image: string) =>
                                  image?.split(".")[0].endsWith("F")
                          )}`
                        : `/images/products/${productData.base_item_code}/${
                              selectedColor?.name
                          }/${productData.image_filenames.find(
                              (image: string) =>
                                  image?.split(".")[0].endsWith("F")
                          )}`
                    : "",
            });
            modalActions.openModal();
        } else {
            if (!productData) alert("Something went wrong. Please try again.");
            if (!selectedSize) setAlertText("Please select size.");
        }
    }, [
        cartActions,
        id,
        productData,
        selectedColor,
        selectedSize,
        modalActions,
    ]);

    return (
        <div className={clsx(styles["detail__float"])}>
            <div className={clsx(styles["detail__back"])}>
                {selectedMenu && (
                    <Link href={selectedMenu.path} className="btn btn-back">
                        <span></span>
                        {selectedMenu?.depth3 ||
                            selectedMenu?.depth2 ||
                            selectedMenu?.depth1}
                    </Link>
                )}
            </div>
            <div className={styles["detail__collections"]}>
                {productData &&
                    (productData.collections4 ||
                        productData.collections3 ||
                        productData.collections2 ||
                        productData.collections1)}
            </div>
            <div className={styles["detail__name"]}>
                <h2>{productData && productData.name}</h2>
            </div>
            <div className={styles["detail__price"]}>
                ${productData && productData.price}.00
            </div>
            <div>
                <ProductDetailOptions
                    id={id}
                    productData={productData}
                    handleSizeInput={handleSizeInput}
                    selectedMenu={selectedMenu}
                    selectedSize={selectedSize}
                    alertText={alertText}
                />
            </div>
            <div className={styles["detail__cart"]}>
                <button
                    className="btn btn-grey"
                    type="button"
                    onClick={handleAddToCart}
                >
                    <span>ADD TO CART</span>
                </button>
            </div>
            <ProudctTextContents productData={productData} />
        </div>
    );
}
