export default function ListPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="contents">{children}</div>;
}
