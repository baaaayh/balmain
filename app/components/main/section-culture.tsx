import clsx from "clsx";
import SectionCultureCircle from "@/app/components/main/section-culture-circle";
import sectionData from "@/mainData.json";
import styles from "@/app/styles/main/section-culture.module.scss";

export default function SectionCulture() {
    const data = sectionData[0].circleSectionData;

    return (
        <section className="section section--culture">
            <div className="section__inner">
                <h2>BALMAIN CULTURE</h2>
                <p>
                    Discover the captivating world of Balmain. An invitation to
                    explore the Maison&apos;s bold and timeless creations,
                    <br /> blending heritage and innovation. Since 1945, Balmain
                    has been shaping the future of fashion with passion and
                    <br /> precision.
                </p>
                <div className={clsx(styles["circle-list"])}>
                    <ul>
                        {data.map((d) => (
                            <SectionCultureCircle key={d.title} data={d} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
