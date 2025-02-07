import KeyVisual from "@/app/components/main/key-visual";
import SectionHotNow from "@/app/components/main/section-hot-now";
import CardSection from "@/app/components/main/card-section";
import ModeSwitch from "@/app/components/common/mode-switch";
import SectionCulture from "@/app/components/main/section-culture";
import styles from "@/app/styles/page.module.scss";
import data from "@/mainData.json";
import SectionSubscribe from "@/app/components/layout/section-subscribe";
import SectionReinsurance from "@/app/components/main/section-reinsurance";
import Footer from "@/app/components/layout/footer";

export default function MainPage() {
    return (
        <main className={styles.main}>
            <div className="inner">
                <KeyVisual />
                <SectionHotNow />
                <CardSection cardSectionData={data[0].cardSectionData1} />
                <section className="section">
                    <div className="section__inner">
                        <ModeSwitch />
                    </div>
                </section>
                <CardSection cardSectionData={data[0].cardSectionData2} />
                <SectionCulture />
                <SectionSubscribe />
                <SectionReinsurance />
                <Footer />
            </div>
        </main>
    );
}
