import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProductDataType {
    product_id: number;
    item_code: string;
    menu_id: number;
    name: string;
    quantity: number;
    price: number;
    selectedSize: string;
    selectedColor: {
        id: string;
        name: string;
    };
    thumbUrl: string;
}

interface CartState {
    user: string;
    isLoggedIn: boolean;
    cart: CartProductDataType[];
    actions: {
        addToCart: (product: CartProductDataType) => void;
        changeCartItem: (index: number, product: CartProductDataType) => void;
        removeCartItem: (product_id: number) => void;
        updateCartQuantity: (productId: number, quantity: number) => void;
        clearCart: () => void;
    };
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            user: "guest",
            isLoggedIn: false,
            cart: [],
            actions: {
                addToCart: (product: CartProductDataType) => {
                    set(() => {
                        const existingProduct = get().cart.find((cartItem) => {
                            return (
                                cartItem.product_id === product.product_id &&
                                cartItem.selectedColor.name ===
                                    product.selectedColor.name &&
                                cartItem.selectedSize === product.selectedSize
                            );
                        });

                        if (existingProduct) {
                            return {
                                ...get(),
                                cart: get().cart.map((cartItem) => ({
                                    ...cartItem,
                                    quantity: cartItem.quantity + 1,
                                })),
                            };
                        } else {
                            return {
                                ...get(),
                                cart: [
                                    ...get().cart,
                                    { ...product, quantity: 1 },
                                ],
                            };
                        }
                    });
                },
                removeCartItem: (product_id: number) => {
                    set(() => ({
                        ...get(),
                        cart: get().cart.filter(
                            (cartItem) => cartItem.product_id !== product_id
                        ),
                    }));
                },
                updateCartQuantity: (productId: number, quantity: number) => {
                    set(() => ({
                        ...get(),
                        cart: get().cart.map((cartItem) =>
                            cartItem.product_id === productId
                                ? {
                                      ...cartItem,
                                      quantity: Math.max(1, quantity),
                                  }
                                : cartItem
                        ),
                    }));
                },
                changeCartItem: (
                    index: number,
                    changedItem: CartProductDataType
                ) => {
                    set(() => ({
                        ...get(),
                        cart: get().cart.map((cartItem, cartItemIndex) => {
                            return cartItemIndex === index
                                ? {
                                      ...changedItem,
                                      quantity: Math.max(1, cartItem.quantity),
                                  }
                                : cartItem;
                        }),
                    }));
                },
                clearCart: () => {
                    set(() => ({
                        ...get(),
                        cart: [],
                    }));
                },
            },
        }),
        {
            name: "balmain-cart-store",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                cart: state.cart,
            }),
        }
    )
);

export interface ModalState {
    isOpen: boolean;
}

export interface ModalActions extends ModalState {
    actions: {
        openModal: () => void;
        closeModal: () => void;
        toggleModal: () => void;
    };
}

export const useModalStore = create<ModalActions>((set) => ({
    isOpen: false,
    actions: {
        openModal: () => {
            set(() => ({ isOpen: true }));
        },
        closeModal: () => {
            set(() => ({ isOpen: false }));
        },
        toggleModal: () => {
            set((state) => ({ isOpen: !state.isOpen }));
        },
    },
}));

export interface CartEditModalState {
    isOpen: boolean;
    productId: number | null;
    selectedColor: { id: string; name: string } | null;
    selectedSize: string | null;
}

export interface CartEditModalActions extends CartEditModalState {
    actions: {
        openCartEditModal: (
            product_id: number,
            color: { id: string; name: string },
            size: string
        ) => void;
        closeCartEditModal: () => void;
    };
}

export const useCartEditModalStore = create<CartEditModalActions>((set) => ({
    isOpen: false,
    productId: null,
    selectedColor: null,
    selectedSize: null,
    actions: {
        openCartEditModal: (product_id, color, size) => {
            set(() => ({
                isOpen: true,
                productId: Number(product_id),
                selectedColor: color,
                selectedSize: size,
            }));
        },
        closeCartEditModal: () => {
            set(() => ({
                isOpen: false,
                productId: null,
                selectedColor: null,
                selectedSize: null,
            }));
        },
    },
}));
