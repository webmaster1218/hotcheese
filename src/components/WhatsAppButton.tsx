"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/info";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const message = "Hola! Me gustaría hacer un pedido";

    const handleLocationClick = (phone: string) => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 translate-y-0 translate-x-0">
            {/* Location Selector Menu */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 mb-2 w-72 animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <MapPin size={18} className="text-secondary" />
                            Selecciona una sede
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                        {LOCATIONS.map((loc) => (
                            <button
                                key={loc.name}
                                onClick={() => handleLocationClick(loc.whatsapp || "")}
                                className="w-full text-left p-3 rounded-xl hover:bg-green-50 border border-transparent hover:border-green-200 transition-all group flex items-start gap-3"
                            >
                                <div className="bg-green-100 p-2 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all transform group-hover:scale-110 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                                    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="font-bold text-sm text-gray-900 group-hover:text-green-700 transition-colors truncate">
                                        {loc.name}
                                    </p>
                                    <p className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                                        {loc.reference}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-center">
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                            Horario: {LOCATIONS[0] ? "4:30 PM - 11:45 PM" : ""}
                        </p>
                    </div>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group ${isOpen ? 'rotate-90' : ''}`}
                aria-label="Contactar por WhatsApp"
            >
                {isOpen ? <X size={28} /> : <WhatsAppIcon className="w-8 h-8" />}

                {/* Notification Pulse removed number badge as requested */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    </span>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold px-4 py-2.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-100">
                        ¡Pide ya por WhatsApp! 🌭
                    </span>
                )}
            </button>
        </div>
    );
}
