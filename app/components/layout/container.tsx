import SideNav from "@/app/components/layout/side-nav";
import MobileNav from "@/app/components/layout/mobile-nav";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className={`container`}>
            <SideNav />
            {children}
            <MobileNav />
        </div>
    );
}
