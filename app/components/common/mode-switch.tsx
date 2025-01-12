import clsx from "clsx";
import ModeButton from "@/app/components/common/mode-button";
import styles from "@/app/styles/common/mode-switch.module.scss";

export default function ModeSwitch() {
    return (
        <div className={clsx(styles["mode-switch"])}>
            <ModeButton />
        </div>
    );
}
