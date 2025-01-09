import clsx from "clsx";
import styles from "@/app/styles/main/kv.module.scss";

export default function KeyVisual() {
    return (
        <section className="section section--kv">
            <div className="section__inner">
                <div className={clsx(styles.kv)}>
                    <div className={clsx(styles["kv__container"])}>
                        <video
                            preload="auto"
                            loop
                            muted
                            playsInline
                            poster="/images/main/BALMAIN_HOLIDAY25_CUTDOWN_EDIT_2_16Х9_no_logo_1_1.avif"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
}
