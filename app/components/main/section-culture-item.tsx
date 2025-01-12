"use client";
import { memo } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import styles from "@/app/styles/main/section-culture-circle.module.scss";
import { CircleDataType } from "@/type";

const SectionCultureItem = memo(function SectionCultureItem({
    handleBackground,
    removeBackground,
    data,
}: {
    handleBackground: (tite: string, bg: string) => void;
    removeBackground: () => void;
    data: CircleDataType;
}) {
    return (
        <li key={data.title}>
            <Link
                href="javascript:;"
                onMouseEnter={() => handleBackground(data.title, data.imageUrl)}
                onMouseLeave={removeBackground}
            >
                <div className={clsx(styles["image-circle"])}>
                    <Image
                        width={230}
                        height={230}
                        src={data.imageUrl}
                        alt={data.title}
                        priority
                    />
                </div>
                <h3
                    dangerouslySetInnerHTML={{
                        __html: data.title,
                    }}
                ></h3>
            </Link>
        </li>
    );
});

export default SectionCultureItem;
