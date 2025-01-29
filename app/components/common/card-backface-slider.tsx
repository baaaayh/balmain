"use client";
import { useState, memo } from "react";
import Slider from "react-slick";
import CardSliderItem from "@/app/components/common/card-slider-item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductDataType } from "@/type";
export default memo(function CardBackfaceSlider({
    product,
    pathname,
}: {
    product: ProductDataType;
    pathname: string;
}) {
    const [dragging, setDragging] = useState(false);

    const backfaceSettions = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: () => {
            setDragging(true);
        },
        afterChange: () => {
            setDragging(false);
        },
    };

    return (
        <Slider {...backfaceSettions}>
            {product.image_filenames.map((image) => (
                <CardSliderItem
                    key={image}
                    image={image}
                    baseItemCode={product.base_item_code}
                    color={product.color}
                    productId={product.product_id}
                    pathname={pathname}
                    imageAlt={product.image_alt}
                    dragging={dragging}
                />
            ))}
        </Slider>
    );
});
