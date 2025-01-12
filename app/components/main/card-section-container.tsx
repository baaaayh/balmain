import clsx from "clsx";
import CardSectionItem from "@/app/components/main/card-section-item";
import styles from "@/app/styles/main/card-section-container.module.scss";
import { CardSectionDataType } from "@/type";

export default function CardSectionContainer({
    cardSectionData,
}: {
    cardSectionData: Array<CardSectionDataType>;
}) {
    return (
        <div className={clsx(styles["card-container"])}>
            {cardSectionData.map((data) => (
                <CardSectionItem key={data.title} cardData={data} />
            ))}
        </div>
    );
}
