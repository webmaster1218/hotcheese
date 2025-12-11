import { Instagram, Clock, Phone, ChefHat, CreditCard, Utensils, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/data/info";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand & About */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-primary p-2 rounded-full">
                                <ChefHat size={24} className="text-gray-900" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-secondary">
                                Hot <span className="text-primary">Cheese</span>
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            Las mejores hamburguesas y perros calientes de Medellín, Sabaneta y Envigado.
                            Ingredientes frescos, salsas únicas y mucho, mucho queso.
                        </p>
                    </div>

                    {/* Horarios */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            Horarios
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Lunes a Jueves y Domingos</p>
                                    <p className="text-sm text-gray-600">{BUSINESS_INFO.hours.weekdays}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Viernes y Sábados</p>
                                    <p className="text-sm text-gray-600">{BUSINESS_INFO.hours.weekends}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Utensils size={18} className="text-primary" />
                            Enlaces Rápidos
                        </h3>
                        <div className="space-y-3">
                            <Link href="#hero" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                                Inicio
                            </Link>
                            <Link href="#menu" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                                Nuestro Menú
                            </Link>
                            <Link href="#locations" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                                Sedes
                            </Link>
                            <a
                                href="/pdf/hot cheese ok.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                Menú PDF
                            </a>
                        </div>
                    </div>

                    {/* Contacto & Redes */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Phone size={18} className="text-primary" />
                            Contáctanos
                        </h3>
                        <div className="flex gap-4">
                        {/* WhatsApp */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=573148884828&text=Hola%21+Me+gustar%C3%ADa+hacer+un+pedido&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all transform hover:-translate-y-1 inline-flex"
                        >
                            <MessageCircle size={24} />
                        </a>

                        {/* Instagram */}
                        <a
                            href={BUSINESS_INFO.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-red-500 hover:text-white transition-all transform hover:-translate-y-1 inline-flex"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>

                        {/* Métodos de pago */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-xs font-medium text-gray-700 mb-3 flex items-center gap-2">
                                <CreditCard size={14} className="text-primary" />
                                Métodos de Pago
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200 font-medium">Efectivo</span>
                                <span className="text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200 font-medium">Transferencia</span>
                                <span className="text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200 font-medium">Nequi</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-500 text-sm">
                                &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.
                            </p>
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            <p>📍 {LOCATIONS.length} sedes en Medellín y Área Metropolitana</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
