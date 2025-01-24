"use client";
import { useEffect, RefObject } from "react";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import CardTitle from "@/app/components/common/card-title";
import styles from "@/app/styles/main/key-visual-slider.module.scss";

export default function KeyVisualSlider({
    kvSliderRef,
    isPlaying,
    paginationRef,
    init,
}: {
    kvSliderRef: RefObject<Swiper>;
    isPlaying: boolean;
    paginationRef: RefObject<HTMLElement | null>;
    init: boolean;
}) {
    const slides = [
        {
            imgDesktop:
                "/images/main/keyvisual/hp_carrousel_joliemadame_leather_rubber_PS25_desk.avif",
            imgMobile:
                "/images/main/keyvisual/hp_carrousel_jmrubber_B_PS25_mob.avif",
            alt: "JOLIE MADAME BAGS <br> AN ODE TO BALMAIN HERITAGE WITH AN UNIQUE VISION",
        },
        {
            imgDesktop:
                "/images/main/keyvisual/hp_carrousel_unicorn_x2_PS25_desk.avif",
            imgMobile:
                "/images/main/keyvisual/hp_carrousel_unicorn_loveletter_PS25_mob.avif",
            alt: "UNICORN SNEAKERS <br> THE HOUSE'S ICONICS",
        },
    ];

    useEffect(() => {
        if (kvSliderRef.current) {
            if (isPlaying) {
                kvSliderRef.current.autoplay?.start();
            } else {
                kvSliderRef.current.autoplay?.stop();
            }
        }
    }, [isPlaying, kvSliderRef]);

    return (
        <div className={clsx(styles["kv__observe"])}>
            {init && (
                <SwiperClass
                    modules={[Autoplay, Pagination]}
                    observer={true}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                        kvSliderRef.current = swiper;
                    }}
                    pagination={{
                        el: paginationRef.current,
                    }}
                    className={clsx(styles["kv__slider"])}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={"slide" + index}
                            className={clsx(styles["kv__item"])}
                        >
                            <div className={clsx(styles["kv__figure"])}>
                                <Link href="javascript:;">
                                    <picture>
                                        <source
                                            srcSet={slide.imgMobile}
                                            media="(max-width: 768px)"
                                        />
                                        <Image
                                            src={slide.imgDesktop}
                                            width={1440}
                                            height={810}
                                            priority
                                            alt={slide.alt}
                                        />
                                    </picture>
                                </Link>
                                <CardTitle
                                    title="NEW IN <br />  RESORT 2025 COLLECTION"
                                    buttons={[
                                        {
                                            buttonText: "FOR WOMEN",
                                            linkString: "javascript:;",
                                            buttonColorClass: "",
                                        },
                                        {
                                            buttonText: "FOR MEN",
                                            linkString: "javascript:;",
                                            buttonColorClass: "",
                                        },
                                    ]}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperClass>
            )}
        </div>
    );
}
