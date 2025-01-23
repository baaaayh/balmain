import MainSectionTitle from "@/app/components/main/main-section-title";
import Section from "@/app/components/main/section";
import Tab from "@/app/components/common/tab";
import CardSlider from "@/app/components/common/card-slider";
import mainData from "@/mainData.json";

export default function SectionHotNow() {
    return (
        <Section sectionClass={"hottnow"}>
            <MainSectionTitle title="HOT NOW" />
            <Tab tabButtons={["1945 BAGS"]} />
            <CardSlider productsData={mainData[0].hotNowData} />
        </Section>
    );
}
