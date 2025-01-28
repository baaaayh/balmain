"use client";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import ProudctTextContents from "@/app/components/product/product-text-contents";
import ProductDetailSection from "@/app/components/product/product-detail-section";
import ProductDetailOptions from "@/app/components/product/product-detail-options";
import { getProductDetailData, getSelectedMenuData } from "@/app/lib/actions";
import { useCartStore, useModalStore } from "@/app/lib/store";
import { MenuDataType, ProductDetailDataType } from "@/type";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-page.module.scss";

export default function ProductDetailPage({ id }: { id: number }) {
    const [productData, setProductData] =
        useState<ProductDetailDataType | null>(null);
    const [selectedColor, setSelectedColor] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [selectedMenu, setSelectedMenu] = useState<MenuDataType | null>(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [alertText, setAlertText] = useState("");
    const { actions: cartActions, cart: cartState } = useCartStore(
        (state) => state
    );
    const { actions: modalActions } = useModalStore((state) => state);

    useEffect(() => {
        async function getDetailData() {
            const result = await getProductDetailData(id);
            setProductData(result);
        }
        getDetailData();
    }, [id]);

    useEffect(() => {
        const color =
            productData &&
            productData.colors.find((color) => Number(color.id) === id);
        setSelectedColor(
            color ? { id: color.id.toString(), name: color.name } : null
        );
    }, [productData, id]);

    useEffect(() => {
        async function getSelectedMenu() {
            const result = await (productData &&
                getSelectedMenuData(Number(productData?.menu_id)));
            if (result) {
                setSelectedMenu(result[0]);
            }
        }
        getSelectedMenu();
    }, [productData]);

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

    console.log(cartState);

    return (
        <>
            {productData && (
                <div className={clsx(styles["detail-container"])}>
                    <div className={clsx(styles["detail"])}>
                        <div className={clsx(styles["detail__left"])}>
                            <SwiperClass
                                className={clsx(styles["detail__slider"])}
                            >
                                {productData &&
                                    selectedColor &&
                                    productData.image_filenames.map((image) => (
                                        <SwiperSlide key={image}>
                                            <div
                                                className={clsx(
                                                    styles["detail__figure"]
                                                )}
                                            >
                                                <Image
                                                    src={`/images/products/${productData.base_item_code}/${selectedColor.name}/${image}`}
                                                    width={1029}
                                                    height={1391}
                                                    priority
                                                    alt={productData.image_alt}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </SwiperClass>
                        </div>
                        <div className={clsx(styles["detail__right"])}>
                            <div className={clsx(styles["detail__float"])}>
                                <div className={clsx(styles["detail__back"])}>
                                    {selectedMenu && (
                                        <Link
                                            href={selectedMenu.path}
                                            className="btn btn-back"
                                        >
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
                                        className="btn btn-addcart"
                                        type="button"
                                        onClick={handleAddToCart}
                                    >
                                        <span>ADD TO CART</span>
                                    </button>
                                </div>
                                <ProudctTextContents
                                    productData={productData}
                                />
                            </div>
                        </div>
                    </div>
                    <ProductDetailSection title={"COMPLETE THE LOOK"} />
                    <ProductDetailSection title={"YOU MAY ALSO LIKE"} />
                </div>
            )}
        </>
    );
}
