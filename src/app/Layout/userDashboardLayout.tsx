"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"

import Header from "@/app/Layout/header/page"
import UserHeader from "@/app/Layout/user-header/page"
import Footer from "@/app/Layout/footer/page"
import SpinnerLoader from "@/components/common/loader/SpinnerLoader"
import { OldAPI } from "@/services/oldService"
import UserSideBar from "@/app/Layout/user-sidebar/page"

const UserDashboardLayout = ({ children }: any) => {
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
        <div className="bg-gray-50">
            {pathname === "/create-resume/formatting" && (
                <UserHeader />
            )}
            <div className="flex">
                {pathname === "/create-resume/formatting" && (
                    <UserSideBar />
                )}
                {loading ? <SpinnerLoader /> : children}
            </div>
        </div>
    )
}

export default UserDashboardLayout