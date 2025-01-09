import Header from "@/app/components/layout/header";
import KeyVisual from "@/app/components/main/key-visual";
import styles from "@/app/styles/page.module.scss";

export default function MainPage() {
    return (
        <main className={styles.main}>
            <Header />
            <div className="inner">
                <KeyVisual />
            </div>
        </main>
    );
}
