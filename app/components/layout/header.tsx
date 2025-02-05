"use client";
import {
    useState,
    useEffect,
    useRef,
    memo,
    useLayoutEffect,
    useCallback,
} from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import clsx from "clsx";
import styles from "@/app/styles/layout/header.module.scss";

export default memo(function Header() {
    const [fadeOut, setFadeOut] = useState(false);
    const scrollTopRef = useRef(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef<Slider | null>(null);
    const slideRefs = useRef<HTMLElement[]>([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        function handleLogo() {
            scrollTopRef.current = window.scrollY;
            setFadeOut(scrollTopRef.current > 0);
        }

        window.addEventListener("scroll", handleLogo);
        return () => window.removeEventListener("scroll", handleLogo);
    }, []);

    const updateSliderWidth = (newIndex: number) => {
        const currentSlide = slideRefs.current[newIndex];
        if (currentSlide) {
            const newWidth = currentSlide.getBoundingClientRect().width;
            setSliderWidth(newWidth);

            const sliderElement = sliderRef.current?.innerSlider?.list;
            if (sliderElement) {
                sliderElement.style.width = `${newWidth}px`;
            }
        }
    };

    const headerSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        beforeChange: (_oldIndex: number, newIndex: number) => {
            updateSliderWidth(newIndex);
        },
        afterChange: (current: number) => {
            setCurrentSlideIndex(current);
        },
    };

    useLayoutEffect(() => {
        const handleInit = () => {
            setTimeout(() => {
                if (sliderRef.current) {
                    const initialSlideIndex = 0;
                    setCurrentSlideIndex(initialSlideIndex);
                    updateSliderWidth(initialSlideIndex);
                }
            }, 0);
        };
        handleInit();

        const handleResize = () => {
            updateSliderWidth(currentSlideIndex);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentSlideIndex]);

    const closeBanner = useCallback(() => {
        setShowBanner(false);
    }, []);

    return (
        <header className={clsx(styles["header"])}>
            <div className={clsx(styles["header__inner"])}>
                <div
                    className={clsx(styles["header__rolling"], {
                        [styles["header__rolling--close"]]: !showBanner,
                    })}
                >
                    <div
                        className={clsx(styles["header__banner"])}
                        style={{
                            width: sliderWidth || "auto",
                        }}
                    >
                        <Slider
                            ref={sliderRef}
                            {...headerSliderSettings}
                            className={clsx(styles["header-slider"])}
                        >
                            {[
                                "Complimentary shipping for all orders",
                                "Complimentary express shipping for all orders",
                                "Subscribe to our Newsletter",
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className={clsx(
                                        styles["header-slider__item"]
                                    )}
                                    ref={(el) => {
                                        if (el) {
                                            slideRefs.current[index] = el;
                                        }
                                    }}
                                >
                                    <p>{text}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <button
                        type="button"
                        className={clsx(styles["header__close"])}
                        onClick={closeBanner}
                    >
                        CLOSE
                    </button>
                </div>
                <div
                    className={clsx(styles["full-logo"], {
                        [styles["full-logo--fadeout"]]: fadeOut,
                    })}
                >
                    <Image
                        width={500}
                        height={145}
                        src="/images/common/logo-lg-w.svg"
                        priority
                        alt="BALMAIN PARIS"
                    />
                </div>
                <div className={clsx(styles["header__logo"])}>
                    <Link href="/">
                        <Image
                            width={60}
                            height={60}
                            src="/images/common/header_logo_big_w.svg"
                            alt="BALMAIN LOGO"
                            priority
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
});
