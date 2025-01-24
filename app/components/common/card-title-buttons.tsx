import LinkButton from "@/app/components/common/link-button";

export default function CardTitleButtons({
    buttonText,
    linkString,
    buttonColorClass,
}: {
    buttonText: string;
    linkString: string;
    buttonColorClass: string;
}) {
    return (
        <li>
            <LinkButton
                buttonText={buttonText}
                linkString={linkString}
                buttonColorClass={buttonColorClass}
            />
        </li>
    );
}
