export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
           

            {/* Content */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
                        <div className="text-center mb-8 sm:mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-6">
                                <span className="text-3xl sm:text-4xl">⚡</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                               Electrical Solutions Provider
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                                PowerTech Electrical has been at the forefront of electrical engineering excellence for over 15 years,
                                serving industries across the region with innovative and reliable solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                                    To provide cutting-edge electrical solutions that enhance operational efficiency,
                                    ensure safety, and contribute to sustainable business growth for our clients.
                                </p>

                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span>Excellence in Engineering</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span>Safety First Approach</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span>Customer Satisfaction</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span>Innovation & Technology</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Certified Engineers</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Licensed professionals with extensive experience</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">24/7 Support</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Round-the-clock emergency services</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quality Assurance</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">ISO certified processes and standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}