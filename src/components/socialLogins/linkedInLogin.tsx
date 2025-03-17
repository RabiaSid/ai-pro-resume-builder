import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import LinkedInLogo from "media/assets/link.webp";
import AppButton from "../common/button/pages";
import { clearSessionAndStorages, handleSetToken, handleSetUser } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const LinkedInLogin = () => {
    const dispatch = useDispatch<AppDispatch>();

    const clientId = process.env.NEXT_PUBLIC_linkedIn_app_id;
    const redirectUri = "https://aiproresume.com/login";
    const scope = "openid profile email";
    const state = "foobar";

    const searchParams = useSearchParams();
    const code = searchParams.get("code");

    useEffect(() => {
        if (code) {
            exchangeCodeForToken(code);
        }
    }, [code]);

    const handleLinkedInLogin = () => {
        const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&state=${state}&scope=${encodeURIComponent(scope)}`;
        window.location.href = authUrl;
    };

    const exchangeCodeForToken = async (authCode: string) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_old_Base_URL}/login/linkedin`, { code: authCode, redirect_uri: redirectUri });
            dispatch(clearSessionAndStorages());
            dispatch(handleSetUser(response?.data?.data));
            dispatch(handleSetToken(response?.data?.data?.token));
            console.log("LinkedIn Login Success:", response.data);
        } catch (error: any) {
            console.error("LinkedIn login error:", error.response?.data?.message || error.message);
        }
    };

    return (
        <AppButton title='Sign-in with LinkendIn' onClick={handleLinkedInLogin}
            className="w-[100%] border border-solid text-gray-400 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
            childClassName="sm:tracking-widest relative"
            leftIcon={
                <>
                    <Image
                        src={LinkedInLogo}
                        alt="My Image"
                        width={25}
                        height={25}
                        className="mr-2"
                    />
                </>
            }
        />
    );
};

export default LinkedInLogin;
