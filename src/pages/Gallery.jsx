
import { useState, useEffect } from 'react'

export default function Gallery() {
  // All gallery images organized by site (Updated with Industrial Complex data)
  
  const galleryImagesBySite = {
    1: [ // Site 1 - Industrial Complex (MNO Engineering Works)
      {
        id: 6,
        title: 'MCC Panel',
        category: 'LT Panels',
        description: 'Motor Control Center panel for MNO Engineering Works',
        imageUrl: '/placeholder-mcc.jpg',
        isPlaceholder: true,
        fullDescription: 'Motor Control Center panel installation for MNO Engineering Works, Chennai. Includes motor starters, overload protection, and control systems for multiple motors in the industrial facility.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'October 2023',
        duration: '3 weeks',
        teamSize: '4 engineers',
        challenges: 'Multiple motor coordination, control system integration in existing industrial setup',
        solutions: 'Modular MCC design, advanced control logic implementation, seamless integration with existing systems',
        additionalPhotos: [
          { id: 1, title: 'MCC Layout Design', description: 'Motor control center design and planning phase' },
          { id: 2, title: 'Motor Starters Installation', description: 'Individual motor control units installation' },
          { id: 3, title: 'Control System Integration', description: 'Central control system integration and testing' },
          { id: 4, title: 'Final Commissioning', description: 'Complete system testing and handover' }
        ]
      },
      {
        id: 8,
        title: 'Emergency Repair',
        category: 'Maintenance',
        description: 'Emergency switchgear repair services',
        imageUrl: '/placeholder-repair.jpg',
        isPlaceholder: true,
        fullDescription: 'Emergency repair of critical switchgear failure at MNO Engineering Works industrial complex. 24/7 emergency response with minimal production downtime to ensure business continuity.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'August 2023',
        duration: '3 days',
        teamSize: '2 engineers',
        challenges: 'Critical system failure during peak production, urgent timeline, parts availability',
        solutions: 'Emergency parts procurement from Chennai suppliers, round-the-clock repair work, temporary bypass systems',
        additionalPhotos: [
          { id: 1, title: 'Fault Analysis', description: 'Comprehensive switchgear failure investigation' },
          { id: 2, title: 'Emergency Repair Work', description: '24/7 emergency repair operations' },
          { id: 3, title: 'System Testing', description: 'Post-repair verification and load testing' },
          { id: 4, title: 'Documentation', description: 'Complete repair documentation and handover' }
        ]
      },
      {
        id: 9,
        title: 'Panel Design',
        category: 'Design',
        description: 'Custom panel design and layout for industrial facility',
        imageUrl: '/placeholder-design.jpg',
        isPlaceholder: true,
        fullDescription: 'Custom electrical panel design for MNO Engineering Works industrial complex. Advanced design including 3D modeling, thermal analysis, and compliance verification according to Indian standards.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'July 2023',
        duration: '4 weeks',
        teamSize: '2 engineers',
        challenges: 'Complex industrial design requirements, Tamil Nadu electricity board compliance, space constraints',
        solutions: '3D modeling software utilization, thermal analysis tools, modular design approach for easy maintenance',
        additionalPhotos: [
          { id: 1, title: '3D Panel Design', description: 'Advanced 3D modeling and visualization' },
          { id: 2, title: 'Thermal Analysis', description: 'Heat dissipation study and cooling system design' },
          { id: 3, title: 'Layout Planning', description: 'Optimal component arrangement and accessibility' },
          { id: 4, title: 'Compliance Verification', description: 'Standards compliance and safety verification' }
        ]
      }
    ],
    2: [ // Site 2 - Industrial Complex (MNO Engineering Works)
      {
        id: 6,
        title: 'MCC Panel',
        category: 'LT Panels',
        description: 'Motor Control Center panel for MNO Engineering Works',
        imageUrl: '/placeholder-mcc.jpg',
        isPlaceholder: true,
        fullDescription: 'Motor Control Center panel installation for MNO Engineering Works, Chennai. Includes motor starters, overload protection, and control systems for multiple motors in the industrial facility.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'October 2023',
        duration: '3 weeks',
        teamSize: '4 engineers',
        challenges: 'Multiple motor coordination, control system integration in existing industrial setup',
        solutions: 'Modular MCC design, advanced control logic implementation, seamless integration with existing systems',
        additionalPhotos: [
          { id: 1, title: 'MCC Layout Design', description: 'Motor control center design and planning phase' },
          { id: 2, title: 'Motor Starters Installation', description: 'Individual motor control units installation' },
          { id: 3, title: 'Control System Integration', description: 'Central control system integration and testing' },
          { id: 4, title: 'Final Commissioning', description: 'Complete system testing and handover' }
        ]
      },
      {
        id: 8,
        title: 'Emergency Repair',
        category: 'Maintenance',
        description: 'Emergency switchgear repair services',
        imageUrl: '/placeholder-repair.jpg',
        isPlaceholder: true,
        fullDescription: 'Emergency repair of critical switchgear failure at MNO Engineering Works industrial complex. 24/7 emergency response with minimal production downtime to ensure business continuity.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'August 2023',
        duration: '3 days',
        teamSize: '2 engineers',
        challenges: 'Critical system failure during peak production, urgent timeline, parts availability',
        solutions: 'Emergency parts procurement from Chennai suppliers, round-the-clock repair work, temporary bypass systems',
        additionalPhotos: [
          { id: 1, title: 'Fault Analysis', description: 'Comprehensive switchgear failure investigation' },
          { id: 2, title: 'Emergency Repair Work', description: '24/7 emergency repair operations' },
          { id: 3, title: 'System Testing', description: 'Post-repair verification and load testing' },
          { id: 4, title: 'Documentation', description: 'Complete repair documentation and handover' }
        ]
      },
      {
        id: 9,
        title: 'Panel Design',
        category: 'Design',
        description: 'Custom panel design and layout for industrial facility',
        imageUrl: '/placeholder-design.jpg',
        isPlaceholder: true,
        fullDescription: 'Custom electrical panel design for MNO Engineering Works industrial complex. Advanced design including 3D modeling, thermal analysis, and compliance verification according to Indian standards.',
        location: 'MNO Engineering Works, Chennai, Tamil Nadu',
        completionDate: 'July 2023',
        duration: '4 weeks',
        teamSize: '2 engineers',
        challenges: 'Complex industrial design requirements, Tamil Nadu electricity board compliance, space constraints',
        solutions: '3D modeling software utilization, thermal analysis tools, modular design approach for easy maintenance',
        additionalPhotos: [
          { id: 1, title: '3D Panel Design', description: 'Advanced 3D modeling and visualization' },
          { id: 2, title: 'Thermal Analysis', description: 'Heat dissipation study and cooling system design' },
          { id: 3, title: 'Layout Planning', description: 'Optimal component arrangement and accessibility' },
          { id: 4, title: 'Compliance Verification', description: 'Standards compliance and safety verification' }
        ]
      }
    ],
  };

  const siteNames = {
    1: "Site 1 - Industrial Complex",
    2: "Site 2 - Commercial Plaza", 
    3: "Site 3 - Manufacturing Unit",
    4: "Site 4 - Hospital Complex"
  };

  const siteDetails = {
    1: {
      name: "Industrial Complex",
      location: "Chennai, Tamil Nadu",
      clientName: "MNO Engineering Works",
      completionYear: "2023",
      projectValue: "₹25 Lakhs"
    },
    2: {
      name: "Commercial Plaza", 
      location: "Mumbai, Maharashtra",
      clientName: "ABC Commercial Ltd",
      completionYear: "2024", 
      projectValue: "₹45 Lakhs"
    },
    3: {
      name: "Manufacturing Unit",
      location: "Bangalore, Karnataka", 
      clientName: "XYZ Manufacturing Pvt Ltd",
      completionYear: "2025 (Ongoing)",
      projectValue: "₹60 Lakhs"
    },
    4: {
      name: "Hospital Complex",
      location: "Delhi, India",
      clientName: "City Hospital Trust", 
      completionYear: "Coming Soon",
      projectValue: "₹80 Lakhs"
    }
  };

  // State management
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

  // Available categories
  const categories = ['All', 'HT Panels', 'LT Panels', 'Transformers', 'Maintenance', 'Testing', 'Design', 'Planning'];

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
                        Complete electrical infrastructure for industrial facility including MCC panel installation, emergency repair systems, and custom panel design solutions.
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
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
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