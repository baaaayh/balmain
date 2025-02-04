"use client";
import { useReducer, useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/app/lib/store";
import ProductGridSection from "@/app/components/common/product-grid-section";
import CartContainer from "@/app/components/cart/cart-container";
import CartTotal from "@/app/components/cart/cart-total";
import CartPackaging from "@/app/components/cart/cart-packaging";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart.module.scss";

interface ToggleState {
    contact: boolean;
    delivery: boolean;
}

interface Action {
    type: "contact" | "delivery";
}

function reducer(state: ToggleState, action: Action): ToggleState {
    switch (action.type) {
        case "contact":
            return { ...state, contact: !state.contact };
        case "delivery":
            return { ...state, delivery: !state.delivery };
        default:
            return state;
    }
}

export default function Cart() {
    const { cart: cartList } = useCartStore((state) => state);

    const [toggleState, dispatch] = useReducer(reducer, {
        contact: true,
        delivery: true,
    });

    const contactContentRef = useRef<HTMLUListElement>(null);
    const deliveryContentRef = useRef<HTMLUListElement>(null);

    const [contactHeight, setContactHeight] = useState(
        contactContentRef.current?.scrollHeight
    );
    const [deliveryHeight, setDeliveryHeight] = useState(
        deliveryContentRef.current?.scrollHeight
    );

    const handleToggle = useCallback((type: "contact" | "delivery") => {
        dispatch({ type });
    }, []);

    useEffect(() => {
        if (toggleState.contact) {
            setContactHeight(contactContentRef.current?.scrollHeight);
        } else {
            setContactHeight(0);
        }
        if (toggleState.delivery) {
            setDeliveryHeight(deliveryContentRef.current?.scrollHeight);
        } else {
            setDeliveryHeight(0);
        }
    }, [toggleState]);

    return (
        <>
            <div className={clsx(styles["cart"])}>
                <div className={clsx(styles["cart__inner"])}>
                    {cartList.length > 0 ? (
                        <div className={clsx(styles["cart__order"])}>
                            <div className={clsx(styles["cart__left"])}>
                                <CartContainer cartList={cartList} />
                                <CartPackaging />
                                <div className={clsx(styles["cart__checkout"])}>
                                    <Link href="/" className="btn btn-grey">
                                        <span>CHECKOUT</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={clsx(styles["cart__right"])}>
                                <CartTotal cartList={cartList} />
                                <div
                                    className={clsx(styles["cart__content"], {
                                        [styles["cart__content--active"]]:
                                            toggleState.contact,
                                    })}
                                >
                                    <h2>
                                        <button
                                            type="button"
                                            className={clsx(
                                                styles["cart__toggle"]
                                            )}
                                            onClick={() =>
                                                handleToggle("contact")
                                            }
                                        >
                                            CONTACT
                                        </button>
                                    </h2>
                                    <ul
                                        ref={contactContentRef}
                                        style={{
                                            height: `${contactHeight}px`,
                                        }}
                                    >
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles["cart-icon--email"]
                                                )}
                                            ></span>
                                            <div>
                                                Send us an
                                                <a href="mailto:contact@customercare.balmain.com">
                                                    email
                                                </a>
                                                : our customer care team will
                                                get back to you as soon as
                                                possible.
                                            </div>
                                        </li>
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles["cart-icon--phone"]
                                                )}
                                            ></span>
                                            <div>
                                                You can also call us on the
                                                following number
                                                <a
                                                    href="tel:+1-646-343-9792"
                                                    aria-label="+1. 6 4 6. 3 4 3. 9 7 9 2."
                                                >
                                                    +1-646-343-9792
                                                </a>
                                                - Monday to Saturday from 9am to
                                                8pm, except public holidays.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={clsx(styles["cart__content"], {
                                        [styles["cart__content--active"]]:
                                            toggleState.delivery,
                                    })}
                                >
                                    <h2>
                                        <button
                                            type="button"
                                            className={clsx(
                                                styles["cart__toggle"]
                                            )}
                                            onClick={() =>
                                                handleToggle("delivery")
                                            }
                                        >
                                            DELIVERY AND RETURNS
                                        </button>
                                    </h2>
                                    <ul
                                        ref={deliveryContentRef}
                                        style={{
                                            height: `${deliveryHeight}px`,
                                        }}
                                    >
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles[
                                                        "cart-icon--delivery"
                                                    ]
                                                )}
                                            ></span>
                                            <div>
                                                DELIVERY
                                                <br />
                                                Standard delivery made within
                                                4-6&nbsp;working days (Free)
                                                <br />
                                                Express delivery made within
                                                2-4&nbsp;working days (Free)
                                                <br />
                                                Potential delays to be
                                                communicated due to
                                                customs-approved treatment
                                                <br />
                                            </div>
                                        </li>
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles["cart-icon--returns"]
                                                )}
                                            ></span>
                                            <div>
                                                RETURNS
                                                <br />
                                                All returns are free of charge.
                                                For more information, see our{" "}
                                                <button type="button">
                                                    return policy
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles["cart-icon--payment"]
                                                )}
                                            ></span>

                                            <div>
                                                SECURE PAYMENT
                                                <br />
                                                Visa, Mastercard, American
                                                Express, Apple Pay, Paypal,
                                                Klarna
                                            </div>
                                        </li>
                                        <li>
                                            <span
                                                className={clsx(
                                                    styles["cart-icon"],
                                                    styles["cart-icon--faq"]
                                                )}
                                            ></span>
                                            <div>
                                                FAQ
                                                <br />
                                                Looking for information?{" "}
                                                <a href="https://us.balmain.com/en/page/faq">
                                                    FAQ
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={clsx(styles["cart__empty"])}>
                            <h2>YOUR BAG IS EMPTY</h2>
                            <div className={clsx(styles["cart__button"])}>
                                <Link href="/" className="btn btn-grey">
                                    <span>CONTINUE SHOPPING</span>
                                </Link>
                            </div>
                        </div>
                    )}
                    <ProductGridSection title="YOU MAY ALSO LIKE" />
                </div>
            </div>
        </>
    );
}
