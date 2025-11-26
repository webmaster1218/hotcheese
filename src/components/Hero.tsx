import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/info";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg-burger.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/40"></div>
            </div>

            <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200 shadow-sm animate-fade-in-up">
                            <Award size={16} className="text-yellow-600" />
                            <span>{BUSINESS_INFO.awards[0]}</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-black leading-tight tracking-tight">
                            Sabor que <br />
                            <span className="text-secondary relative inline-block">
                                Derretirá
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> <br />
                            tus Sentidos
                        </h1>

                        <p className="text-xl text-black max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                            Disfruta de las mejores hamburguesas y perros calientes de la ciudad.
                            Ingredientes frescos, salsas únicas y mucho, mucho queso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="#menu"
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Ver Menú Completo
                                <ChevronRight size={20} />
                            </Link>
                            <Link
                                href="#locations"
                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all"
                            >
                                Nuestras Sedes
                            </Link>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] max-w-lg">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-y-10 scale-90"></div>
                            <a
                                href="/pdf/hot cheese ok.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 block cursor-pointer hover:scale-105"
                            >
                                <Image
                                    src="/assets/hero-menu-full.jpg"
                                    alt="Hot Cheese Menu - Click para ver PDF completo"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </a>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Abierto hasta tarde</p>
                                    <p className="text-gray-900 font-bold">Fines de semana 11:45 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
