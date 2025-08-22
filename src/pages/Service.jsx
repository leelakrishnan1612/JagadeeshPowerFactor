export default function Services() {
    const services = [
        {
            icon: '🔌',
            title: 'HT Panel Services',
            description: 'High Tension panel design, installation, and maintenance for industrial applications.',
            features: [
                '11kV & 33kV panel design',
                'VCB & SF6 circuit breakers',
                'Protection relay systems',
                'Testing & commissioning',
                'Annual maintenance contracts'
            ],
            color: 'blue'
        },
        {
            icon: '⚡',
            title: 'LT Panel Services',
            description: 'Low Tension panel solutions including PCC, MCC, and APFC panels.',
            features: [
                'PCC (Power Control Center)',
                'MCC (Motor Control Center)',
                'APFC (Auto Power Factor)',
                'Distribution boards',
                'Switchgear maintenance'
            ],
            color: 'green'
        },
        {
            icon: '🔋',
            title: 'Transformer Services',
            description: 'Complete transformer installation, maintenance, and troubleshooting services.',
            features: [
                'Installation & commissioning',
                'Oil testing & analysis',
                'Load testing & monitoring',
                'Preventive maintenance',
                'Emergency repairs'
            ],
            color: 'purple'
        },
        {
            icon: '🛠️',
            title: 'Switchgear Maintenance',
            description: 'Professional maintenance of all types of electrical switchgear equipment.',
            features: [
                'ACB/MCCB maintenance',
                'Contact cleaning & testing',
                'Thermal imaging',
                'Performance testing',
                'Spare parts supply'
            ],
            color: 'orange'
        },
        {
            icon: '📊',
            title: 'Testing & Commissioning',
            description: 'Comprehensive testing services to ensure electrical system reliability.',
            features: [
                'Insulation resistance tests',
                'Earth resistance testing',
                'Load flow analysis',
                'Power quality analysis',
                'Safety compliance checks'
            ],
            color: 'indigo'
        },
        {
            icon: '📋',
            title: 'AMC Services',
            description: 'Annual Maintenance Contracts with 24/7 support and emergency response.',
            features: [
                'Scheduled maintenance',
                'Emergency callouts',
                'Performance reports',
                'Spare parts management',
                'Technical support'
            ],
            color: 'red'
        }
    ]

    const getColorClasses = (color) => {
        const colorMap = {
            blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300',
            green: 'from-green-50 to-green-100 border-green-200 hover:border-green-300',
            purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300',
            orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300',
            indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 hover:border-indigo-300',
            red: 'from-red-50 to-red-100 border-red-200 hover:border-red-300'
        }
        return colorMap[color] || 'from-gray-50 to-gray-100 border-gray-200 hover:border-gray-300'
    }

    const getIconColor = (color) => {
        const colorMap = {
            blue: 'text-blue-600',
            green: 'text-green-600',
            purple: 'text-purple-600',
            orange: 'text-orange-600',
            indigo: 'text-indigo-600',
            red: 'text-red-600'
        }
        return colorMap[color] || 'text-gray-600'
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
                     Services
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                        Comprehensive electrical solutions for industrial, commercial, and residential applications
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group p-4 sm:p-6 md:p-8 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-3`}
                            >
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl sm:text-3xl md:text-4xl">{service.icon}</span>
                                </div>

                                <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 ${getIconColor(service.color)}`}>
                                    {service.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 sm:space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0`}>
                                                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-xs sm:text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


