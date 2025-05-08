"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
    const pathname = usePathname();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 获取环境变量（客户端组件中可以使用的环境变量需要以NEXT_PUBLIC_开头）
    const contactEmail = "support@lumastudio.app"; // 直接使用固定值，避免服务器/客户端渲染不匹配

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 发送数据到API端点
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "发送失败");
            }

            // 重置表单
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setFormSubmitted(true);

            // 5秒后重置成功消息
            setTimeout(() => {
                setFormSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error("发送邮件时出错:", error);
            alert("发送邮件失败，请稍后再试");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPath={pathname} />

            <main className="flex-1 bg-gradient-to-b from-gray-900 to-black py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center text-white">Contact Us</h1>
                    <p className="text-xl mb-12 text-center text-gray-300 max-w-3xl mx-auto">
                        Have questions, feedback, or meditation requests? Get in touch with us and we'll get back to you
                        as soon as possible.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                        <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-gray-700 rounded-full p-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Email</h3>
                                        <a
                                            href={`mailto:${contactEmail}`}
                                            className="text-blue-400 hover:text-blue-300 transition"
                                        >
                                            {contactEmail}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-gray-700 rounded-full p-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Location</h3>
                                        <p className="text-gray-400">
                                            San Francisco, California
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-gray-700 rounded-full p-3 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">App Support</h3>
                                        <p className="text-gray-400">For technical issues or account help</p>
                                        <a
                                            href={`mailto:${contactEmail}`}
                                            className="text-blue-400 hover:text-blue-300 transition"
                                        >
                                            {contactEmail}
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <h3 className="text-white font-medium mb-3">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
                                        >
                                            <svg
                                                className="w-5 h-5 text-blue-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
                                        >
                                            <svg
                                                className="w-5 h-5 text-blue-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
                                        >
                                            <svg
                                                className="w-5 h-5 text-blue-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-white">Send Us a Message</h2>

                            {formSubmitted ? (
                                <div className="bg-green-800 bg-opacity-30 border border-green-700 text-green-100 px-4 py-3 rounded mb-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <p>Your message has been sent successfully. We'll get back to you soon!</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition duration-300 ${
                                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
                            Frequently Asked Questions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-white">How do I reset my password?</h3>
                                <p className="text-gray-300">
                                    You can reset your password by clicking on the "Forgot Password" link on the login
                                    screen. We'll send you an email with instructions.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-white">Can I use Serenity offline?</h3>
                                <p className="text-gray-300">
                                    Yes, our premium members can download meditation sessions for offline use. Simply
                                    look for the download icon next to each meditation.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-white">
                                    How do I cancel my subscription?
                                </h3>
                                <p className="text-gray-300">
                                    You can manage your subscription in the account settings. If you need assistance,
                                    please contact our support team.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-3 text-white">
                                    Do you offer guided meditation in other languages?
                                </h3>
                                <p className="text-gray-300">
                                    Currently, we offer guided meditation in English and Spanish. We're working on
                                    adding more languages in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
