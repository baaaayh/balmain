"use client";
import { memo } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@/app/styles/main/section-culture-circle.module.scss";
import { CircleDataType } from "@/type";

const SectionCultureCircle = memo(function SectionCultureCircle({
    data,
}: {
    data: CircleDataType;
}) {
    return (
        <>
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
        </>
    );
});

export default SectionCultureCircle;
