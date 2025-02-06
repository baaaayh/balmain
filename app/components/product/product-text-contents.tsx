"use client";
import { useState, useCallback } from "react";
import { ProductDetailDataType } from "@/type";
import clsx from "clsx";
import styles from "@/app/styles/product/product-text-contents.module.scss";

export default function ProudctTextContents({
    productData,
}: {
    productData: ProductDetailDataType;
}) {
    const [readMoreState, setReadMoreState] = useState(true);
    const [selectedContents, setSelectedContents] = useState("DESCRIPTION");
    const handleContentsChange = useCallback((text: string) => {
        setSelectedContents(text);
    }, []);
    const [mobReadMoreState, setMobReadMoreState] = useState<{
        desc: boolean;
        delivery: boolean;
        contact: boolean;
    }>({
        desc: false,
        delivery: false,
        contact: false,
    });
    const handleReadMoreState = useCallback(() => {
        setReadMoreState((prev) => !prev);
    }, []);

    const handleMobReadMoreState = useCallback(
        (key: "desc" | "delivery" | "contact") => {
            setMobReadMoreState((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        },
        []
    );

    return (
        <div className={clsx(styles["detail__text"])}>
            <div className={clsx(styles["detail__tab"])}>
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => handleContentsChange("DESCRIPTION")}
                            className={clsx(styles["detail__tabbutton"], {
                                [styles["detail__tabbutton--active"]]:
                                    selectedContents === "DESCRIPTION",
                            })}
                        >
                            DESCRIPTION
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() =>
                                handleContentsChange("DELIVERY AND RETURNS")
                            }
                            className={clsx(styles["detail__tabbutton"], {
                                [styles["detail__tabbutton--active"]]:
                                    selectedContents === "DELIVERY AND RETURNS",
                            })}
                        >
                            DELIVERY AND RETURNS
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => handleContentsChange("CONTACT")}
                            className={clsx(styles["detail__tabbutton"], {
                                [styles["detail__tabbutton--active"]]:
                                    selectedContents === "CONTACT",
                            })}
                        >
                            CONTACT
                        </button>
                    </li>
                </ul>
            </div>
            <div className={clsx(styles["detail__contents"])}>
                <div
                    className={clsx(styles["detail__toggle"], {
                        [styles["detail__toggle--active"]]:
                            selectedContents === "DESCRIPTION",
                    })}
                >
                    <div className={clsx(styles["detail__desc"])}>
                        <div
                            className={clsx(styles["detail__head"])}
                            onClick={() => handleMobReadMoreState("desc")}
                        >
                            <button
                                type="button"
                                className={clsx(styles["detail__headbutton"], {
                                    [styles["detail__headbutton--active"]]:
                                        selectedContents === "DESCRIPTION",
                                })}
                            >
                                DESCRIPTION
                            </button>
                            <span></span>
                        </div>
                        <div
                            className={clsx(styles["detail__box"], {
                                [styles["detail__box--active"]]:
                                    mobReadMoreState.desc,
                            })}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        productData &&
                                        productData.description_contents
                                            .replace(/\\r\\n/g, "")
                                            .replace(/\\n/g, ""),
                                }}
                                className={clsx(styles["detail__desc"], {
                                    [styles["detail__desc--open"]]:
                                        !readMoreState,
                                })}
                            ></div>
                            <div className={clsx(styles["detail__button"])}>
                                <button
                                    type="button"
                                    onClick={handleReadMoreState}
                                >
                                    {readMoreState ? "READ MORE" : "READ LESS"}
                                </button>
                            </div>
                            <div className={clsx(styles["detail__button"])}>
                                <button type="button">SUSTAINABILITY</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(styles["detail__toggle"], {
                        [styles["detail__toggle--active"]]:
                            selectedContents === "DELIVERY AND RETURNS",
                    })}
                >
                    <div
                        className={clsx(styles["detail__head"])}
                        onClick={() => handleMobReadMoreState("delivery")}
                    >
                        <button
                            type="button"
                            className={clsx(styles["detail__headbutton"], {
                                [styles["detail__headbutton--active"]]:
                                    selectedContents === "DELIVERY AND RETURNS",
                            })}
                        >
                            DELIVERY AND RETURNS
                        </button>
                        <span></span>
                    </div>
                    <div
                        className={clsx(styles["detail__box"], {
                            [styles["detail__box--active"]]:
                                mobReadMoreState.delivery,
                        })}
                    >
                        <ul className={clsx(styles["detail__char"])}>
                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--delivery"]
                                    )}
                                ></span>
                                DELIVERY
                                <br />
                                Standard: 4-6&nbsp;working days (Free)
                                <br />
                                Express: 2-4&nbsp;working days (Free)
                                <br />
                                Potential delays to be communicated due to
                                customs-approved treatment.
                                <br />
                            </li>
                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--returns"]
                                    )}
                                ></span>
                                RETURNS
                                <br />
                                All returns are free of charge.
                                <br />
                                For more information, see our
                                <a>return policy</a>
                            </li>

                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--payment"]
                                    )}
                                ></span>
                                SECURE PAYMENT
                                <br />
                                Visa, Mastercard, American Express, Apple Pay,
                                Paypal, Klarna
                            </li>
                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--faq"]
                                    )}
                                ></span>
                                FAQ
                                <br />
                                Looking for information?
                                <a href="https://us.balmain.com/en/page/faq">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={clsx(styles["detail__toggle"], {
                        [styles["detail__toggle--active"]]:
                            selectedContents === "CONTACT",
                    })}
                >
                    <div
                        className={clsx(styles["detail__head"])}
                        onClick={() => handleMobReadMoreState("contact")}
                    >
                        <button
                            type="button"
                            className={clsx(styles["detail__headbutton"], {
                                [styles["detail__headbutton--active"]]:
                                    selectedContents === "CONTACT",
                            })}
                        >
                            CONTACT
                        </button>
                        <span></span>
                    </div>
                    <div
                        className={clsx(styles["detail__box"], {
                            [styles["detail__box--active"]]:
                                mobReadMoreState.contact,
                        })}
                    >
                        <ul className={clsx(styles["detail__char"])}>
                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--email"]
                                    )}
                                ></span>
                                <div>
                                    Send us an
                                    <a href="mailto:contact@customercare.balmain.com">
                                        email
                                    </a>
                                    : our customer care team will get back to
                                    you as soon as possible.
                                </div>
                            </li>
                            <li>
                                <span
                                    className={clsx(
                                        styles["detail__icon"],
                                        styles["detail__icon--telephone"]
                                    )}
                                ></span>
                                <div>
                                    You can also call us on the following number
                                    <a href="tel:+1-646-343-9792">
                                        +1-646-343-9792
                                    </a>
                                    - Monday to Saturday from 9am to 8pm, except
                                    public holidays.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
