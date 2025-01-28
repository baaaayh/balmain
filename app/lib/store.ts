import { create } from "zustand";
import { CartProductDataType } from "@/type";

export interface CartState {
    user: string;
    isLoggedIn: boolean;
    cart: CartProductDataType[];
}

export interface CartStore extends CartState {
    actions: ActionsType["actions"];
}

export interface ActionsType {
    actions: {
        addToCart: (product: CartProductDataType) => void;
        removeCartItem: (productId: number) => void;
        updateCartQuantity: (productId: number, quantity: number) => void;
        clearCart: () => void;
    };
}

export const useCartStore = create<CartStore>((set) => {
    return {
        user: "guest",
        isLoggedIn: false,
        cart: [],
        actions: {
            addToCart: (product: CartProductDataType) => {
                set((state: CartState) => {
                    const existingProduct = state.cart.find(
                        (cartItem: CartProductDataType) =>
                            cartItem.product_id === product.product_id
                    );

                    if (existingProduct) {
                        return {
                            cart: state.cart.map(
                                (cartItem: CartProductDataType) => {
                                    return {
                                        ...cartItem,
                                        quantity: cartItem.quantity + 1,
                                    };
                                }
                            ),
                        };
                    } else {
                        return {
                            cart: [...state.cart, { ...product, quantity: 1 }],
                        };
                    }
                });
            },
            removeCartItem: (product_id: number) => {
                set((state: CartState) => ({
                    cart: state.cart.filter(
                        (cartItem) => cartItem.product_id !== product_id
                    ),
                }));
            },
            updateCartQuantity: (productId: number, quantity: number) => {
                set((state: CartState) => ({
                    cart: state.cart.map((cartItem) =>
                        cartItem.product_id === productId
                            ? {
                                  ...cartItem,
                                  quantity: cartItem.quantity + quantity,
                              }
                            : cartItem
                    ),
                }));
            },
            clearCart: () => {
                set(() => ({
                    cart: [],
                }));
            },
        },
    };
});

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
            set(() => ({ isOpen: true }));
        },
        toggleModal: () => {
            set((state) => ({ isOpen: !state.isOpen }));
        },
    },
}));
