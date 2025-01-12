export default function Section({
    children,
    sectionClass,
}: {
    children: React.ReactNode;
    sectionClass: string;
}) {
    return (
        <section className={`section section--${sectionClass}`}>
            <div className="section__inner">{children}</div>
        </section>
    );
}
