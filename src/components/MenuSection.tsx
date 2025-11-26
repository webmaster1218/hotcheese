import { MENU } from "@/data/info";

export default function MenuSection() {
    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Nuestro Sabor</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Menú Delicioso</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Preparado con ingredientes frescos y el toque secreto que nos hace únicos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16">

                    {/* Hamburguesas */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">🍔</div>
                            <h4 className="text-3xl font-bold text-gray-900">Hamburguesas</h4>
                        </div>
                        <div className="space-y-6">
                            {MENU.burgers.map((item) => (
                                <MenuItem key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Perros */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">🌭</div>
                            <h4 className="text-3xl font-bold text-gray-900">Perros</h4>
                        </div>
                        <div className="space-y-6">
                            {MENU.dogs.map((item) => (
                                <MenuItem key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Perras */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">🌭</div>
                            <h4 className="text-3xl font-bold text-gray-900">Perras</h4>
                        </div>
                        <div className="space-y-6">
                            {MENU.perras.map((item) => (
                                <MenuItem key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Bebidas */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🥤</div>
                            <h4 className="text-3xl font-bold text-gray-900">Bebidas</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {MENU.drinks.map((item) => (
                                <div key={item.name} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-700 font-medium">{item.name}</span>
                                    <span className="text-secondary font-bold">${item.price.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* De la Barra (Centered Bottom) */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 rounded-full text-3xl mb-4">🥒</div>
                        <h4 className="text-3xl font-bold text-gray-900">De la Barra</h4>
                        <p className="text-gray-600 mt-2 italic">Elige tus acompañantes (Incluido / Adicionales)</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {MENU.bar.map((item) => (
                            <div key={item} className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:border-primary hover:shadow-md transition-all">
                                <span className="text-lg font-bold text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function MenuItem({ name, price, description }: { name: string; price: number; description: string }) {
    return (
        <div className="group">
            <div className="flex justify-between items-baseline mb-1">
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">{name}</h5>
                <span className="text-lg font-bold text-primary">${price.toLocaleString()}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
