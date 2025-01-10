import MainSectionTitle from "@/app/components/main/main-section-title";
import Tab from "@/app/components/common/tab";
import CardSlider from "@/app/components/common/card-slider";

export default function SectionHotNow() {
    return (
        <section className="section section--hownow section--hidden">
            <div className="section__inner">
                <MainSectionTitle title="HOT NOW" />
                <Tab tabButtons={["1945 BAGS"]} />
                <CardSlider />
            </div>
        </section>
    );
}
