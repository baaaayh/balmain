"use client";
import { useState, memo, useEffect } from "react";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import CardSliderItem from "@/app/components/common/card-slider-item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/styles/common/card.module.scss";
import { ProductDataType } from "@/type";

export default memo(function Card({ product }: { product: ProductDataType }) {
    const [dragging, setDragging] = useState(false);
    const [pathname, setPathname] = useState("");
    const params = useParams();

    useEffect(() => {
        const pathSegments = [
            isNaN(Number(params.depth1)) ? params.depth1 : null,
            isNaN(Number(params.depth2)) ? params.depth2 : null,
            isNaN(Number(params.depth3)) ? params.depth3 : null,
            isNaN(Number(params.id)) ? params.id : null,
        ]
            .filter((segment) => segment !== null && segment !== undefined)
            .join("/");

        setPathname(`/${pathSegments}`);
    }, [params]);

    console.log(pathname);

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

    console.log(pathname);

    return (
        <div className={clsx(styles["card-slider__card"])}>
            <div className={clsx(styles["card-slider__wrap"])}>
                <Image
                    src="/images/dummy/layout.png"
                    width={750}
                    height={1060}
                    priority
                    alt={product.name}
                />
                <div className={clsx(styles["card-slider__gutter"])}>
                    <div className={clsx(styles["card-slider__view"])}>
                        <Link
                            href={
                                product.product_id > 1110
                                    ? "#"
                                    : `${pathname}/${product.product_id}`
                            }
                            className={clsx(styles["card-slider__hero"])}
                        >
                            {product.color &&
                                product.image_filenames
                                    .filter((image) => {
                                        if (image) {
                                            const filename =
                                                image.split(".")[0];
                                            return filename.endsWith("F");
                                        }
                                    })
                                    .map((image) => (
                                        <Image
                                            key={image}
                                            src={
                                                product.product_id > 1110
                                                    ? `/images/dummy/${product.product_id}/${image}`
                                                    : `/images/products/${product.base_item_code}/${product.color}/${image}`
                                            }
                                            width={750}
                                            height={1060}
                                            priority
                                            alt="1945 Soft Moon bag in monogrammed calfskin"
                                        />
                                    ))}
                        </Link>
                        <div className={clsx(styles["card-slider__backface"])}>
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
                        </div>
                        <div className={clsx(styles["card-slider__desc"])}>
                            <Link href="javascript:;">
                                <div
                                    className={clsx(
                                        styles["card-slider__badge"]
                                    )}
                                >
                                    <span>New</span>
                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.color}</p>
                            </Link>
                            <div
                                className={clsx(styles["card-slider__button"])}
                            >
                                <span className="btn btn-link btn-link--bk">
                                    SHOP NOW
                                </span>
                                <span
                                    className={clsx(
                                        styles["card-slider__amount"]
                                    )}
                                >
                                    $2,450.00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
