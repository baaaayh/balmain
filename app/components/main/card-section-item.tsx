import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import CardTitle from "@/app/components/common/card-title";
import styles from "@/app/styles/main/card-section-item.module.scss";
import { CardSectionDataType } from "@/type";

export default function CardSectionItem({
    cardData,
}: {
    cardData: CardSectionDataType;
}) {
    return (
        <div className={clsx(styles["card"])}>
            <Link href="javascript:;">
                <figure>
                    <picture>
                        <source
                            src={cardData.imageUrl_mobile}
                            media="(max-width: 768px)"
                        />
                        <source
                            src={cardData.imageUrl_desktop}
                            media="(min-width: 769px)"
                        />
                        <Image
                            src={cardData.imageUrl_desktop}
                            width={1440}
                            height={1440}
                            priority
                            alt={cardData.title}
                        />
                    </picture>
                </figure>
            </Link>
            <CardTitle
                title={cardData.title}
                buttons={[
                    {
                        text: cardData.buttonText,
                        linkString: cardData.linkString,
                    },
                ]}
            />
        </div>
    );
}
