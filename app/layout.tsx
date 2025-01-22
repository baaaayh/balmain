import type { Metadata } from "next";
import Container from "@/app/components/layout/container";
import { MenuProvider } from "@/app/lib/menu-context";
import "@/app/styles/globals.scss";

export const metadata: Metadata = {
    title: "***dev***Balmain Official Website United States | Designer clothing & bags",
    description:
        "Explore Balmain’s luxury collection of designer clothing and discover what it means to exude elegance, sophistication and impeccable taste.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={``}>
                <div className="wrap">
                    <MenuProvider>
                        <Container>{children}</Container>
                    </MenuProvider>
                </div>
            </body>
        </html>
    );
}
