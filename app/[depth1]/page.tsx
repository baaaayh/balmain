import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default async function Depth3Page({
    params,
}: {
    params: Promise<{ depth1: string }>;
}) {
    const { depth1 } = await params;

    const isProduct = () => {
        if (typeof depth1 === "string") return /^\d+$/.test(depth1);
    };

    return (
        <>
            {isProduct() ? (
                <ProductDetailPage id={Number(depth1)} />
            ) : (
                <ProductListPage />
            )}
        </>
    );
}
