import clsx from "clsx";
import styles from "@/app/styles/main/main-section-title.module.scss";

export default function MainSectionTitle({ title }: { title: string }) {
    return <h2 className={clsx(styles["section-title"])}>{title}</h2>;
}
