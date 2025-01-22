"use client";
// import { useNavState } from "@/app/lib/nav-state-context";
import SideNav from "@/app/components/layout/side-nav";

export default function Container({ children }: { children: React.ReactNode }) {
    // const { navState } = useNavState();

    return (
        <div className={`container`}>
            <SideNav />
            {children}
        </div>
    );
}
