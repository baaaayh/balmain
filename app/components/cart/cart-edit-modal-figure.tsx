"use client";
import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
import { ProductDetailDataType, ChangedStateType } from "@/type";

export default memo(function CartEditModalFigure({
    productData,
    changedState,
    selectedColor,
}: {
    productData: ProductDetailDataType | null;
    changedState: ChangedStateType | null;
    selectedColor: { id: string; name: string } | null;
}) {
    return (
        <div className={clsx(styles["edit-modal__figure"])}>
            {productData?.image_filenames
                .filter((image) => {
                    if (image) {
                        return image?.split(".")[0].endsWith("F");
                    }
                })
                .map((image) => (
                    <Image
                        key={image}
                        src={
                            productData.product_id > 1110
                                ? `/images/dummy/${productData.product_id}/${image}`
                                : `/images/products/${
                                      productData.base_item_code
                                  }/${
                                      changedState?.selectedColor?.name ||
                                      selectedColor
                                  }/${image}`
                        }
                        width={568}
                        height={641}
                        priority
                        alt="1945 Soft Moon bag in monogrammed calfskin"
                    />
                ))}
        </div>
    );
});
