import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/main/key-visual-slider.module.scss";

function KeyVisualSlider() {
    const slides = [
        {
            imgDesktop:
                "/images/main/keyvisual/hp_carrousel_denim_x2_PS25_women_desk.avif",
            imgMobile: "/images/main/hp_carrousel_denim_x2_PS25_women_mob.avif",
            alt: "NEW IN <br> RESORT 2025 COLLECTION",
        },
        {
            imgDesktop:
                "/images/main/keyvisual/hp_carrousel_denim_x2_PS25_women_desk.avif",
            imgMobile: "/images/main/hp_carrousel_denim_x2_PS25_women_mob.avif",
            alt: "NEW IN <br> RESORT 2025 COLLECTION",
        },
    ];

    return (
        <div className={clsx(styles["kv__observe"])}>
            <Swiper
                slidesPerView={"auto"}
                slidesPerGroup={1}
                loop={true}
                speed={800}
                className={clsx(styles[".kv__slider"])}
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
                                        src={slide.imgMobile}
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default KeyVisualSlider;
