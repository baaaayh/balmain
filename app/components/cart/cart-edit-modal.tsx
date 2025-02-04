"use client";
import { memo, useEffect, useState, useCallback } from "react";
import { getProductDetailData } from "@/app/lib/actions";
import { useCartEditModalStore, useCartStore } from "@/app/lib/store";
import CartEditModalFigure from "@/app/components/cart/cart-edit-modal-figure";
import CartEditModalSizes from "@/app/components/cart/cart-edit-modal-sizes";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
import { ProductDetailDataType } from "@/type";
import CartEditModalColors from "@/app/components/cart/cart-edit-modal-colors";

export default memo(function CartEditModal() {
    const {
        actions: cartEditModalActions,
        isOpen: cartEditModalState,
        productId,
        selectedColor,
        selectedSize,
    } = useCartEditModalStore((state) => state);
    const { cart, actions } = useCartStore((state) => state);

    const [changedState, setChangedState] = useState({
        productId,
        selectedColor,
        selectedSize: selectedSize || "",
    });
    const [productData, setProductData] =
        useState<ProductDetailDataType | null>(null);

    useEffect(() => {
        setChangedState({
            productId,
            selectedColor,
            selectedSize: selectedSize || "",
        });
    }, [productId, selectedColor, selectedSize]);

    useEffect(() => {
        if (changedState.productId) {
            const fetchProductDetail = async () => {
                try {
                    const result = await getProductDetailData(
                        Number(changedState.productId)
                    );
                    setProductData(result);
                } catch (error) {
                    console.error(
                        "상품 정보를 가져오는데 실패했습니다 : ",
                        error
                    );
                }
            };
            fetchProductDetail();
        }
    }, [changedState.productId]);

    useEffect(() => {
        document.body.style.overflow = cartEditModalState ? "hidden" : "";
    }, [cartEditModalState]);

    const changeProduct = useCallback(
        ({ id, name }: { id: string; name: string }) => {
            setChangedState((prev) => ({
                ...prev,
                productId: Number(id),
                selectedColor: { id: id.toString(), name },
            }));
        },
        []
    );

    const handleSizeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            setChangedState((prev) => ({ ...prev, selectedSize: value }));
        },
        []
    );

    const closeCartEditModal = useCallback(() => {
        cartEditModalActions.closeCartEditModal();
    }, [cartEditModalActions]);

    const updateCart = useCallback(() => {
        const existingItem = cart.find(
            (cartItem) =>
                Number(cartItem.product_id) ===
                    Number(changedState.productId) &&
                cartItem.selectedColor.id ===
                    String(changedState.selectedColor?.id) &&
                cartItem.selectedSize === changedState.selectedSize
        );

        const cartItemIndex = cart.findIndex(
            (item) =>
                Number(item.product_id) === productId &&
                item.selectedColor.id === String(selectedColor?.id) &&
                item.selectedSize === selectedSize
        );

        const thumbUrl = productData?.image_filenames.find((image) =>
            image?.split(".")[0].endsWith("F")
        );

        const newProduct = productData &&
            changedState.selectedColor &&
            changedState.selectedSize && {
                ...productData,
                quantity: 1,
                selectedSize: changedState.selectedSize,
                selectedColor: {
                    id: changedState.selectedColor.id,
                    name: changedState.selectedColor.name,
                },
                thumbUrl: thumbUrl
                    ? `/images/products/${productData.base_item_code}/${changedState.selectedColor.name}/${thumbUrl}`
                    : "",
            };

        const isProductChanged =
            productId !== changedState.productId ||
            selectedColor?.id !== changedState.selectedColor?.id ||
            selectedSize !== changedState.selectedSize;

        if (isProductChanged && newProduct) {
            if (existingItem) {
                actions.removeCartItem(cartItemIndex);
                actions.updateCartQuantity(
                    Number(changedState.productId),
                    existingItem.quantity + cart[cartItemIndex].quantity
                );
            }

            if (cartItemIndex >= 0) {
                actions.changeCartItem(cartItemIndex, newProduct);
            }
        }
        cartEditModalActions.closeCartEditModal();
    }, [
        changedState,
        cartEditModalActions,
        actions,
        productId,
        cart,
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
                        <CartEditModalFigure
                            productData={productData}
                            changedState={changedState}
                        />
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
                                COLOR: {changedState.selectedColor?.name}
                            </div>
                            <CartEditModalColors
                                productData={productData}
                                changeProduct={changeProduct}
                                changedState={changedState}
                            />
                            <CartEditModalSizes
                                productData={productData}
                                handleSizeInput={handleSizeInput}
                                changedState={changedState}
                            />
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
