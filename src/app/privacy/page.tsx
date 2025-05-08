"use client";

import { usePathname } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Privacy() {
    const pathname = usePathname();

    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPath={pathname} />

            <main className="flex-1 bg-gradient-to-b from-gray-900 to-black py-12 px-4">
                <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
                    <p className="text-gray-300 mb-4">Last Updated: May 15, 2024</p>

                    <div className="space-y-6 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">1. Introduction</h2>
                            <p>
                                Serenity respects your privacy and is committed to protecting your personal data. This
                                privacy policy will inform you about how we handle your personal data, including data
                                collected when you visit our website or use our services, as well as your privacy rights
                                and legal protections.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">2. Data We Collect</h2>
                            <p>We may collect, use, store and transfer the following types of personal data:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>
                                    <strong>Identity Data</strong>: including name, username, or similar identifiers
                                </li>
                                <li>
                                    <strong>Contact Data</strong>: including email address and telephone number
                                </li>
                                <li>
                                    <strong>Technical Data</strong>: including IP address, login data, browser type, and
                                    device information
                                </li>
                                <li>
                                    <strong>Usage Data</strong>: including information about how you use our website and
                                    services
                                </li>
                                <li>
                                    <strong>Preference Data</strong>: including your meditation habits, preferences, and
                                    feedback
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">3. How We Collect Your Data</h2>
                            <p>We collect data through the following means:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>
                                    When you provide it to us directly (e.g., by filling out forms or communicating with
                                    us)
                                </li>
                                <li>
                                    Automatically when you use our website or services (using cookies and similar
                                    technologies)
                                </li>
                                <li>
                                    From third parties or publicly available sources (such as social media platforms)
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">4. How We Use Your Data</h2>
                            <p>The most common purposes for which we use your personal data include:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>To register you as a user and manage your account</li>
                                <li>To provide and personalize our services</li>
                                <li>To process payments and subscriptions</li>
                                <li>To communicate important notices and updates to you</li>
                                <li>To improve our website, products, and services</li>
                                <li>To conduct market research and analysis</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">5. Cookie Policy</h2>
                            <p>
                                We use cookies and similar tracking technologies to track activity on our website and
                                store certain information. Cookies are files with small amount of data which may include
                                an anonymous unique identifier.
                            </p>
                            <p className="mt-2">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is
                                being sent. However, if you do not accept cookies, you may not be able to use some
                                portions of our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">6. Data Security</h2>
                            <p>
                                We have implemented appropriate security measures to prevent your personal data from
                                being accidentally lost, used, accessed in an unauthorized way, altered or disclosed. In
                                addition, we limit access to your personal data to those employees, agents, contractors
                                and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">7. Data Retention</h2>
                            <p>
                                We will only retain your personal data for as long as necessary to fulfill the purposes
                                for which we collected it, including for the purposes of satisfying any legal,
                                accounting, or reporting requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">8. Your Legal Rights</h2>
                            <p>Under data protection laws, you have rights including:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>The right to access your personal data</li>
                                <li>The right to correction of your personal data</li>
                                <li>The right to erasure of your personal data</li>
                                <li>The right to object to processing of your personal data</li>
                                <li>The right to restrict processing of your personal data</li>
                                <li>The right to transfer of your personal data</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">9. Children's Privacy</h2>
                            <p>
                                Our services are not directed to persons under the age of 13. We do not knowingly
                                collect personally identifiable information from children under 13. If you are a parent
                                or guardian and you are aware that your child has provided us with personal data, please
                                contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">10. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites, plug-ins, and applications.
                                Clicking on those links or enabling those connections may allow third parties to collect
                                or share data about you. We do not control these third-party websites and are not
                                responsible for their privacy statements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">11. Changes to Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page. You are advised to review this Privacy
                                Policy periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">12. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or wish to exercise your legal
                                rights, please contact us at:
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
