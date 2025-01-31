"use client";
import { useState, useEffect, memo } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import Card from "@/app/components/common/card";
import styles from "@/app/styles/common/card-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMenuData } from "@/app/lib/actions";
import { ProductDataType, MenuDataType } from "@/type";

export default memo(function CardSlider({
    productsData,
}: {
    productsData: Array<ProductDataType>;
}) {
    const [menuData, setMenuData] = useState<MenuDataType[]>([]);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    useEffect(() => {
        async function getGridData() {
            const menuResult = await getMenuData();
            setMenuData(menuResult);
        }
        getGridData();
    }, []);

    return (
        <div className={clsx(styles["slider-container"])}>
            <div className={clsx(styles["slider-container__inner"])}>
                <Slider className={clsx(styles["card-slider"])} {...settings}>
                    {productsData.map((product) => (
                        <Card
                            key={product.menu_id}
                            product={product}
                            menuData={menuData}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
});
