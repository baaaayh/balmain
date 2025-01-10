"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/main/key-visual.module.scss";
import CardTitle from "@/app/components/common/card-title";

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
                    <Link href="/" className={clsx(styles["kv__container"])}>
                        <video
                            preload="auto"
                            loop
                            muted
                            playsInline
                            autoPlay
                            poster="/images/main/main-poster.avif"
                        >
                            {/* <source
                                src="/videos/kv_desktop.webm"
                                type="video/webm"
                                media="(min-width: 901px)"
                            />
                            <source
                                src="/videos/kv_mobile.webm"
                                type="video/webm"
                                media="(max-width: 900px)"
                            /> */}
                        </video>
                    </Link>
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
