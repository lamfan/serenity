import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8 text-center text-gray-400">
            <div className="max-w-6xl mx-auto px-4">
                <p className="mb-4">© 2025 Serenity. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <Link href="/terms" className="hover:text-white transition">
                        Terms of Use
                    </Link>
                    <Link href="/privacy" className="hover:text-white transition">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:text-white transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
