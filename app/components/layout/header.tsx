import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/styles/layout/header.module.scss";

export default function Header() {
    return (
        <header className={clsx(styles["header"])}>
            <div className={clsx(styles["header__inner"])}>
                <div className={clsx(styles["header__banner"])}>
                    <div className={clsx(styles["header-slider"])}>
                        <ul>
                            <li>Complimentary shipping for all orders</li>
                        </ul>
                    </div>
                </div>
                <div className={clsx(styles["header__logo"])}>
                    <Link href="/">
                        <Image
                            width={60}
                            height={60}
                            src="/images/common/header_logo_big_w.svg"
                            alt="BALMAIN LOGO"
                            priority
                        ></Image>
                    </Link>
                </div>
            </div>
        </header>
    );
}
