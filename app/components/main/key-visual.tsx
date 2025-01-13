"use client";
import { useState, useEffect, useRef, useCallback, RefObject } from "react";
import clsx from "clsx";
import { Swiper } from "swiper/types";
import KeyVisualSlider from "@/app/components/main/key-visual-slider";
import KeyVisualControl from "@/app/components/main/key-visual-control";
import styles from "@/app/styles/main/key-visual.module.scss";

export default function KeyVisual() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isChange, setIsChange] = useState<boolean | null>(null);
    const scrollTopRef = useRef(0);
    const kvSliderRef = useRef<Swiper | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const [init, setInit] = useState<boolean>(false);

    const handleVisualMotion = useCallback(() => {
        if (scrollTopRef.current > 0) {
            setIsChange(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            scrollTopRef.current = window.scrollY;
            handleVisualMotion();
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleVisualMotion]);

    const handlePauseButton = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (
                (e.target as HTMLElement).classList.contains(
                    "btn-kvcontrol--play"
                )
            ) {
                (e.target as HTMLElement).classList.remove(
                    "btn-kvcontrol--play"
                );
                setIsPlaying(true);
            } else {
                (e.target as HTMLElement).classList.add("btn-kvcontrol--play");
                setIsPlaying(false);
            }
        },
        []
    );

    const handleNavButton = useCallback((dir: string) => {
        if (dir === "prev") {
            kvSliderRef.current?.slidePrev();
        } else {
            kvSliderRef.current?.slideNext();
        }
    }, []);

    useEffect(() => {
        setInit(true);
    }, []);

    return (
        <section className="section section--kv">
            <h2 className="ir">BALMAIN KEY VISUAL</h2>
            <div
                className={clsx(styles.kv, {
                    [styles["kv--active"]]: isChange,
                })}
            >
                <div className={clsx(styles["kv__inner"])}>
                    <div className={clsx(styles["kv__container"])}>
                        <KeyVisualSlider
                            kvSliderRef={kvSliderRef as RefObject<Swiper>}
                            isPlaying={isPlaying}
                            paginationRef={paginationRef}
                            init={init}
                        />
                    </div>

                    <KeyVisualControl
                        handlePauseButton={handlePauseButton}
                        handleNavButton={handleNavButton}
                    />
                </div>
                <div
                    ref={paginationRef}
                    className={clsx(styles["kv__pagination"])}
                ></div>
            </div>
        </section>
    );
}
