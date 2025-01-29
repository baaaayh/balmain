"use client";
import { useState, useEffect, useMemo } from "react";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/product/product-detail-slider.module.scss";
import { ProductDetailDataType } from "@/type";

export default function ProductDetailSlider({
    id,
    productData,
}: {
    id: number;
    productData: ProductDetailDataType;
}) {
    const [selectedColor, setSelectedColor] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [isSwiperActive, setIsSwiperActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSwiperActive(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const color =
            productData &&
            productData.colors.find((color) => Number(color.id) === id);
        setSelectedColor(
            color ? { id: color.id.toString(), name: color.name } : null
        );
    }, [productData, id]);

    const renderImage = useMemo(() => {
        return (
            productData &&
            selectedColor &&
            productData.image_filenames.map((image) => (
                <SwiperSlide key={image}>
                    <div className={clsx(styles["detail__figure"])}>
                        <Image
                            src={`/images/products/${productData.base_item_code}/${selectedColor.name}/${image}`}
                            width={1029}
                            height={1391}
                            priority
                            alt={productData.image_alt}
                        />
                    </div>
                </SwiperSlide>
            ))
        );
    }, [productData, selectedColor]);

    return (
        <>
            {isSwiperActive ? (
                <SwiperClass className={clsx(styles["detail__slider"])}>
                    {renderImage}
                </SwiperClass>
            ) : (
                <div className={clsx(styles["detail__static"])}>
                    {renderImage}
                </div>
            )}
        </>
    );
}
