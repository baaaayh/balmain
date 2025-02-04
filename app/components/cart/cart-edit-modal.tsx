"use client";
import { memo } from "react";
import clsx from "clsx";
import styles from "@/app/styles/cart/cart-edit-modal.module.scss";
export default memo(function CartEditModal() {
    return (
        <div className={clsx(styles["modal-container"])}>
            <div className={clsx(styles["edit-modal"])}>
                <div className={clsx(styles["edit-modal__inner"])}>
                    <div className={clsx(styles["edit-modal__left"])}>
                        <div
                            className={clsx(styles["edit-modal__figure"])}
                        ></div>
                    </div>
                    <div className={clsx(styles["edit-modal__right"])}>
                        <div
                            className={clsx(styles["edit-modal__title"])}
                        ></div>
                        <div className={clsx(styles["edit-modal__options"])}>
                            <div
                                className={clsx(styles["edit-modal__price"])}
                            ></div>
                            <div
                                className={clsx(styles["edit-modal__size"])}
                            ></div>
                        </div>
                        <div className={clsx(styles["edit-modal__button"])}>
                            <button type="button">
                                <span>UPDATE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
