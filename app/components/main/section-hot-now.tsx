"use client";
import { useState, useEffect } from "react";
import MainSectionTitle from "@/app/components/main/main-section-title";
import Section from "@/app/components/main/section";
import Tab from "@/app/components/common/tab";
import CardSlider from "@/app/components/common/card-slider";
import { getGridProductData } from "@/app/lib/actions";
import { ProductDataType } from "@/type";

export default function SectionHotNow() {
    const [randomData, setRandomData] = useState<Array<ProductDataType>>([]);

    useEffect(() => {
        async function getRandomData() {
            const productResult = await getGridProductData();
            setRandomData(productResult);
        }
        getRandomData();
    }, []);

    return (
        <Section sectionClass={"hottnow"}>
            <MainSectionTitle title="HOT NOW" />
            <Tab tabButtons={["1945 BAGS"]} />
            <CardSlider productsData={randomData} />
        </Section>
    );
}
