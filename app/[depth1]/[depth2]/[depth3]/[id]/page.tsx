import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default async function Depth4Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const isProduct = () => {
        if (typeof Number(id) === "number") return /^\d+$/.test(id);
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
