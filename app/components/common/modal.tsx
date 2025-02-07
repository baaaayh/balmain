"use client";
import { useState, useEffect, useCallback } from "react";
import ModalCart from "@/app/components/common/modal-cart";
import ModalConfirm from "@/app/components/common/modal-confirm";
import clsx from "clsx";
import { useModalStore } from "@/app/lib/store";
import styles from "@/app/styles/common/modal.module.scss";

export default function Modal() {
    const { isOpen: modalState } = useModalStore((state) => state);
    const [windowWidth, setWindowwidth] = useState(0);

    const handleCloseModal = useCallback(() => {
        useModalStore.setState({ isOpen: false });
    }, []);

    useEffect(() => {
        if (modalState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [modalState]);

    useEffect(() => {
        function calcWindowWidth() {
            setWindowwidth(window.innerWidth);
        }
        calcWindowWidth();
        return () => window.addEventListener("resize", calcWindowWidth);
    }, []);

    return (
        <div
            className={clsx(styles["modal-container"], {
                [styles["modal-container--active"]]: modalState,
                [styles["modal-container--closing"]]: !modalState,
            })}
        >
            <span className={clsx("dim", styles["dim"])}></span>
            <div className={clsx(styles["modal"])}>
                <div className={clsx(styles["modal__inner"])}>
                    <div className={clsx(styles["modal__close"])}>
                        <button
                            type="button"
                            className="btn btn-close"
                            onClick={handleCloseModal}
                        ></button>
                    </div>
                    {windowWidth > 900 ? <ModalCart /> : <ModalConfirm />}
                </div>
            </div>
        </div>
    );
}
