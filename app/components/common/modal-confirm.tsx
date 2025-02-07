"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useModalStore } from "@/app/lib/store";
import clsx from "clsx";
import styles from "@/app/styles/common/modal-confirm.module.scss";

export default function ModalConfirm() {
    const router = useRouter();
    const handleCloseModal = useCallback(() => {
        useModalStore.setState({ isOpen: false });
    }, []);

    const handleViewMyBag = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            router.push("/cart");
            handleCloseModal();
        },
        [router, handleCloseModal]
    );

    return (
        <div className={clsx(styles["confirm"])}>
            <div className={clsx(styles["confirm__inner"])}>
                <div className={clsx(styles["confirm__head"])}>
                    <h2>
                        <span></span>ADDED TO BAG
                    </h2>
                </div>
                <div className={clsx(styles["confirm__body"])}>
                    <div className={clsx(styles["confirm__button"])}>
                        <button
                            type="button"
                            className="btn btn-grey"
                            onClick={handleViewMyBag}
                        >
                            <span>VIEW MY BAG</span>
                        </button>
                    </div>
                </div>
                <div className={clsx(styles["confirm__footer"])}>
                    <Link href="/" onClick={handleCloseModal}>
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        </div>
    );
}
