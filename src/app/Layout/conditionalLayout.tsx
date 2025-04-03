"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { PopupProvider } from "./configs/store/Popup"
import Header from "@/app/Layout/header/page";
import Footer from "@/app/Layout/footer/page";
import SpinnerLoader from "@/components/common/loader/SpinnerLoader";
import { OldAPI } from "@/services/oldService";
import UserSideBar from "./user-sidebar/page";
import UserHeader from "./user-header/userHeader";

const ConditionalLayout = ({ children }: any) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   OldAPI.get("settings-for-website").then((res) => {
  //     console.log(res, "res");
  //     setLoading(false);
  //   });
  // }, []);

  const [currentState, setCurrentState] = useState<any>({
    fontSize: "20px",
    fontWeight: "normal",
    color: "#294452",
    selectedIndex: 0,
    text: "Hello, world!",
    fontFamily: "Arial",
    margin: 0,
    padding: "8px",
  });

  const [history, setHistory] = useState<any[]>([currentState]);
  const [future, setFuture] = useState<any[]>([]);

  const updateState = (newState: any) => {
    if (JSON.stringify(currentState) !== JSON.stringify(newState)) {
      setHistory([...history, currentState]);
      setCurrentState(newState);
      setFuture([]);
    }
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const lastState = history[history.length - 1];
      setCurrentState(lastState);
      setFuture([currentState, ...future]);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setCurrentState(nextState);
      setHistory([...history, nextState]);
      setFuture(future.slice(1));
    }
  };

  return (
    <>
      <div
        className={`${pathname === "/create-resume/formatting" ? "bg-[#f3f4f6]" : null
          }`}
      >
        {pathname === "/create-resume/formatting" || pathname === "/formatting-new" ? <UserHeader
          currentState={currentState}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          history={history}
          future={future}
        /> : <Header />}
        
        <div
          className={`${pathname === "/create-resume/formatting" ? "flex" : null
            }`}
        >
          {pathname === "/create-resume/formatting" ? <UserSideBar /> : null}
          {loading ? <SpinnerLoader /> : children}
        </div>
        {pathname === "/create-resume/formatting" || pathname === "/formatting-new" ? null : <Footer />}
      </div>
    </>
  );
};

export default ConditionalLayout;
