import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full mb-6">
                        <span className="text-4xl sm:text-5xl">❌</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                        Page Not Found
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-md mx-auto">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    <NavLink
                        to="/"
                        className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                    >
                        <span className="text-lg sm:text-xl">🏠</span>
                        Go Home
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


