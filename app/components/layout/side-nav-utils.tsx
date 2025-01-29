"use client";
import { useCallback, memo } from "react";
import { useModalStore, useCartStore } from "@/app/lib/store";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-utils.module.scss";

export default memo(function SideNavUtils({
    navState,
    isExpended,
}: {
    navState: boolean;
    isExpended: boolean;
}) {
    const { actions: modalActions } = useModalStore((state) => state);
    const { cart: cartState } = useCartStore((state) => state);

    const openModal = useCallback(() => {
        modalActions.openModal();
    }, [modalActions]);

    return (
        <div
            className={clsx(styles["side-nav__utils"], {
                [styles["side-nav__utils--active"]]: isExpended,
                [styles["side-nav__utils--closing"]]:
                    (!navState && isExpended) || (navState && !isExpended),
            })}
        >
            <div className={clsx(styles["uitils__item"])}>
                <Link href="/" className="btn btn-icon btn-icon--user">
                    <span className="btn btn-icon__text">LOGIN</span>
                    <div className="icon-title">Login</div>
                </Link>
            </div>
            <div className={clsx(styles["utils__right"])}>
                <div className={clsx(styles["uitils__item"])}>
                    <button
                        type="button"
                        className="btn btn-icon btn-icon--search"
                    >
                        <span className="btn btn-icon__text">SEARCH</span>
                    </button>
                </div>
                <div className={clsx(styles["uitils__item"])}>
                    <button
                        type="button"
                        className="btn btn-icon btn-icon--shoppingbag"
                        onClick={openModal}
                    >
                        <span className="btn btn-icon__text">SHOPPING BAG</span>
                        <span className="btn-icon__count">
                            {cartState.length}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
});
