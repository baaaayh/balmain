import Link from "next/link";
import clsx from "clsx";
import styles from "@/app/styles/layout/side-nav-footer.module.scss";

export default function SideNavFooter({
    navState,
    isExpended,
}: {
    navState: boolean;
    isExpended: boolean;
}) {
    return (
        <div
            className={clsx(styles["side-nav__footer"], {
                [styles["side-nav__footer--active"]]: navState,
                [styles["side-nav__footer--closing"]]:
                    (!navState && isExpended) || (navState && !isExpended),
            })}
        >
            <ul>
                <li>
                    <Link
                        href=""
                        className="btn btn-navfoot btn-navfoot--marker"
                    >
                        BOUTIQUES
                    </Link>
                </li>
                <li>
                    <Link
                        href=""
                        className="btn btn-navfoot btn-navfoot--phone"
                    >
                        +1 646 343 9792
                    </Link>
                </li>
            </ul>
        </div>
    );
}
