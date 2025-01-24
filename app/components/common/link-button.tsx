import Link from "next/link";

export default function LinkButton({
    buttonText,
    linkString,
    buttonColorClass = "",
}: {
    buttonText: string;
    linkString: string;
    buttonColorClass: string | null;
}) {
    const validLink = linkString ? linkString : "#";
    return (
        <Link href={validLink} className={`btn btn-link ${buttonColorClass}`}>
            {buttonText}
        </Link>
    );
}
