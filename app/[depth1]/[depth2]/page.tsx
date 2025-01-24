import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default async function Depth3Page({
    params,
}: {
    params: {
        depth1: string;
        depth2: string;
    };
}) {
    const { depth2 } = await params;

    const isProduct = () => {
        if (typeof depth2 === "string") return /^\d+$/.test(depth2);
    };

    return (
        <>
            {isProduct() ? (
                <ProductDetailPage id={Number(depth2)} />
            ) : (
                <ProductListPage />
            )}
        </>
    );
}
