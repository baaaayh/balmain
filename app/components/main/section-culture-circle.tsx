import clsx from "clsx";
import Image from "next/image";
import styles from "@/app/styles/main/section-culture-circle.module.scss";
import { CircleDataType } from "@/type";

export default function SectionCultureCircle({
    data,
}: {
    data: CircleDataType;
}) {
    return (
        <div className={clsx(styles["image-circle"])}>
            <div>
                <Image
                    width={150}
                    height={150}
                    src={data.imageUrl}
                    alt={data.title}
                    priority
                />
            </div>
        </div>
    );
}
