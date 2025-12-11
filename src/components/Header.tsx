"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Menú", href: "#menu" },
        { name: "Sedes", href: "#locations" },
        { name: "Contacto", href: "#footer" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/assets/mascot.png"
                                alt="Hot Cheese Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-secondary">
                            Hot <span className="text-primary">Cheese</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://api.whatsapp.com/send/?phone=573148884828&text=Hola%21+Me+gustar%C3%ADa+hacer+un+pedido&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-gray-900 px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                        >
                            ¡Pide Ya!
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <a
                                href="https://api.whatsapp.com/send/?phone=573148884828&text=Hola%21+Me+gustar%C3%ADa+hacer+un+pedido&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-primary text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md"
                            >
                                ¡Pide Ya!
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
