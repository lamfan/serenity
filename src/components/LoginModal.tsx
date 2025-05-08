"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [localIsOpen, setLocalIsOpen] = useState(isOpen);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true); // true for login, false for register
    const [showComingSoon, setShowComingSoon] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLocalIsOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        const handleOpenEvent = () => {
            setLocalIsOpen(true);
        };

        if (modalElement) {
            modalElement.addEventListener("openLoginModal", handleOpenEvent);

            return () => {
                modalElement.removeEventListener("openLoginModal", handleOpenEvent);
            };
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Show coming soon message instead of actual login/register
        setShowComingSoon(true);
    };

    const handleClose = () => {
        setLocalIsOpen(false);
        setShowComingSoon(false);
        onClose();
    };

    const handleSocialLogin = () => {
        setShowComingSoon(true);
    };

    if (!localIsOpen) return null;

    return (
        <div
            data-modal="login"
            ref={modalRef}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
            {/* Coming Soon Popup */}
            {showComingSoon && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-10 p-6">
                    <div className="bg-gray-800 p-8 rounded-xl max-w-sm w-full text-center">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 mx-auto text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                        <p className="text-gray-300 mb-6">
                            We're still working on this feature. Please check back later!
                        </p>
                        <button
                            onClick={() => setShowComingSoon(false)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            <div
                className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-auto overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <div className="relative">
                    <button
                        className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
                        onClick={handleClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Title */}
                <div className="px-6 pt-10 pb-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{isLogin ? "Welcome Back" : "Join Serenity"}</h3>
                    <p className="text-gray-400">
                        {isLogin
                            ? "Sign in to your account to continue"
                            : "Create an account to start your meditation journey"}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {isLogin && (
                        <div className="text-right">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-400 hover:text-blue-300 transition"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition duration-300"
                    >
                        {isLogin ? "Sign In" : "Register"}
                    </button>

                    <div className="text-center text-gray-400 pt-2">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                type="button"
                                className="ml-2 text-blue-400 hover:text-blue-300 transition"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </p>
                    </div>

                    {/* Social login options */}
                    <div className="pt-4">
                        <div className="relative flex items-center">
                            <div className="flex-grow border-t border-gray-600"></div>
                            <span className="mx-3 flex-shrink text-gray-400">Or continue with</span>
                            <div className="flex-grow border-t border-gray-600"></div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <button
                                type="button"
                                className="flex-1 py-3 rounded-lg border border-gray-600 text-white hover:bg-gray-700 transition"
                                onClick={handleSocialLogin}
                            >
                                <span className="flex justify-center items-center">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                                        />
                                    </svg>
                                    Facebook
                                </span>
                            </button>
                            <button
                                type="button"
                                className="flex-1 py-3 rounded-lg border border-gray-600 text-white hover:bg-gray-700 transition"
                                onClick={handleSocialLogin}
                            >
                                <span className="flex justify-center items-center">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                                        />
                                    </svg>
                                    Google
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
