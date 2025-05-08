import Link from "next/link";

export default function Meditate() {
    const meditations = [
        {
            id: 1,
            title: "专注呼吸",
            duration: "5分钟",
            description: "简短的引导式冥想，专注于呼吸，帮助你平静心灵",
            level: "初学者"
        },
        {
            id: 2,
            title: "身体扫描冥想",
            duration: "10分钟",
            description: "逐步关注身体各部位的感受，释放紧张和压力",
            level: "初学者"
        },
        {
            id: 3,
            title: "安静的思考",
            duration: "15分钟",
            description: "让思绪自由流动的冥想体验，培养内在平静",
            level: "中级"
        },
        {
            id: 4,
            title: "慈悲冥想",
            duration: "20分钟",
            description: "培养对自己和他人的慈悲心，增强积极情绪",
            level: "中级"
        },
        {
            id: 5,
            title: "深度放松",
            duration: "30分钟",
            description: "完整的冥想指导，帮助你进入深度放松状态",
            level: "高级"
        },
        {
            id: 6,
            title: "睡前放松",
            duration: "20分钟",
            description: "特别设计用于帮助入睡的冥想，缓解失眠问题",
            level: "所有级别"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* 导航栏 */}
            <header className="py-6 px-8 flex justify-between items-center bg-gray-900 w-full">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    <Link href="/">Serenity</Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-white hover:text-gray-300 transition">
                        首页
                    </Link>
                    <Link
                        href="/meditate"
                        className="text-white hover:text-gray-300 transition border-b-2 border-white pb-1"
                    >
                        冥想
                    </Link>
                    <Link href="/sleep" className="text-white hover:text-gray-300 transition">
                        睡眠
                    </Link>
                    <Link href="/music" className="text-white hover:text-gray-300 transition">
                        音乐
                    </Link>
                    <Link href="/about" className="text-white hover:text-gray-300 transition">
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

            <main className="flex-1 bg-gradient-to-b from-gray-900 to-black py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center text-white">冥想练习</h1>
                    <p className="text-xl mb-10 text-center text-gray-300 max-w-3xl mx-auto">
                        选择适合你的冥想练习，开始你的平静之旅。无论你是初学者还是有经验的冥想者，我们都有适合你的引导。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {meditations.map((meditation) => (
                            <div
                                key={meditation.id}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-16 h-16 text-white opacity-75"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-blue-300">{meditation.level}</span>
                                        <span className="text-sm text-gray-400">{meditation.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{meditation.title}</h3>
                                    <p className="text-gray-400 mb-4">{meditation.description}</p>
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                                        开始冥想
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

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
