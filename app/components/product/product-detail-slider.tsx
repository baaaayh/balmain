"use client";
import { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
            setIsSwiperActive(window.innerWidth <= 900);
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
            productData.image_filenames.map(
                (image) =>
                    image && (
                        <div key={image}>
                            <div className={clsx(styles["detail__figure"])}>
                                <Image
                                    src={`/images/products/${productData.base_item_code}/${selectedColor.name}/${image}`}
                                    width={1029}
                                    height={1391}
                                    priority
                                    alt={productData.image_alt}
                                />
                            </div>
                        </div>
                    )
            )
        );
    }, [productData, selectedColor]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {isSwiperActive ? (
                <Slider
                    {...settings}
                    className={clsx(styles["detail__slider"])}
                >
                    {renderImage}
                </Slider>
            ) : (
                <div className={clsx(styles["detail__static"])}>
                    {renderImage}
                </div>
            )}
        </>
    );
}
