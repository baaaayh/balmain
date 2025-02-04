"use client";
import { memo, useEffect, useState, useCallback } from "react";
import { getProductDetailData } from "@/app/lib/actions";
import { useCartEditModalStore, useCartStore } from "@/app/lib/store";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
import { ProductDetailDataType } from "@/type";

export default memo(function CartEditModal() {
    const {
        actions: cartEditModalActions,
        isOpen: cartEditModalState,
        productId,
        selectedColor,
        selectedSize,
    } = useCartEditModalStore((state) => state);
    const { cart, actions } = useCartStore((state) => state);
    const [productIdState, setProductIdState] = useState<number | null>(null);
    const [productColorState, setProductColorState] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [productData, setProoductData] =
        useState<ProductDetailDataType | null>(null);
    const [selectedSizeState, setSelectedSizeState] = useState("");

    useEffect(() => {
        setProductIdState(productId);
        setProductColorState(selectedColor);
        setSelectedSizeState(selectedSize || "");
    }, [productId, selectedColor, selectedSize]);

    useEffect(() => {
        async function getProudctDetail() {
            if (productIdState) {
                const result = await getProductDetailData(productIdState);
                setProoductData(result);
            }
        }
        getProudctDetail();
    }, [productIdState]);

    useEffect(() => {
        if (cartEditModalState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [cartEditModalState]);

    const changeProduct = useCallback(
        ({ id, name }: { id: string; name: string }) => {
            setProductIdState(Number(id));
            setProductColorState({ id: id, name });
        },
        []
    );

    const closeCartEditModal = useCallback(() => {
        cartEditModalActions.closeCartEditModal();
    }, [cartEditModalActions]);

    const handleSizeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedSizeState(e.target.value);
        },
        []
    );

    const updateCart = useCallback(() => {
        const cartItemIndex = cart.findIndex((item) => {
            return (
                Number(item.product_id) === productId &&
                item.selectedColor.id === String(selectedColor?.id) &&
                item.selectedSize === selectedSize
            );
        });

        const newProduct = productData &&
            productColorState &&
            selectedSizeState && {
                product_id: productData.product_id,
                item_code: productData.item_code,
                menu_id: productData.menu_id,
                name: productData.name,
                quantity: 1,
                price: productData.price,
                selectedSize: selectedSizeState,
                selectedColor: {
                    id: productColorState.id,
                    name: productColorState.name,
                },
                thumbUrl: productData.image_filenames.find((image: string) =>
                    image?.split(".")[0].endsWith("F")
                )
                    ? productData.product_id > 1110
                        ? `/images/dummy/${
                              productData.product_id
                          }/${productData.image_filenames.find(
                              (image: string) =>
                                  image?.split(".")[0].endsWith("F")
                          )}`
                        : `/images/products/${productData.base_item_code}/${
                              productColorState?.name
                          }/${productData.image_filenames.find(
                              (image: string) =>
                                  image?.split(".")[0].endsWith("F")
                          )}`
                    : "",
            };

        console.log(productId, productIdState, cartItemIndex, newProduct);

        if (
            (productId !== productIdState ||
                selectedColor !== productColorState ||
                selectedSize !== selectedSizeState) &&
            newProduct
        ) {
            actions.changeCartItem(cartItemIndex, newProduct);
        }
    }, [
        actions,
        productId,
        productIdState,
        cart,
        productColorState,
        selectedSizeState,
        productData,
        selectedColor,
        selectedSize,
    ]);

    return (
        <div
            className={clsx(styles["modal-container"], {
                [styles["modal-container--active"]]: cartEditModalState,
                [styles["modal-container--closing"]]: !cartEditModalState,
            })}
        >
            <span className={clsx("dim", styles["dim"])}></span>
            <div className={clsx(styles["edit-modal"])}>
                <div className={clsx(styles["edit-modal__inner"])}>
                    <div className={clsx(styles["edit-modal__left"])}>
                        <div className={clsx(styles["edit-modal__figure"])}>
                            {productData &&
                                productData.image_filenames
                                    .filter((image) => {
                                        if (image) {
                                            const filename =
                                                image.split(".")[0];
                                            return filename.endsWith("F");
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
                                                          productColorState &&
                                                          productColorState.name
                                                      }/${image}`
                                            }
                                            width={568}
                                            height={641}
                                            priority
                                            alt="1945 Soft Moon bag in monogrammed calfskin"
                                        />
                                    ))}
                        </div>
                    </div>
                    <div className={clsx(styles["edit-modal__right"])}>
                        <div className={clsx(styles["edit-modal__title"])}>
                            <h3>{productData && productData.name}</h3>
                        </div>
                        <div className={clsx(styles["edit-modal__price"])}>
                            ${productData && Number(productData.price)}.00
                        </div>
                        <div className={clsx(styles["edit-modal__options"])}>
                            <div
                                className={clsx(styles["edit-modal__selected"])}
                            >
                                COLOR:{" "}
                                {productColorState && productColorState.name}
                            </div>
                            <div className={clsx(styles["edit-modal__colors"])}>
                                <ul>
                                    {productData &&
                                        productData.colors.map((color) => (
                                            <li
                                                key={color.id}
                                                className={clsx(
                                                    styles[
                                                        (styles[
                                                            "edit-modal__color"
                                                        ],
                                                        color.name.toLowerCase())
                                                    ],
                                                    {
                                                        [styles[
                                                            "edit-modal__color--active"
                                                        ]]:
                                                            Number(color.id) ===
                                                            Number(
                                                                productColorState?.id
                                                            ),
                                                    }
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        changeProduct({
                                                            id: String(
                                                                color.id
                                                            ),
                                                            name: color.name,
                                                        })
                                                    }
                                                >
                                                    <span>{color.name}</span>
                                                </button>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className={clsx(styles["edit-modal__sizes"])}>
                                <ul>
                                    {productData &&
                                        [...productData.sizes].map((size) => (
                                            <li key={size}>
                                                <input
                                                    id={size}
                                                    name={"sizes_radio"}
                                                    type="radio"
                                                    value={size}
                                                    onChange={handleSizeInput}
                                                    checked={
                                                        selectedSizeState ===
                                                        size
                                                    }
                                                />
                                                <label htmlFor={size}>
                                                    {size}
                                                </label>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-grey"
                                onClick={updateCart}
                            >
                                <span>UPDATE</span>
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={closeCartEditModal}
                        className={clsx(styles["edit-modal__close"])}
                    >
                        <span>CLOSE</span>
                    </button>
                </div>
            </div>
        </div>
    );
});
