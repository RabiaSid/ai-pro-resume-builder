import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "media/assets/logo_resume.webp";

export default function UserHeader() {
    return (
        <header className="antialiased border-b">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 ">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        {/* Logo */}
                        <Link href="/" className="flex ">
                            <Image src={Logo} alt="Logo" width={90} height={20} className="logo pe-2" />
                        </Link>

                    </div>
                    <div className="flex items-center lg:order-2 ">
                        <p>right side</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
