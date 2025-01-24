import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default async function Depth3Page({
    params,
}: {
    params: {
        depth1: string;
        depth2: string;
        depth3: string;
        id: string;
    };
}) {
    const { id } = await params;

    const isProduct = () => {
        if (typeof id === "string") return /^\d+$/.test(id);
    };

    return (
        <>
            {isProduct() ? (
                <ProductDetailPage id={Number(id)} />
            ) : (
                <ProductListPage />
            )}
        </>
    );
}
