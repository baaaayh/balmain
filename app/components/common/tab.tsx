import clsx from "clsx";
import styles from "@/app/styles/common/tab.module.scss";

export default function Tab({ tabButtons }: { tabButtons: Array<string> }) {
    return (
        <div className={clsx(styles.tab)}>
            <div className={clsx(styles["tab__inner"])}>
                <ul>
                    {tabButtons.map((button, index) => (
                        <li key={button}>
                            <button
                                type="button"
                                className={clsx(styles["tab__button"], {
                                    [styles["tab__button--active"]]:
                                        index === 0,
                                })}
                            >
                                {button}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
