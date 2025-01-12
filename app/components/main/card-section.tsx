import CardSectionContainer from "@/app/components/main/card-section-container";
import Section from "@/app/components/main/section";
import { CardSectionDataType } from "@/type";

export default function CardSection({
    cardSectionData,
}: {
    cardSectionData: Array<CardSectionDataType>;
}) {
    return (
        <Section sectionClass={"card"}>
            <CardSectionContainer cardSectionData={cardSectionData} />
        </Section>
    );
}
