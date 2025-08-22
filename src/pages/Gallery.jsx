import { useState, useEffect } from 'react'
import GalleryData from '../Data/GalleryData';

export default function Gallery() {
  const { galleryImagesBySite, siteNames, siteDetails ,categories} = GalleryData;





  const [urlParams, setUrlParams] = useState({ site: null, project: null });
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Simulate getting URL parameters
  useEffect(() => {
    // In a real React Router setup, you'd use useSearchParams or useLocation
    const params = new URLSearchParams(window.location.search);
    const site = params.get('site');
    const project = params.get('project');
    
    setUrlParams({ 
      site: site ? parseInt(site) : null, 
      project: project ? parseInt(project) : null 
    });
  }, []);

  // Filter images based on URL parameters and category
  useEffect(() => {
    let images = [];
    
    if (urlParams.site) {
      // Show images from specific site
      images = galleryImagesBySite[urlParams.site] || [];
      
      if (urlParams.project) {
        // Show specific project only
        images = images.filter(img => img.id === urlParams.project);
      }
    } else {
      // Show all images from all sites
      images = Object.values(galleryImagesBySite).flat();
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      images = images.filter(img => img.category === selectedCategory);
    }

    setFilteredImages(images);
  }, [urlParams, selectedCategory]);


  // Helper functions
  const getCurrentSiteName = () => {
    if (urlParams.site) {
      return siteNames[urlParams.site] || 'Unknown Site';
    }
    return 'All Sites';
  };

  const getBreadcrumb = () => {
    let breadcrumb = 'Project Gallery';
    
    if (urlParams.site) {
      breadcrumb += ` > ${siteNames[urlParams.site]}`;
      
      if (urlParams.project) {
        const project = filteredImages.find(img => img.id === urlParams.project);
        if (project) {
          breadcrumb += ` > ${project.title}`;
        }
      }
    }
    
    return breadcrumb;
  };

  const navigateToProject = (projectId) => {
    // In a real app, you'd use router navigation
    window.location.href = `/project/${projectId}`;
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
            Project Gallery
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            {getBreadcrumb()}
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Site Summary for site view */}
          {urlParams.site && !urlParams.project && siteDetails[urlParams.site] && (
            <div className="mb-8 sm:mb-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {siteDetails[urlParams.site].name}
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center text-base">
                      <span className="font-semibold text-gray-700 w-32">📍 Location:</span>
                      <span className="text-gray-600">{siteDetails[urlParams.site].location}</span>
                    </div>
                    <div className="flex items-center text-base">
                      <span className="font-semibold text-gray-700 w-32">🏢 Client:</span>
                      <span className="text-gray-600">{siteDetails[urlParams.site].clientName}</span>
                    </div>
                    <div className="flex items-center text-base">
                      <span className="font-semibold text-gray-700 w-32">📅 Year:</span>
                      <span className="text-gray-600">{siteDetails[urlParams.site].completionYear}</span>
                    </div>
                    <div className="flex items-center text-base">
                      <span className="font-semibold text-gray-700 w-32">💰 Value:</span>
                      <span className="text-green-600 font-semibold">{siteDetails[urlParams.site].projectValue}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Site Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Projects Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(galleryImagesBySite[urlParams.site] || []).map((project, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {project.title}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Scope:</h4>
                      <p className="text-sm text-gray-600">
                        {urlParams.site === 1 
                          ? "Complete electrical infrastructure for industrial facility including MCC panel installation, emergency repair systems, and custom panel design solutions."
                          : "Modern electrical systems for commercial complex including HT panel installation, APFC systems, transformer setup, and comprehensive load testing."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Summary for specific project */}
          {urlParams.project && filteredImages.length > 0 && (
            <div className="mb-8 sm:mb-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {filteredImages[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredImages[0].fullDescription}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-700 w-32">Location:</span>
                      <span className="text-gray-600">{filteredImages[0].location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-700 w-32">Completed:</span>
                      <span className="text-gray-600">{filteredImages[0].completionDate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-700 w-32">Duration:</span>
                      <span className="text-gray-600">{filteredImages[0].duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-700 w-32">Team Size:</span>
                      <span className="text-gray-600">{filteredImages[0].teamSize}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Project Highlights</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Challenges:</h4>
                      <p className="text-sm text-gray-600">{filteredImages[0].challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Solutions:</h4>
                      <p className="text-sm text-gray-600">{filteredImages[0].solutions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter - Only show if not viewing specific project */}
          {!urlParams.project && (
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Info */}
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {urlParams.site && ` from ${getCurrentSiteName()}`}
            </p>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {image.isPlaceholder ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl sm:text-3xl">📸</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            {image.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Photo coming soon
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={image.imageUrl}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                        <button 
                          onClick={() => navigateToProject(image.id)}
                          className="mt-3 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                      {image.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 font-medium">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        Project #{image.id.toString().padStart(3, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results Message */
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500 mb-6">
                No projects match your current filters. Try adjusting your selection.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Gallery Statistics */}
          <div className="mt-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {urlParams.site ? `${getCurrentSiteName()} Statistics` : 'Gallery Statistics'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {urlParams.site 
                  ? `Project statistics for ${getCurrentSiteName()}`
                  : 'Our growing collection of successful electrical projects'
                }
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {urlParams.site 
                    ? (galleryImagesBySite[urlParams.site] || []).length
                    : Object.values(galleryImagesBySite).flat().length
                  }+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  {urlParams.site ? '1' : Object.keys(galleryImagesBySite).length}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {urlParams.site ? 'Site' : 'Sites'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}