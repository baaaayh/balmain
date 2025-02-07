"use client";
import { useState, useCallback, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import clsx from "clsx";
import Section from "@/app/components/main/section";
import SectionCultureItem from "@/app/components/main/section-culture-item";
import sectionData from "@/mainData.json";
import styles from "@/app/styles/main/section-culture.module.scss";

export default function SectionCulture() {
    const [altText, setAltText] = useState("");
    const [background, setBackground] = useState<string>(
        "/images/main/circle/portrait_olivierrousteing_2024.avif"
    );
    const [changeBg, setChangeBg] = useState(false);
    const data = sectionData[0].circleSectionData;
    const sliderRef = useRef<Slider | null>(null);

    const previous = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }, []);
    const next = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }, []);

    const handleBackground = useCallback((title: string, bg: string) => {
        setAltText(title);
        setBackground(bg);
        setChangeBg(true);
    }, []);

    const removeBackground = useCallback(() => {
        setAltText("");
        setBackground(
            "/images/main/circle/portrait_olivierrousteing_2024.avif"
        );
        setChangeBg(false);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 6,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        useTransform: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <Section sectionClass={"culture"}>
            <div
                className={clsx(styles["culture"], {
                    [styles["culture--active"]]: changeBg,
                })}
            >
                <div
                    className={clsx(styles["culture__bg"], {
                        [styles["culture__bg--active"]]: changeBg,
                    })}
                >
                    <Image
                        width={1440}
                        height={1440}
                        priority
                        src={background}
                        alt={altText}
                    />
                </div>
                <div className={clsx(styles["culture__inner"])}>
                    <div className={clsx(styles["culture__title"])}>
                        <h2>BALMAIN CULTURE</h2>
                        <div className={clsx(styles["culture__control"])}>
                            <button
                                type="button"
                                className={clsx(styles["culture__prev"])}
                                onClick={previous}
                            >
                                PREV
                            </button>
                            <button
                                type="button"
                                className={clsx(styles["culture__next"])}
                                onClick={next}
                            >
                                NEXT
                            </button>
                        </div>
                    </div>
                    <div className={clsx(styles["culture__contents"])}>
                        <p>
                            Discover the captivating world of Balmain. An
                            invitation to explore the Maison&apos;s bold and
                            timeless creations,
                            <br /> blending heritage and innovation. Since 1945,
                            Balmain has been shaping the future of fashion with
                            passion and
                            <br /> precision.
                        </p>
                        <div className={clsx(styles["circle-list"])}>
                            <Slider
                                ref={sliderRef}
                                {...sliderSettings}
                                className={clsx(
                                    styles["circle-list__container"],
                                    "circle-list__container"
                                )}
                            >
                                {data.map((d, index) => (
                                    <SectionCultureItem
                                        key={index}
                                        handleBackground={handleBackground}
                                        removeBackground={removeBackground}
                                        data={d}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
