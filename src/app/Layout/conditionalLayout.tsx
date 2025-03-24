"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"
import Header from "@/app/Layout/header/page"
import Footer from "@/app/Layout/footer/page"
import SpinnerLoader from "@/components/common/loader/SpinnerLoader"
import { OldAPI } from "@/services/oldService"
import UserHeader from "./user-header/page"
import UserSideBar from "./user-sidebar/page"

const ConditionalLayout = ({ children }: any) => {
    const pathname = usePathname()
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     OldAPI.get("settings-for-website").then((res) => {
    //         console.log(res, "res");
    //         setLoading(false);
    //     });
    // }, []);

    return (
        <>
            <div className={`${pathname === "/create-resume/formatting" ? "bg-gray-50" : null}`}>
                {pathname !== "/create-resume/formatting" ? (
                    <Header />
                ) : <UserHeader />}
                <div className={`${pathname === "/create-resume/formatting" ? "flex" : null}`}>
                    {pathname === "/create-resume/formatting" ? (
                        <UserSideBar />
                    ) : null}
                    {loading ? <SpinnerLoader /> : children}
                </div>
                {pathname !== "/create-resume/formatting" ? (
                    <Footer />
                ) : null}
            </div>
        </>
    )
}

export default ConditionalLayout