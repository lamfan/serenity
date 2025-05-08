"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

interface HeaderProps {
    currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
        setIsMobileMenuOpen(false);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => {
        return currentPath === path;
    };

    return (
        <>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

            <header
                className={`py-6 px-8 flex justify-between items-center w-full z-30 ${
                    currentPath === "/" ? "absolute md:relative bg-transparent md:bg-transparent" : "bg-gray-900"
                }`}
            >
                <div className="text-2xl font-bold tracking-tighter text-white relative z-30 flex items-center">
                    <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
                    <Link href="/">Serenity</Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="/"
                        className={`text-white hover:text-gray-300 transition ${
                            isActive("/") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/meditate"
                        className={`text-white hover:text-gray-300 transition ${
                            isActive("/meditate") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Meditate
                    </Link>
                    {/* <Link
                        href="/sleep"
                        className={`text-white hover:text-gray-300 transition ${
                            isActive("/sleep") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Sleep
                    </Link>
                    <Link
                        href="/music"
                        className={`text-white hover:text-gray-300 transition ${
                            isActive("/music") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Music
                    </Link> */}
                    <Link
                        href="/contact"
                        className={`text-white hover:text-gray-300 transition ${
                            isActive("/contact") ? "border-b-2 border-white pb-1" : ""
                        }`}
                    >
                        Contact Us
                    </Link>
                </nav>
                <div className="hidden md:block">
                    <button
                        onClick={openLoginModal}
                        className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-gray-900 transition"
                    >
                        Sign In
                    </button>
                </div>
                <button className="block md:hidden text-white relative z-30" onClick={toggleMobileMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* 移动端菜单 */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-20 flex flex-col items-center justify-center">
                        <div className="space-y-6 text-center">
                            <Link
                                href="/"
                                className={`block text-xl text-white hover:text-gray-300 transition ${
                                    isActive("/") ? "font-bold" : ""
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/meditate"
                                className={`block text-xl text-white hover:text-gray-300 transition ${
                                    isActive("/meditate") ? "font-bold" : ""
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Meditate
                            </Link>
                            <Link
                                href="/contact"
                                className={`block text-xl text-white hover:text-gray-300 transition ${
                                    isActive("/contact") ? "font-bold" : ""
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <button
                                onClick={openLoginModal}
                                className="mt-4 text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-gray-900 transition"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
