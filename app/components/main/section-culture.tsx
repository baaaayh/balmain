"use client";
import { useState, useCallback } from "react";
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
                    <h2>BALMAIN CULTURE</h2>
                    <p>
                        Discover the captivating world of Balmain. An invitation
                        to explore the Maison&apos;s bold and timeless
                        creations,
                        <br /> blending heritage and innovation. Since 1945,
                        Balmain has been shaping the future of fashion with
                        passion and
                        <br /> precision.
                    </p>
                    <div className={clsx(styles["circle-list"])}>
                        <ul>
                            {data.map((d, index) => (
                                <SectionCultureItem
                                    key={index}
                                    handleBackground={handleBackground}
                                    removeBackground={removeBackground}
                                    data={d}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}
