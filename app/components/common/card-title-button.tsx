import LinkButton from "@/app/components/common/link-button";

export default function CardTitleButton({
    text,
    linkString,
}: {
    text: string;
    linkString: string;
}) {
    return (
        <li>
            <LinkButton text={text} linkString={linkString} />
        </li>
    );
}
