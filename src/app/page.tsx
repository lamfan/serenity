"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const pathname = usePathname();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);

    // 使用useEffect处理滚动逻辑，避免服务器端和客户端渲染差异
    useEffect(() => {
        const slider = scrollContainerRef.current;
        if (!slider) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        // 鼠标事件
        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            slider.style.cursor = "grabbing";
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const onMouseLeave = () => {
            isDown = false;
            slider.style.cursor = "grab";
        };

        const onMouseUp = () => {
            isDown = false;
            slider.style.cursor = "grab";
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // 滚动速度
            slider.scrollLeft = scrollLeft - walk;
        };

        // 触摸事件
        const onTouchStart = (e: TouchEvent) => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const onTouchEnd = () => {
            isDown = false;
        };

        const onTouchCancel = () => {
            isDown = false;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // 滚动速度
            slider.scrollLeft = scrollLeft - walk;
        };

        // 滚动指示器更新
        const onScroll = () => {
            const scrollPosition = slider.scrollLeft;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const scrollPercentage = scrollPosition / maxScroll;

            // 获取所有指示器点
            const dots = document.querySelectorAll(".scroll-indicator");
            if (dots.length === 0) return;

            // 清除所有活动状态
            dots.forEach((dot) => {
                dot.classList.remove("bg-blue-500");
                dot.classList.add("bg-gray-600");
            });

            // 根据滚动百分比激活对应的点
            if (scrollPercentage < 0.33) {
                dots[0].classList.add("bg-blue-500");
                dots[0].classList.remove("bg-gray-600");
            } else if (scrollPercentage < 0.66) {
                dots[1].classList.add("bg-blue-500");
                dots[1].classList.remove("bg-gray-600");
            } else {
                dots[2].classList.add("bg-blue-500");
                dots[2].classList.remove("bg-gray-600");
            }
        };

        // 添加事件监听器
        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mouseleave", onMouseLeave);
        slider.addEventListener("mouseup", onMouseUp);
        slider.addEventListener("mousemove", onMouseMove);

        slider.addEventListener("touchstart", onTouchStart, { passive: false });
        slider.addEventListener("touchend", onTouchEnd);
        slider.addEventListener("touchcancel", onTouchCancel);
        slider.addEventListener("touchmove", onTouchMove, { passive: false });

        slider.addEventListener("scroll", onScroll);

        // 初始设置光标为可抓取状态
        slider.style.cursor = "grab";

        // 清理函数
        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mouseleave", onMouseLeave);
            slider.removeEventListener("mouseup", onMouseUp);
            slider.removeEventListener("mousemove", onMouseMove);

            slider.removeEventListener("touchstart", onTouchStart);
            slider.removeEventListener("touchend", onTouchEnd);
            slider.removeEventListener("touchcancel", onTouchCancel);
            slider.removeEventListener("touchmove", onTouchMove);

            slider.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPath={pathname} />

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative pt-24 md:pt-0">
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Background Video */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src="/mp4/bg-meditation.mp4" type="video/mp4" />
                        {/* 备用背景图 */}
                        <div className="absolute inset-0 bg-[url('/images/ocean.jpg')] bg-cover bg-center"></div>
                    </video>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto p-30">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Inner Peace</h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
                        Begin your journey to mental wellbeing with meditation, focus music, and guided breathing
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/meditate"
                            className="bg-white text-gray-900 rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition text-lg"
                        >
                            Start Meditating
                        </Link>
                        <button
                            onClick={() => setShowComingSoon(true)}
                            className="bg-transparent border-2 border-white text-white rounded-full px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition text-lg"
                        >
                            Sign Up Free
                        </button>
                    </div>
                </div>
            </main>

            {/* Coming Soon Popup */}
            {showComingSoon && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
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

            {/* 过渡部分 */}
            <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 w-full">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                        Begin Your <span className="text-gray-400">Meditation Journey</span>
                    </h2>

                    {/* 可拖动滚动容器 */}
                    <div
                        className="scrollbar-hide relative overflow-x-auto pb-6 -mx-4 px-4"
                        id="scrollContainer"
                        ref={scrollContainerRef}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="flex space-x-8 min-w-max">
                            {/* 卡片1 */}
                            <div className="relative w-72 h-96 flex-shrink-0 overflow-hidden group select-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/70 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-xl border border-white/10"></div>
                                <div className="absolute inset-0 opacity-5 bg-[url('/images/ocean.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                                <div className="relative p-6 flex flex-col h-full justify-between z-10 rounded-3xl">
                                    <div>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-white text-center select-none">
                                            Daily Meditation
                                        </h3>
                                        <p className="text-gray-300 select-none">
                                            Just 5 minutes a day to cultivate a meditation habit for serenity and
                                            balance. Perfect for beginners and experienced meditators.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-wider text-gray-400 select-none">
                                                Get Started
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white transform transition duration-300 group-hover:translate-x-1 border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 卡片2 */}
                            <div className="relative w-72 h-96 flex-shrink-0 overflow-hidden group select-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/70 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-xl border border-white/10"></div>
                                <div className="absolute inset-0 opacity-5 bg-[url('/images/ocean.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                                <div className="relative p-6 flex flex-col h-full justify-between z-10 rounded-3xl">
                                    <div>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-white text-center select-none">
                                            Personalized Experience
                                        </h3>
                                        <p className="text-gray-300 select-none">
                                            Customize your meditation plan based on your needs and goals. Track progress
                                            and enjoy a journey to inner peace tailored just for you.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-wider text-gray-400 select-none">
                                                Get Started
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white transform transition duration-300 group-hover:translate-x-1 border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 卡片3 */}
                            <div className="relative w-72 h-96 flex-shrink-0 overflow-hidden group select-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/70 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-xl border border-white/10"></div>
                                <div className="absolute inset-0 opacity-5 bg-[url('/images/ocean.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                                <div className="relative p-6 flex flex-col h-full justify-between z-10 rounded-3xl">
                                    <div>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-white text-center select-none">
                                            Guided Meditation
                                        </h3>
                                        <p className="text-gray-300 select-none">
                                            Voice guidance recorded by professional meditation instructors to help you
                                            easily enter a deep meditative state, suitable for all levels.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-wider text-gray-400 select-none">
                                                Get Started
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white transform transition duration-300 group-hover:translate-x-1 border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 卡片4 */}
                            <div className="relative w-72 h-96 flex-shrink-0 overflow-hidden group select-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/70 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-xl border border-white/10"></div>
                                <div className="absolute inset-0 opacity-5 bg-[url('/images/ocean.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                                <div className="relative p-6 flex flex-col h-full justify-between z-10 rounded-3xl">
                                    <div>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-white text-center select-none">
                                            Emotional Balance
                                        </h3>
                                        <p className="text-gray-300 select-none">
                                            Specially designed meditation courses to help you manage stress, anxiety,
                                            and negative emotions, regaining inner peace and happiness.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-wider text-gray-400 select-none">
                                                Get Started
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white transform transition duration-300 group-hover:translate-x-1 border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 卡片5 */}
                            <div className="relative w-72 h-96 flex-shrink-0 overflow-hidden group select-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/70 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-xl border border-white/10"></div>
                                <div className="absolute inset-0 opacity-5 bg-[url('/images/ocean.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                                <div className="relative p-6 flex flex-col h-full justify-between z-10 rounded-3xl">
                                    <div>
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-white text-center select-none">
                                            Meditation Courses
                                        </h3>
                                        <p className="text-gray-300 select-none">
                                            Systematic learning paths from basic to advanced, helping you master
                                            meditation techniques step by step and enhance spiritual growth.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs uppercase tracking-wider text-gray-400 select-none">
                                                Get Started
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white transform transition duration-300 group-hover:translate-x-1 border border-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 滚动指示器 */}
                    <div className="mt-6 flex justify-center space-x-2">
                        <div className="w-12 h-1 bg-blue-500 rounded-full scroll-indicator"></div>
                        <div className="w-12 h-1 bg-gray-600 rounded-full scroll-indicator"></div>
                        <div className="w-12 h-1 bg-gray-600 rounded-full scroll-indicator"></div>
                    </div>

                    <div className="inline-flex items-center mt-8">
                        <span className="h-px w-12 bg-gray-600"></span>
                        <p className="mx-4 text-gray-400 italic">
                            "Meditation is not about emptying the mind, but freeing it" — Meditation Master
                        </p>
                        <span className="h-px w-12 bg-gray-600"></span>
                    </div>
                </div>
            </section>

            {/* Featured Content */}
            <section className="bg-black bg-opacity-80 py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Guided Meditation</h3>
                        <p className="text-gray-300">
                            Professional meditation guidance for different needs, helping you stay focused and relaxed
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Sleep Better</h3>
                        <p className="text-gray-300">
                            Soothing natural sounds and stories to help you fall asleep quickly and maintain deep sleep
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Focus Music</h3>
                        <p className="text-gray-300">
                            Carefully designed music and natural sounds to help improve your work and study efficiency
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
