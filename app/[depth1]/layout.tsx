"use client";
import { memo, useEffect } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
export default memo(function ListPageLayout() {
    const { selectedMenuId } = useMenuContext();

    useEffect(() => {
        console.log(selectedMenuId);
    }, [selectedMenuId]);
    return <div className="product-list"></div>;
});
