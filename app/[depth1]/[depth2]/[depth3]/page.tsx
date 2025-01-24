import ProductDetailPage from "@/app/components/product/product-detail-page";
import ProductListPage from "@/app/components/product/product-list-page";

export default async function Depth3Page({
    params,
}: {
    params: {
        depth1: string;
        depth2: string;
        depth3: string;
    };
}) {
    // const params = useParams();
    const { depth3 } = await params;

    const isProduct = () => {
        if (typeof depth3 === "string") return /^\d+$/.test(depth3);
    };

    return (
        <>
            {isProduct() ? (
                <ProductDetailPage id={Number(depth3)} />
            ) : (
                <ProductListPage />
            )}
        </>
    );
}
