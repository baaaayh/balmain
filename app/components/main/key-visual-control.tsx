"use client";
import clsx from "clsx";
import styles from "@/app/styles/main/key-visual-control.module.scss";

export default function KeyVisualControl({
    handlePauseButton,
    handleNavButton,
}: {
    handlePauseButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleNavButton: (dir: string) => void;
}) {
    return (
        <div className={clsx(styles["kv__control"])}>
            <ul>
                <li>
                    <button
                        type="button"
                        className="btn btn-kvcontrol btn-kvcontrol--pause"
                        onClick={handlePauseButton}
                    >
                        <span>Pause</span>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn btn-kvcontrol btn-kvcontrol--prev"
                        onClick={() => handleNavButton("prev")}
                    >
                        <span>Prev</span>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn btn-kvcontrol btn-kvcontrol--next"
                        onClick={() => handleNavButton("next")}
                    >
                        <span>Next</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
