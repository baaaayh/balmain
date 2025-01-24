import clsx from "clsx";
import CardTitleButtons from "@/app/components/common/card-title-buttons";
import styles from "@/app/styles/common/card-title.module.scss";
import { LinkButtonType } from "@/type";

export default function CardTitle({
    title,
    buttons,
}: {
    title: string;
    buttons: Array<LinkButtonType>;
}) {
    return (
        <div className={clsx(styles["card-container"])}>
            <div className={clsx(styles["card-container__inner"])}>
                <div className={clsx(styles["card-title"])}>
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                    <div className={clsx(styles["card-title__link"])}>
                        <ul>
                            {buttons.map((button, index) => (
                                <CardTitleButtons
                                    key={`${button.buttonText}-${index}`}
                                    buttonText={button.buttonText}
                                    linkString={button.linkString}
                                    buttonColorClass={button.buttonColorClass}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
