import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Shield, FileText, Lock } from 'lucide-react';

export default function PoliticasPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section for Policies */}
            <div className="bg-secondary py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                        Políticas y <span className="text-primary">Privacidad</span>
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto">
                        En Hot Cheese nos tomamos muy en serio la seguridad de tus datos y la transparencia de nuestros servicios.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Privacy Policy */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Lock className="text-secondary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Política de Privacidad</h2>
                        </div>

                        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                            <p>
                                En <strong>Hot Cheese</strong>, accesible desde nuestros puntos de venta y sitio web, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que se recopila y registra por Hot Cheese y cómo la usamos.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mt-6">Información que recopilamos</h3>
                            <p>
                                Recopilamos información personal que nos proporcionas voluntariamente cuando te registras en el sitio web, expresas interés en obtener información sobre nosotros o nuestros productos y servicios, cuando participas en actividades en el sitio web o de otra manera cuando te comunicas con nosotros.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Nombres y apellidos</li>
                                <li>Números de teléfono</li>
                                <li>Direcciones de correo electrónico</li>
                                <li>Direcciones de domicilio (para entregas)</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mt-6">Cómo usamos tu información</h3>
                            <p>
                                Usamos la información que recopilamos de varias maneras, incluyendo para:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Proporcionar, operar y mantener nuestro sitio web y servicios.</li>
                                <li>Mejorar, personalizar y expandir nuestros servicios.</li>
                                <li>Entender y analizar cómo utilizas nuestros servicios.</li>
                                <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
                                <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para servicio al cliente.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Terms of Service */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FileText className="text-secondary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Términos y Condiciones</h2>
                        </div>

                        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                            <p>
                                ¡Bienvenido a Hot Cheese! Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Hot Cheese.
                            </p>
                            <p>
                                Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Hot Cheese si no estás de acuerdo con tomar todos los términos y condiciones establecidos en esta página.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mt-6">Cookies</h3>
                            <p>
                                El sitio web utiliza cookies para ayudar a personalizar tu experiencia en línea. Al acceder a Hot Cheese, aceptaste utilizar las cookies requeridas.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mt-6">Licencia</h3>
                            <p>
                                A menos que se indique lo contrario, Hot Cheese y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Hot Cheese. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a esto desde Hot Cheese para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
                            </p>
                        </div>
                    </section>

                    {/* Contact Info */}
                    <section className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary p-3 rounded-full">
                                <Shield className="text-gray-900 w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">¿Tienes dudas?</h2>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:contacto@hotcheese.com"
                                className="bg-primary text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
                            >
                                Contactar por Email
                            </a>
                            <a
                                href="https://api.whatsapp.com/send/?phone=573148884828"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
                            >
                                Escribir al WhatsApp
                            </a>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
