import LinkButton from "@/app/components/common/link-button";
import clsx from "clsx";
import styles from "@/app/styles/main/section-reinsurance-item.module.scss";
import { ReinsuranceDataType } from "@/type";

export default function SectionReinsuranceItem({
    data,
}: {
    data: ReinsuranceDataType;
}) {
    return (
        <li className={clsx(styles["reinsurance__item"])}>
            <div className={clsx(styles["reinsurance__inner"])}>
                <h3>{data.title}</h3>
                <p>{data.paragraph}</p>
                <div className={clsx(styles["reinsurance__button"])}>
                    <LinkButton
                        text={data.text}
                        linkString={data.linkString}
                        buttonColorClass={data.buttonColorClass}
                    />
                </div>
            </div>
        </li>
    );
}
