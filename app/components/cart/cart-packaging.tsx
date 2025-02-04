"use client";
import { memo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-packaging.module.scss";
export default memo(function CartPackaging() {
    const [option, setOption] = useState("simple");
    return (
        <div className={clsx(styles["cart-packaging"])}>
            <div className={clsx(styles["cart-packaging__head"])}>
                <h3>PACKAGING AND GIFT WRAPPING</h3>
            </div>
            <div className={clsx(styles["cart-packaging__list"])}>
                <ul>
                    <li>
                        <div className={clsx(styles["cart-packaging__inner"])}>
                            <div
                                className={clsx(
                                    styles["cart-packaging__figure"]
                                )}
                            >
                                <Image
                                    src="/images/cart/basic_packaging.avif"
                                    width={197}
                                    height={180}
                                    priority
                                    alt="Simple Packaging"
                                />
                            </div>
                            <div
                                className={clsx(styles["cart-packaging__text"])}
                            >
                                <div
                                    className={clsx(
                                        styles["cart-packaging__option"]
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="packagingOptions"
                                        id="simplePackaing"
                                        value={option}
                                        checked={
                                            option === "simple" ? true : false
                                        }
                                        onChange={() => {
                                            setOption("simple");
                                        }}
                                    />
                                    <div>
                                        <label htmlFor="simplePackaing">
                                            Simple Packaging
                                        </label>
                                        <p>
                                            This option uses fewer materials,
                                            making it more environmentally
                                            friendly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={clsx(styles["cart-packaging__inner"])}>
                            <div
                                className={clsx(
                                    styles["cart-packaging__figure"]
                                )}
                            >
                                <Image
                                    src="/images/cart/gift_box.avif"
                                    width={197}
                                    height={180}
                                    priority
                                    alt="Simple Packaging"
                                />
                            </div>
                            <div
                                className={clsx(styles["cart-packaging__text"])}
                            >
                                <div
                                    className={clsx(
                                        styles["cart-packaging__option"]
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="packagingOptions"
                                        id="giftPackaging"
                                        value={option}
                                        checked={
                                            option === "gift" ? true : false
                                        }
                                        onChange={() => {
                                            setOption("gift");
                                        }}
                                    />
                                    <div>
                                        <label htmlFor="giftPackaging">
                                            Gift Wrapping
                                        </label>
                                        <p>
                                            Your items are sent in a signature
                                            Balmain box, with the option of
                                            adding a personalised message.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
});
