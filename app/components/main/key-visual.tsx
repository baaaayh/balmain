"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import KeyVisualSlider from "@/app/components/main/key-visual-slider";
import CardTitle from "@/app/components/common/card-title";
import styles from "@/app/styles/main/key-visual.module.scss";

export default function KeyVisual() {
    const [isChange, setIsChange] = useState(false);
    const scrollTopRef = useRef(0);

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

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleVisualMotion]);

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
                        <KeyVisualSlider />
                    </div>
                    <CardTitle
                        title="NEW IN <br />  RESORT 2025 COLLECTION"
                        buttons={[
                            {
                                text: "FOR WOMEN",
                                linkString: "javascript:;",
                            },
                            {
                                text: "FOR MEN",
                                linkString: "javascript:;",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
