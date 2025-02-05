import LinkButton from "@/app/components/common/link-button";
import clsx from "clsx";
import styles from "@/app/styles/main/section-reinsurance-item.module.scss";
export default function SectionReinsuranceItem({
    data: { title, paragraph, buttons },
}: {
    data: {
        title: string;
        paragraph: string;
        buttons: Array<{
            buttonText: string;
            linkString: string;
            buttonColorClass: string;
        }>;
    };
}) {
    const { buttonText, linkString, buttonColorClass } = buttons[0];
    return (
        <li className={clsx(styles["reinsurance__item"])}>
            <div className={clsx(styles["reinsurance__inner"])}>
                <h3>{title}</h3>
                <p>{paragraph}</p>
                <div className={clsx(styles["reinsurance__button"])}>
                    <LinkButton
                        buttonText={buttonText}
                        linkString={linkString}
                        buttonColorClass={buttonColorClass}
                    />
                </div>
            </div>
        </li>
    );
}
