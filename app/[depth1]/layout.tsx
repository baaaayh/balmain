import SectionSubscribe from "@/app/components/layout/section-subscribe";
import Footer from "@/app/components/layout/footer";

export default function ListPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contents">
            {children}
            <SectionSubscribe />
            <Footer />
        </div>
    );
}
