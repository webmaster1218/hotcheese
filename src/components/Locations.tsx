import { MapPin, Clock } from "lucide-react";
import { LOCATIONS, BUSINESS_INFO } from "@/data/info";

export default function Locations() {
    return (
        <section id="locations" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/assets/pattern.png')] bg-repeat opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Visítanos</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nuestras Sedes</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Estamos cerca de ti. Encuentra tu Hot Cheese más cercano.
                    </p>
                </div>

                {/* Horarios */}
                <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="bg-secondary p-4 rounded-full text-white shadow-lg shadow-red-900/20">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">Horarios de Atención</h4>
                                <p className="text-gray-400">Aplica para todas las sedes</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <div className="flex justify-between md:justify-end gap-8 border-b border-gray-700 pb-2">
                                <span className="text-gray-300">Lunes a Jueves y Domingos</span>
                                <span className="font-bold text-primary">{BUSINESS_INFO.hours.weekdays}</span>
                            </div>
                            <div className="flex justify-between md:justify-end gap-8">
                                <span className="text-gray-300">Viernes y Sábado</span>
                                <span className="font-bold text-primary">{BUSINESS_INFO.hours.weekends}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {LOCATIONS.map((location) => (
                        <div key={location.name} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-primary transition-colors group">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-gray-700 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{location.name}</h4>
                                    <p className="text-gray-300 mb-2">{location.address}</p>
                                    <p className="text-sm text-gray-500 italic">{location.reference}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
