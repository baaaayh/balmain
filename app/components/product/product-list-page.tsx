"use client";
import { MenuProvider } from "@/app/lib/menu-context";
import ProductList from "@/app/components/product/product-list";
import ProductListTitle from "@/app/components/product/product-list-title";
export default function ProductListPage() {
    return (
        <MenuProvider>
            <ProductListTitle />
            <ProductList />
        </MenuProvider>
    );
}
