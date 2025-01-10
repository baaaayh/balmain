import Link from "next/link";

export default function LinkButton({
    text,
    linkString,
}: {
    text: string;
    linkString: string;
}) {
    const validLink = linkString ? linkString : "#";
    return (
        <Link href={validLink} className="btn btn-link">
            {text}
        </Link>
    );
}
