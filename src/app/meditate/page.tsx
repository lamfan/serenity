"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Meditate() {
    const pathname = usePathname();

    const meditations = [
        {
            id: 1,
            title: "Focused Breathing",
            duration: "5 minutes",
            description: "A short guided meditation focusing on breathing to help you calm your mind",
            level: "Beginner"
        },
        {
            id: 2,
            title: "Body Scan Meditation",
            duration: "10 minutes",
            description: "Gradually focus on different parts of your body to release tension and stress",
            level: "Beginner"
        },
        {
            id: 3,
            title: "Quiet Reflection",
            duration: "15 minutes",
            description: "A meditation experience allowing thoughts to flow freely, cultivating inner peace",
            level: "Intermediate"
        },
        {
            id: 4,
            title: "Compassion Meditation",
            duration: "20 minutes",
            description: "Develop compassion for yourself and others, enhancing positive emotions",
            level: "Intermediate"
        },
        {
            id: 5,
            title: "Deep Relaxation",
            duration: "30 minutes",
            description: "Complete meditation guidance to help you enter a state of deep relaxation",
            level: "Advanced"
        },
        {
            id: 6,
            title: "Bedtime Relaxation",
            duration: "20 minutes",
            description: "Specially designed to help you fall asleep and relieve insomnia",
            level: "All Levels"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPath={pathname} />

            <main className="flex-1 relative py-12 px-4 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Background Video */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src="/mp4/space-login.mp4" type="video/mp4" />
                        {/* 备用背景图 */}
                        <div className="absolute inset-0 bg-[url('/images/ocean.jpg')] bg-cover bg-center"></div>
                    </video>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <h1 className="text-4xl font-bold mb-8 text-center text-white">Meditation Practices</h1>
                    <p className="text-xl mb-10 text-center text-gray-300 max-w-3xl mx-auto">
                        Choose a meditation practice that suits you and start your journey to tranquility. Whether
                        you're a beginner or an experienced meditator, we have guidance for you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {meditations.map((meditation) => (
                            <div
                                key={meditation.id}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div
                                    className="h-60 bg-cover bg-center flex items-center justify-center"
                                    style={{ backgroundImage: `url('/images/icon-${meditation.id}.jpg')` }}
                                ></div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-blue-300">{meditation.level}</span>
                                        <span className="text-sm text-gray-400">{meditation.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{meditation.title}</h3>
                                    <p className="text-gray-400">{meditation.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
