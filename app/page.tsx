import Header from "@/app/components/layout/header";
import KeyVisual from "@/app/components/main/key-visual";
import SectionHotNow from "@/app/components/main/section-hot-now";

import styles from "@/app/styles/page.module.scss";

export default function MainPage() {
    return (
        <main className={styles.main}>
            <Header />
            <div className="inner">
                <KeyVisual />
                <SectionHotNow />
                <div style={{ fontSize: "30px" }}>
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                    a;lskdfj;asldf
                    <br />
                </div>
            </div>
        </main>
    );
}
