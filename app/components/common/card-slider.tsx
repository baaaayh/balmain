"use client";
import Slider from "react-slick";
import clsx from "clsx";
import Card from "@/app/components/common/card";
import styles from "@/app/styles/common/card-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductDataType } from "@/type";

export default function CardSlider({
    productsData,
}: {
    productsData: Array<ProductDataType>;
}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={clsx(styles["slider-container"])}>
            <div className={clsx(styles["slider-container__inner"])}>
                <Slider className={clsx(styles["card-slider"])} {...settings}>
                    {productsData.map((product) => (
                        <Card key={product.menu_id} product={product} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
