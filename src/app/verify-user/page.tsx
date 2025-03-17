'use client'
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import miniLogo from 'media/assets/mini-logo.webp';
import miniAlert from 'media/assets/miniAlert.webp';
import { API } from '@/services/backendService';

const VerifyUserPage = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter();

    useEffect(() => {
        if (token) {
            console.log('Token:', token);
            // You apican call your API here for verification
            useEffect(() => {
                // setLoading(true);
                API.get(`verify-email/${token}`).then((res) => {
                    console.log(res, "resresres");
                    // setLoading(false);
                });
            }, []);
        }
    }, [token]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white border shadow-md rounded-lg p-8 -mt-52 relative w-full max-w-md text-center space-y-5">
                {/* Top Icon */}
                <div className='absolute -top-[60px] left-1/2 transform -translate-x-1/2'>
                    {token ? (
                        <div className='rounded-full shadow-md bg-gray-100 p-4'>
                            <Image
                                src={miniLogo}
                                width={50}
                                height={50}
                                alt='abc'
                            />
                        </div>
                    ) : (
                        <div className='rounded-full shadow-md bg-gray-100 p-4'>
                            <Image
                                src={miniAlert}
                                width={50}
                                height={50}
                                alt='abc'
                            />
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <h1 className="text-2xl font-normal text-primaryBlue">Verify User</h1>

                {token ? (
                    <div className="space-y-3">
                        <p className="text-gray-600">Verifying your account, please wait...</p>
                        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent border-double rounded-full animate-spin mx-auto"></div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-red-500 text-sm">No token found. Please try again.</p>
                        <button
                            onClick={() => router.push('/register')} className="text-primaryBlue text-xs font-normal border-primaryBlue border-b-[1px] cursor-pointer shadow-sm transition"
                        >
                            Back to Register
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyUserPage;
