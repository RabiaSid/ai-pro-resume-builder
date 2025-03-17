"use client"
import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
// import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"

import Header from "@/app/Layout/header/page"
import Footer from "@/app/Layout/footer/page"
import SpinnerLoader from "@/components/common/loader/SpinnerLoader"
import { OldAPI } from "@/services/oldService"

const ConditionalLayout = ({ children }: any) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        OldAPI.get("settings-for-website").then((res) => {
            console.log(res, "res");
            setLoading(false);
        });
    }, []);

    return (
        // <PopupProvider value={{ popup, togglePopup }}>
        //     {pathname !== "/video-explainer-lp" && pathname !== "/animating-studio-lp" && (
        //         <Header />
        //     )}
        <>
            <Header />
            {loading ? <SpinnerLoader /> : children}
            <Footer />
            {/* {pathname !== "/video-explainer-lp" && pathname !== "/animating-studio-lp" && (
                 <Footer />
                 )}
                 {pathname !== '/video-explainer-lp' && <Footer />} 
                </PopupProvider> */}
        </>
    )
}

export default ConditionalLayout