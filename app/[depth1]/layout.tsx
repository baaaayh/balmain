"use client";
export default function ListPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="product-list">{children}</div>;
}
