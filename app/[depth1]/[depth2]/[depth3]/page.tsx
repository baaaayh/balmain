"use client";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default function Depth3Page() {
    const params = useParams();
    const { depth3 } = params;

    const isProduct = useMemo(() => {
        if (typeof depth3 === "string") return /^\d+$/.test(depth3);
    }, [depth3]);

    return <>{isProduct ? <ProductDetailPage /> : <ProductListPage />}</>;
}
