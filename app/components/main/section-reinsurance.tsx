import clsx from "clsx";
import Section from "@/app/components/main/section";
import SectionReinsuranceItem from "@/app/components/main/section-reinsurance-item";

import styles from "@/app/styles/main/section-reinsurance.module.scss";
import data from "@/mainData.json";

export default function SectionReinsurance() {
    const reinsuraceData = data[0].reinsuranceData;

    return (
        <Section sectionClass={"reinsurance"}>
            <h2 className="ir">REINSURANCE</h2>
            <div className={clsx(styles["reinsurance"])}>
                <ul className={clsx(styles["reinsurance__container"])}>
                    {reinsuraceData.map((d) => (
                        <SectionReinsuranceItem key={d.title} data={d} />
                    ))}
                </ul>
            </div>
        </Section>
    );
}
