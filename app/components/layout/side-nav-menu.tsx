import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-menu.module.scss";

export default function SideNavMenu({
    navState,
    isExpended,
}: {
    navState: boolean;
    isExpended: boolean;
}) {
    return (
        <nav
            className={clsx(styles["menu"], {
                [styles["menu--active"]]: isExpended,
                [styles["menu--closing"]]:
                    (!navState && isExpended) || (navState && !isExpended),
            })}
        >
            <ul>
                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        WOMEN
                    </button>
                </li>
                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        MEN
                    </button>
                </li>
                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        BAGS
                    </button>
                </li>
                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        SNEAKERS
                    </button>
                </li>

                <li className={clsx(styles["menu__item"])}>
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        EYEWEAR
                    </button>
                </li>
                <li
                    className={clsx(
                        styles["menu__item"],
                        styles["menu__item--border"]
                    )}
                >
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        KIDS
                    </button>
                </li>
                <li
                    className={clsx(
                        styles["menu__item"],
                        styles["menu__item--border"]
                    )}
                >
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        BEAUTY
                    </button>
                </li>
                <li
                    className={clsx(
                        styles["menu__item"],
                        styles["menu__item--grey"]
                    )}
                >
                    <button
                        type="button"
                        className={clsx(styles["menu__depth1"])}
                    >
                        BALMAIN CULTURE
                    </button>
                </li>
            </ul>
        </nav>
    );
}
