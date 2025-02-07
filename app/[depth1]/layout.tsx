import Header from "@/app/components/layout/header";
export default function ListPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contents">
            <Header />
            {children}
        </div>
    );
}
