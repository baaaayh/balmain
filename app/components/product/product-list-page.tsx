"use client";
import SectionSubscribe from "@/app/components/layout/section-subscribe";
import Footer from "@/app/components/layout/footer";

import { MenuProvider } from "@/app/lib/menu-context";
import ProductList from "@/app/components/product/product-list";
export default function ProductListPage() {
    return (
        <MenuProvider>
            <div className="sub-inner">
                <ProductList />
                <SectionSubscribe />
                <Footer />
            </div>
        </MenuProvider>
    );
}
