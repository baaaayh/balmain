import Link from "next/link";

export default function LinkButton({
    text,
    linkString,
    buttonColorClass = "",
}: {
    text: string;
    linkString: string;
    buttonColorClass: string;
}) {
    const validLink = linkString ? linkString : "#";
    return (
        <Link href={validLink} className={`btn btn-link ${buttonColorClass}`}>
            {text}
        </Link>
    );
}
