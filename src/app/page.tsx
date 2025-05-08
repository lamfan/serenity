import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* 导航栏 */}
            <header className="py-6 px-8 flex justify-between items-center absolute w-full z-10">
                <div className="text-2xl font-bold tracking-tighter text-white">Serenity</div>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-white hover:text-gray-300 transition">
                        首页
                    </Link>
                    <Link href="/meditate" className="text-white hover:text-gray-300 transition">
                        冥想
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-300 transition">
                        睡眠
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-300 transition">
                        音乐
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-300 transition">
                        关于我们
                    </Link>
                </nav>
                <div className="hidden md:block">
                    <Link
                        href="/login"
                        className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-gray-900 transition"
                    >
                        登录
                    </Link>
                </div>
                <button className="block md:hidden text-white">
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
            </header>

            {/* 英雄区域 */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative">
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* 背景视频或图片 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                    <div className="absolute inset-0 bg-[url('/images/ocean.jpg')] bg-cover bg-center"></div>
                </div>

                <div className="relative z-1 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">找到属于你的内心平静</h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
                        利用冥想、专注音乐和引导式呼吸，开始你的心灵成长之旅
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/meditate"
                            className="bg-white text-gray-900 rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition text-lg"
                        >
                            开始冥想
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-transparent border-2 border-white text-white rounded-full px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition text-lg"
                        >
                            免费注册
                        </Link>
                    </div>
                </div>
            </main>

            {/* 特色内容 */}
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
                        <h3 className="text-xl font-semibold mb-3">引导式冥想</h3>
                        <p className="text-gray-300">针对不同需求的专业冥想指导，帮助你保持专注和放松</p>
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
                        <h3 className="text-xl font-semibold mb-3">睡眠助眠</h3>
                        <p className="text-gray-300">舒缓的自然音效和故事，帮助你快速入眠并保持深度睡眠</p>
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
                        <h3 className="text-xl font-semibold mb-3">专注音乐</h3>
                        <p className="text-gray-300">精心设计的音乐和自然声音，帮助你提高工作和学习效率</p>
                    </div>
                </div>
            </section>

            {/* 简单页脚 */}
            <footer className="bg-gray-900 py-8 text-center text-gray-400">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="mb-4">© 2024 Serenity. 保留所有权利。</p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/terms" className="hover:text-white transition">
                            使用条款
                        </Link>
                        <Link href="/privacy" className="hover:text-white transition">
                            隐私政策
                        </Link>
                        <Link href="/contact" className="hover:text-white transition">
                            联系我们
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
