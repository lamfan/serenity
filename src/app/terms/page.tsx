"use client";

import { usePathname } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Terms() {
    const pathname = usePathname();

    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPath={pathname} />

            <main className="flex-1 bg-gradient-to-b from-gray-900 to-black py-12 px-4">
                <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-white">Terms of Use</h1>
                    <p className="text-gray-300 mb-4">Last Updated: May 15, 2024</p>

                    <div className="space-y-6 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">1. Acceptance of Terms</h2>
                            <p>
                                Welcome to the Serenity meditation platform. By accessing our website or using our
                                services, you agree to comply with these terms and conditions. Please read these terms
                                carefully, as they constitute a legal agreement governing your use of our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">2. License to Use</h2>
                            <p>
                                Serenity grants you a limited, non-exclusive, non-transferable license to access and use
                                our platform. This license does not permit you to modify or copy our content, or use it
                                for any commercial purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">3. User Accounts</h2>
                            <p>
                                Certain features may require you to create an account. You are responsible for
                                maintaining the confidentiality of your account and for all activities associated with
                                your account. You must immediately notify Serenity of any unauthorized use of your
                                account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">4. User Conduct</h2>
                            <p>When using our services, you agree not to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe upon the intellectual property rights of others</li>
                                <li>Distribute malware or harmful data</li>
                                <li>Interfere with the normal operation of the service</li>
                                <li>Post false, inaccurate, or misleading content</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">5. Intellectual Property</h2>
                            <p>
                                All content on the website, including but not limited to text, graphics, logos, icons,
                                audio, and software, is the property of Serenity or its content providers and is
                                protected by copyright law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">6. Service Changes</h2>
                            <p>
                                Serenity reserves the right to modify or terminate the service at any time, with or
                                without notice. We are not liable to you for any loss caused by any modification,
                                suspension, or termination of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">7. Disclaimer</h2>
                            <p>
                                Serenity meditation content is provided for general information and relaxation purposes
                                only. Our services are provided "as is" without any warranties, express or implied.
                                Meditation guidance should not be considered a substitute for medical advice or mental
                                health treatment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">8. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Serenity and its employees, officers, or
                                directors will not be liable for any direct, indirect, incidental, special, or
                                consequential damages that may result from your use of or inability to use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">9. Changes to Terms</h2>
                            <p>
                                We may update these terms from time to time. When we make material changes, we will
                                notify you by posting a notice on the website or by sending you an email. Your continued
                                use of our services indicates your acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">10. Governing Law</h2>
                            <p>
                                These terms will be governed by the laws of the State of California, USA, without regard
                                to its conflict of law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">11. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms of Use, please contact us at:
                                <a
                                    href="mailto:support@lumastudio.app"
                                    className="text-blue-400 hover:text-blue-300 ml-1"
                                >
                                    support@lumastudio.app
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
