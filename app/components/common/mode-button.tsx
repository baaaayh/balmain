import clsx from "clsx";
import styles from "@/app/styles/common/mode-button.module.scss";

export default function ModeButton() {
    return (
        <button type="button" className={clsx(styles["mode-button"])}>
            <span></span>
            <b>NIGHT MODE</b>
        </button>
    );
}
