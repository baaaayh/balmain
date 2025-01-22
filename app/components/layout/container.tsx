import SideNav from "@/app/components/layout/side-nav";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className={`container`}>
            <SideNav />
            {children}
        </div>
    );
}
