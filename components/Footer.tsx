import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-deep-blue text-white pt-12 pb-8 border-t-4 border-gold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-saffron">Braj Path Pradarsan</h3>
                        <p className="text-gray-300">
                            Your spiritual guide to the holy land of Braj. Experience the divine love of Radha and Krishna through our curated yatra packages.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-saffron transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages" className="text-gray-300 hover:text-saffron transition-colors">
                                    Tour Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallary" className="text-gray-300 hover:text-saffron transition-colors">
                                    Photo Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-saffron transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gold">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-saffron" />
                                <span>Vrindavan, Mathura, UP, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Phone className="h-5 w-5 text-saffron" />
                                <span>+91 73005 48523</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Mail className="h-5 w-5 text-saffron" />
                                <span>info@brajpath.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron hover:text-deep-blue transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron hover:text-deep-blue transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron hover:text-deep-blue transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 mt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Braj Path Pradarsan. All rights reserved. Serving the devotees with love.</p>
                </div>
            </div>
        </footer>
    );
}
