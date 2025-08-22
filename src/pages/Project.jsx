import React, { useState } from 'react';
import {
  filterSitesByCategory,
  getPortfolioStats,
  getUniqueCategories,
  projectSitesData,
  searchSites
} from '../Data/ProjectData';

export default function Project() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const sitesPerPage = 2;

  // Get filtered data based on category and search
  let filteredSites = projectSitesData;
  if (selectedCategory !== 'All') {
    filteredSites = filterSitesByCategory(selectedCategory);
  }
  if (searchTerm) {
    filteredSites = searchSites(searchTerm);
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredSites.length / sitesPerPage);
  const startIndex = (currentPage - 1) * sitesPerPage;
  const currentSites = filteredSites.slice(startIndex, startIndex + sitesPerPage);

  // Get portfolio statistics
  const portfolioStats = getPortfolioStats();
  const categories = getUniqueCategories();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Function to navigate to gallery for specific site
  const navigateToGallery = (siteId) => {
    // In a real app with React Router, you'd use navigate(`/gallery?site=${siteId}`)
    // For now, we'll simulate by updating the URL
    window.location.href = `/gallery?site=${siteId}`;
  };

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
            Project Sites
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our completed electrical project sites across different locations
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-6">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search sites by name, location, category, or client..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sites Content */}
      <section className="py-6 px-4 sm:px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Information */}
          <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All' ? 'All Project Sites' : `${selectedCategory} Projects`}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {searchTerm ? `Search results for "${searchTerm}"` : 'Delivering excellence across multiple sites and industries'}
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>Showing {filteredSites.length} site{filteredSites.length !== 1 ? 's' : ''}</span>
                {totalPages > 0 && (
                  <>
                    <span>•</span>
                    <span>Page {currentPage} of {totalPages}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Sites Grid */}
          {filteredSites.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No sites found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {currentSites.map((site) => (
                <div
                  key={site.siteId}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Site Image Container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {site.isPlaceholder ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl sm:text-3xl">🏗️</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            {site.siteName}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Site photos coming soon
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={site.imageUrl}
                        alt={site.siteName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {site.category}
                      </span>
                    </div>

                    {/* Projects Count Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                        {site.totalProjects} Projects
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0   bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="text-lg font-bold mb-2">{site.siteName}</h3>
                        <p className="text-sm text-gray-200 mb-3">{site.description}</p>
                        <div className="space-y-2 mb-4">
                          <p className="text-xs text-gray-300">Key Projects:</p>
                          {site.projects.slice(0, 3).map((project, index) => (
                            <span key={index} className="inline-block bg-white/20 text-xs px-2 py-1 rounded-full mx-1">
                              {project}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => navigateToGallery(site.siteId)}
                          className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
                        >
                          View All Projects
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Site Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                      Site {site.siteId}: {site.siteName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center">
                      <span className="mr-1">📍</span>
                      {site.location}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">
                      {site.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Client:</span>
                        <span className="font-medium text-gray-700">{site.clientName}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Value:</span>
                        <span className="font-medium text-green-600">{site.projectValue}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Year:</span>
                        <span className="font-medium text-gray-700">{site.completionYear}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 font-medium">
                        {site.totalProjects} Projects
                      </span>
                      <span className="text-xs text-gray-400">
                        Site #{site.siteId}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fill empty slots if less than sitesPerPage sites on current page */}
              {Array.from({ length: Math.max(0, sitesPerPage - currentSites.length) }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="bg-gray-100 rounded-xl sm:rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-gray-300"
                >
                  <div className="text-center p-4">
                    <div className="text-4xl text-gray-400 mb-2">➕</div>
                    <p className="text-sm text-gray-500 font-medium">
                      New Site
                    </p>
                    <p className="text-xs text-gray-400">
                      Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mb-12">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                  }`}
              >
                ← Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${currentPage === i + 1
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                  }`}
              >
                Next →
              </button>
            </div>
          )}

          {/* Sites Overview Statistics */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Portfolio Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Our comprehensive electrical project portfolio across different industries
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {portfolioStats.totalSites}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Total Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  {portfolioStats.totalProjects}+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                  {portfolioStats.yearsExperience}+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                  {portfolioStats.successRate}%
                </div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}