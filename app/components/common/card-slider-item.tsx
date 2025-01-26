"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/common/card-slider-item.module.scss";
import clsx from "clsx";

export default function CardSliderItem({
    image,
    baseItemCode,
    color,
    productId,
    pathname,
    imageAlt,
    dragging,
}: {
    image: string;
    baseItemCode: string;
    color: string;
    productId: number | null;
    pathname: string;
    imageAlt: string;
    dragging: boolean;
}) {
    return (
        <div className={clsx(styles["card-slider__item"])}>
            <Link
                href={
                    productId && productId > 1110
                        ? "#"
                        : `${pathname}/${productId}`
                }
                onClick={(e) => {
                    if (dragging) e.preventDefault();
                }}
            >
                <div className={clsx(styles["card-slider__inner"])}>
                    <Image
                        src={
                            productId && productId > 1110
                                ? `/images/dummy/${productId}/${image}`
                                : `/images/products/${baseItemCode}/${color}/${image}`
                        }
                        width={750}
                        height={1060}
                        priority
                        alt={imageAlt}
                    />
                </div>
            </Link>
        </div>
    );
}
