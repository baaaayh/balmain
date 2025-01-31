"use client";
import { useState, memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/common/card.module.scss";
import { ProductDataType, MenuDataType } from "@/type";
import CardBackfaceSlider from "./card-backface-slider";

export default memo(function Card({
    product,
    menuData,
}: {
    product: ProductDataType;
    menuData: MenuDataType[];
}) {
    const [pathname, setPathname] = useState("");

    useMemo(() => {
        if (menuData) {
            menuData.forEach((menu) => {
                if (menu.menu_id === Number(product.menu_id)) {
                    setPathname(menu.path);
                }
            });
        }
    }, [menuData, product]);

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
                                    : `${pathname}${product.product_id}`
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
                            <CardBackfaceSlider
                                pathname={pathname}
                                product={product}
                            />
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
