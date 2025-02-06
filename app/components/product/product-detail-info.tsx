"use client";
import { useState, useEffect, useCallback, ChangeEvent, useRef } from "react";
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
    setHeadHeight,
}: {
    id: number;
    productData: ProductDetailDataType;
    selectedMenu: MenuDataType;
    setHeadHeight: (height: number) => void;
}) {
    const [selectedColor, setSelectedColor] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [alertText, setAlertText] = useState("");
    const { actions } = useCartStore((state) => state);
    const { actions: modalActions } = useModalStore((state) => state);
    const headRef = useRef<HTMLDivElement | null>(null);
    const cartbutton = useRef<HTMLDivElement | null>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

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
            actions.addToCart({
                product_id: id,
                item_code: productData.item_code,
                menu_id: productData.menu_id,
                name: productData.name,
                quantity: 1,
                price: productData.price,
                selectedSize: selectedSize,
                selectedColor: {
                    id: selectedColor.id,
                    name: selectedColor.name,
                },
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
    }, [actions, id, productData, selectedColor, selectedSize, modalActions]);

    useEffect(() => {
        function calcWindowWidth() {
            const width = window.innerWidth;
            setWindowWidth(width);
        }
        calcWindowWidth();

        window.addEventListener("resize", calcWindowWidth);
        return () => window.removeEventListener("resize", calcWindowWidth);
    }, []);

    useEffect(() => {
        function calcHeadHeight() {
            if (windowWidth !== 0 && windowWidth <= 900) {
                const height = headRef.current?.offsetHeight || 0;
                setHeadHeight(height);
            } else {
                setHeadHeight(0);
            }
        }

        calcHeadHeight();
        window.addEventListener("resize", calcHeadHeight);

        return () => window.removeEventListener("resize", calcHeadHeight);
    }, [setHeadHeight, windowWidth]);

    useEffect(() => {
        function windowScrollTop() {
            const st = window.scrollY;
            setScrollTop(st);
        }
        windowScrollTop();

        window.addEventListener("scroll", windowScrollTop);

        return () => window.removeEventListener("scroll", windowScrollTop);
    }, []);

    useEffect(() => {
        const $t = cartbutton.current;
        if (windowWidth !== 0 && windowWidth <= 900) {
            if (scrollTop <= 0) {
                $t?.classList.add(styles["detail__cloned--fixed"]);
            } else {
                $t?.classList.remove(styles["detail__cloned--fixed"]);
            }
        }
    }, [windowWidth, scrollTop]);

    return (
        <div className={clsx(styles["detail__float"])} id="options">
            <div className={clsx(styles["detail__head"])} ref={headRef}>
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
            <div className={styles["detail__cloned"]} ref={cartbutton}>
                <Link href="#options" className="btn btn-grey">
                    <span>ADD TO CART</span>
                </Link>
            </div>

            <ProudctTextContents productData={productData} />
        </div>
    );
}
