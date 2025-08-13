import WhatsAppButton from '../fatures/WhatsAppButton'

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%23000000' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-6 sm:mb-8">
                        <span className="text-3xl sm:text-4xl">⚡</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                        <span className="text-blue-600">Jagadeesh</span> PowerFactor
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                        Professional <strong className="text-blue-600">HT/LT panel services</strong>, transformer maintenance,
                        and comprehensive electrical solutions for your business needs.
                    </p>

                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                            Why Choose <span className="text-blue-600">Jagadeesh PowerFactor</span>?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            We deliver reliable electrical solutions with expertise and precision
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature Card 1 */}
                        <div className="group p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
                                <span className="text-2xl sm:text-3xl">🔌</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Panel Services</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Specialized in <strong className="text-blue-600">HT/LT panel design</strong>, installation, and maintenance.
                                Our certified engineers ensure optimal performance and safety.
                            </p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="group p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                                <span className="text-2xl sm:text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">24/7 Support</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Round-the-clock emergency electrical services to minimize downtime
                                and keep your operations running smoothly.
                            </p>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="group p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl sm:rounded-3xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
                                <span className="text-2xl sm:text-3xl">🛠️</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Preventive Care</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Comprehensive <strong className="text-blue-600">AMC packages</strong> to prevent electrical failures,
                                extend equipment lifespan, and ensure compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                        <div className="text-white">
                            <div className="text-3xl sm:text-4xl font-black mb-2">500+</div>
                            <div className="text-sm sm:text-base text-blue-100">Projects Completed</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl sm:text-4xl font-black mb-2">50+</div>
                            <div className="text-sm sm:text-base text-blue-100">Expert Engineers</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl sm:text-4xl font-black mb-2">24/7</div>
                            <div className="text-sm sm:text-base text-blue-100">Support Available</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl sm:text-4xl font-black mb-2">15+</div>
                            <div className="text-sm sm:text-base text-blue-100">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


