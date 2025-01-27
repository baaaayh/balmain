"use client";
import { MenuProvider } from "@/app/lib/menu-context";
import ProductList from "@/app/components/product/product-list";
export default function ProductListPage() {
    return (
        <MenuProvider>
            <div className="sub-inner">
                <ProductList />
            </div>
        </MenuProvider>
    );
}
