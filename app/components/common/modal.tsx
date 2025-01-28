"use client";
import ModalCart from "@/app/components/common/modal-cart";
import clsx from "clsx";
import { useModalStore } from "@/app/lib/store";
import styles from "@/app/styles/common/modal.module.scss";

export default function Modal() {
    const { isOpen: modalState } = useModalStore((state) => state);
    return (
        <div
            className={clsx(styles["modal-container"], {
                [styles["modal-container--active"]]: modalState,
            })}
        >
            <span className={clsx(styles["dim"])}></span>
            <div className={clsx(styles["modal"])}>
                <div className={clsx(styles["modal__inner"])}>
                    <ModalCart />
                </div>
            </div>
        </div>
    );
}
