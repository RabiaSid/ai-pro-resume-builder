"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"
import Header from "@/app/Layout/header/page"
import Footer from "@/app/Layout/footer/page"
import SpinnerLoader from "@/components/common/loader/SpinnerLoader"
import { OldAPI } from "@/services/oldService"

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
            {/* {pathname !== "/create-resume/formatting" && ( */}
            <Header />
            {/* )} */}
            {loading ? <SpinnerLoader /> : children}
            {/* {pathname !== "/create-resume/formatting" && ( */}
            <Footer />
            {/* )} */}
        </>
    )
}

export default ConditionalLayout