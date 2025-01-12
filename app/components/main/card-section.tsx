import CardSectionContainer from "@/app/components/main/card-section-container";
import { CardSectionDataType } from "@/type";

export default function CardSection({
    cardSectionData,
}: {
    cardSectionData: Array<CardSectionDataType>;
}) {
    return (
        <section className="section section--card">
            <div className="section__inner">
                <CardSectionContainer cardSectionData={cardSectionData} />
            </div>
        </section>
    );
}
