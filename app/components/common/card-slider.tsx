"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/common/card-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
    const backfaceSettions = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const array = [1, 2, 3, 4];

    return (
        <div className={clsx(styles["slider-container"])}>
            <div className={clsx(styles["slider-container__inner"])}>
                <Slider className={clsx(styles["card-slider"])} {...settings}>
                    {array.map((t) => (
                        <div
                            key={t}
                            className={clsx(styles["card-slider__card"])}
                        >
                            <div className={clsx(styles["card-slider__wrap"])}>
                                <Image
                                    src="/images/dummy/layout.png"
                                    width={750}
                                    height={1060}
                                    priority
                                    alt="1945 Soft Moon bag in monogrammed calfskin"
                                />
                                <div
                                    className={clsx(
                                        styles["card-slider__gutter"]
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            styles["card-slider__view"]
                                        )}
                                    >
                                        <Link
                                            href="javascript:;"
                                            className={clsx(
                                                styles["card-slider__hero"]
                                            )}
                                        >
                                            <Image
                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAF.avif"
                                                width={750}
                                                height={1060}
                                                priority
                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                            />
                                        </Link>
                                        <div
                                            className={clsx(
                                                styles["card-slider__backface"]
                                            )}
                                        >
                                            <Slider {...backfaceSettions}>
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__item"
                                                        ]
                                                    )}
                                                >
                                                    <Link href="javascript:;">
                                                        <div
                                                            className={clsx(
                                                                styles[
                                                                    "card-slider__inner"
                                                                ]
                                                            )}
                                                        >
                                                            <Image
                                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAB.avif"
                                                                width={750}
                                                                height={1060}
                                                                priority
                                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__item"
                                                        ]
                                                    )}
                                                >
                                                    <Link href="javascript:;">
                                                        <div
                                                            className={clsx(
                                                                styles[
                                                                    "card-slider__inner"
                                                                ]
                                                            )}
                                                        >
                                                            <Image
                                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAB.avif"
                                                                width={750}
                                                                height={1060}
                                                                priority
                                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__item"
                                                        ]
                                                    )}
                                                >
                                                    <Link href="javascript:;">
                                                        <div
                                                            className={clsx(
                                                                styles[
                                                                    "card-slider__inner"
                                                                ]
                                                            )}
                                                        >
                                                            <Image
                                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAB.avif"
                                                                width={750}
                                                                height={1060}
                                                                priority
                                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__item"
                                                        ]
                                                    )}
                                                >
                                                    <Link href="javascript:;">
                                                        <div
                                                            className={clsx(
                                                                styles[
                                                                    "card-slider__inner"
                                                                ]
                                                            )}
                                                        >
                                                            <Image
                                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAB.avif"
                                                                width={750}
                                                                height={1060}
                                                                priority
                                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__item"
                                                        ]
                                                    )}
                                                >
                                                    <Link href="javascript:;">
                                                        <div
                                                            className={clsx(
                                                                styles[
                                                                    "card-slider__inner"
                                                                ]
                                                            )}
                                                        >
                                                            <Image
                                                                src="/images/dummy/hotnow1/EN1BQ954LETF0PAB.avif"
                                                                width={750}
                                                                height={1060}
                                                                priority
                                                                alt="1945 Soft Moon bag in monogrammed calfskin"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </Slider>
                                        </div>
                                        <div
                                            className={clsx(
                                                styles["card-slider__desc"]
                                            )}
                                        >
                                            <Link href="javascript:;">
                                                <div
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__badge"
                                                        ]
                                                    )}
                                                >
                                                    <span>New</span>
                                                </div>
                                                <h3>
                                                    1945 Soft tote bag in
                                                    crackled calfskin
                                                </h3>
                                                <p>2 Color(s)</p>
                                            </Link>
                                            <div
                                                className={clsx(
                                                    styles[
                                                        "card-slider__button"
                                                    ]
                                                )}
                                            >
                                                <span className="btn btn-link btn-link--bk">
                                                    SHOP NOW
                                                </span>
                                                <span
                                                    className={clsx(
                                                        styles[
                                                            "card-slider__amount"
                                                        ]
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
                    ))}
                </Slider>
            </div>
        </div>
    );
}
