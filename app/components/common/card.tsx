"use client";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import CardSliderItem from "@/app/components/common/card-slider-item";
import styles from "@/app/styles/common/card.module.scss";
import { ProductDataType } from "@/type";

export default function Card({ product }: { product: ProductDataType }) {
    const pathname = usePathname();

    const backfaceSettions = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

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
                            href={`${pathname}/${product.product_id}`}
                            className={clsx(styles["card-slider__hero"])}
                        >
                            {product.image_filenames
                                .filter((image) => {
                                    const filename = image.split(".")[0];
                                    return filename.endsWith("F");
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
}
