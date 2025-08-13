import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  // Placeholder data for gallery images - replace with actual client photos later
  const galleryImages = [
    {
      id: 1,
      title: 'HT Panel Installation',
      category: 'HT Panels',
      description: '11kV panel installation at industrial facility',
      imageUrl: '/placeholder-ht-panel.jpg', // Replace with actual image path
      isPlaceholder: true,
      // Additional details for modal
      fullDescription: 'Complete 11kV High Tension panel installation at ABC Industrial Facility. This project involved custom panel design, installation, testing, and commissioning. The panel includes VCB circuit breakers, protection relays, and advanced monitoring systems.',
      location: 'ABC Industrial Facility, Chennai',
      completionDate: 'March 2024',
      duration: '3 weeks',
      teamSize: '5 engineers',
      challenges: 'Custom panel design requirements, tight timeline',
      solutions: 'Modular design approach, parallel work streams',
      additionalPhotos: [
        { id: 1, title: 'Panel Design Phase', description: 'Initial design and layout planning' },
        { id: 2, title: 'Installation Process', description: 'Panel mounting and wiring' },
        { id: 3, title: 'Testing Phase', description: 'Load testing and commissioning' },
        { id: 4, title: 'Final Installation', description: 'Completed panel installation' }
      ]
    },
    {
      id: 2,
      title: 'LT Panel Setup',
      category: 'LT Panels',
      description: 'PCC panel installation and commissioning',
      imageUrl: '/placeholder-lt-panel.jpg',
      isPlaceholder: true,
      fullDescription: 'Power Control Center (PCC) panel installation for XYZ Manufacturing Unit. The project included MCC integration, APFC system, and distribution board setup. Successfully completed with zero downtime.',
      location: 'XYZ Manufacturing Unit, Bangalore',
      completionDate: 'February 2024',
      duration: '2 weeks',
      teamSize: '3 engineers',
      challenges: 'Working during production hours',
      solutions: 'Night shift installation, temporary power arrangements',
      additionalPhotos: [
        { id: 1, title: 'PCC Panel', description: 'Main power control center' },
        { id: 2, title: 'MCC Integration', description: 'Motor control center setup' },
        { id: 3, title: 'APFC System', description: 'Power factor correction' }
      ]
    },
    {
      id: 3,
      title: 'Transformer Installation',
      category: 'Transformers',
      description: '500kVA transformer installation',
      imageUrl: '/placeholder-transformer.jpg',
      isPlaceholder: true,
      fullDescription: '500kVA oil-cooled transformer installation at DEF Commercial Complex. Complete project including foundation preparation, transformer mounting, oil testing, and load testing.',
      location: 'DEF Commercial Complex, Mumbai',
      completionDate: 'January 2024',
      duration: '4 weeks',
      teamSize: '4 engineers',
      challenges: 'Heavy equipment handling, space constraints',
      solutions: 'Crane coordination, custom mounting structure',
      additionalPhotos: [
        { id: 1, title: 'Foundation Work', description: 'Transformer foundation preparation' },
        { id: 2, title: 'Installation', description: 'Transformer mounting process' },
        { id: 3, title: 'Oil Testing', description: 'Transformer oil analysis' },
        { id: 4, title: 'Load Testing', description: 'Performance testing phase' }
      ]
    },
    {
      id: 4,
      title: 'Switchgear Maintenance',
      category: 'Maintenance',
      description: 'ACB maintenance and testing',
      imageUrl: '/placeholder-switchgear.jpg',
      isPlaceholder: true,
      fullDescription: 'Annual maintenance of Air Circuit Breakers (ACB) at GHI Power Plant. Comprehensive maintenance including contact cleaning, thermal imaging, and performance testing.',
      location: 'GHI Power Plant, Delhi',
      completionDate: 'December 2023',
      duration: '1 week',
      teamSize: '2 engineers',
      challenges: 'Scheduled maintenance during peak hours',
      solutions: 'Coordinated shutdown, backup systems',
      additionalPhotos: [
        { id: 1, title: 'ACB Inspection', description: 'Circuit breaker examination' },
        { id: 2, title: 'Contact Cleaning', description: 'Contact maintenance work' },
        { id: 3, title: 'Thermal Imaging', description: 'Temperature analysis' }
      ]
    },
    {
      id: 5,
      title: 'APFC Panel',
      category: 'LT Panels',
      description: 'Auto Power Factor Correction panel',
      imageUrl: '/placeholder-apfc.jpg',
      isPlaceholder: true,
      fullDescription: 'Custom APFC panel design and installation for JKL Textile Mill. Advanced power factor correction system with automatic switching and monitoring capabilities.',
      location: 'JKL Textile Mill, Ahmedabad',
      completionDate: 'November 2023',
      duration: '2.5 weeks',
      teamSize: '3 engineers',
      challenges: 'Custom design requirements, power quality issues',
      solutions: 'Advanced APFC algorithms, real-time monitoring',
      additionalPhotos: [
        { id: 1, title: 'Panel Design', description: 'Custom APFC panel layout' },
        { id: 2, title: 'Installation', description: 'Panel mounting and wiring' },
        { id: 3, title: 'Testing', description: 'Power factor correction testing' }
      ]
    },
    {
      id: 6,
      title: 'MCC Panel',
      category: 'LT Panels',
      description: 'Motor Control Center panel',
      imageUrl: '/placeholder-mcc.jpg',
      isPlaceholder: true,
      fullDescription: 'Motor Control Center panel installation for MNO Engineering Works. Includes motor starters, overload protection, and control systems for multiple motors.',
      location: 'MNO Engineering Works, Pune',
      completionDate: 'October 2023',
      duration: '3 weeks',
      teamSize: '4 engineers',
      challenges: 'Multiple motor coordination, control system integration',
      solutions: 'Modular MCC design, advanced control logic',
      additionalPhotos: [
        { id: 1, title: 'MCC Layout', description: 'Motor control center design' },
        { id: 2, title: 'Motor Starters', description: 'Individual motor control units' },
        { id: 3, title: 'Control System', description: 'Central control integration' }
      ]
    },
    {
      id: 7,
      title: 'Testing & Commissioning',
      category: 'Testing',
      description: 'Load testing and commissioning',
      imageUrl: '/placeholder-testing.jpg',
      isPlaceholder: true,
      fullDescription: 'Comprehensive testing and commissioning services for PQR Industrial Complex. Includes insulation testing, earth resistance testing, and load flow analysis.',
      location: 'PQR Industrial Complex, Hyderabad',
      completionDate: 'September 2023',
      duration: '2 weeks',
      teamSize: '3 engineers',
      challenges: 'Complex system integration, multiple equipment types',
      solutions: 'Systematic testing approach, detailed documentation',
      additionalPhotos: [
        { id: 1, title: 'Insulation Testing', description: 'Electrical insulation verification' },
        { id: 2, title: 'Earth Testing', description: 'Ground resistance measurement' },
        { id: 3, title: 'Load Testing', description: 'System performance testing' }
      ]
    },
    {
      id: 8,
      title: 'Emergency Repair',
      category: 'Maintenance',
      description: 'Emergency switchgear repair',
      imageUrl: '/placeholder-repair.jpg',
      isPlaceholder: true,
      fullDescription: 'Emergency repair of critical switchgear failure at STU Manufacturing Plant. 24/7 emergency response with minimal downtime.',
      location: 'STU Manufacturing Plant, Kolkata',
      completionDate: 'August 2023',
      duration: '3 days',
      teamSize: '2 engineers',
      challenges: 'Critical system failure, production impact',
      solutions: 'Emergency parts procurement, round-the-clock work',
      additionalPhotos: [
        { id: 1, title: 'Fault Analysis', description: 'Switchgear failure investigation' },
        { id: 2, title: 'Repair Process', description: 'Emergency repair work' },
        { id: 3, title: 'Testing', description: 'Post-repair verification' }
      ]
    },
    {
      id: 9,
      title: 'Panel Design',
      category: 'Design',
      description: 'Custom panel design and layout',
      imageUrl: '/placeholder-design.jpg',
      isPlaceholder: true,
      fullDescription: 'Custom electrical panel design for VWX Research Facility. Advanced design including 3D modeling, thermal analysis, and compliance verification.',
      location: 'VWX Research Facility, Bangalore',
      completionDate: 'July 2023',
      duration: '4 weeks',
      teamSize: '2 engineers',
      challenges: 'Complex design requirements, compliance standards',
      solutions: '3D modeling software, thermal analysis tools',
      additionalPhotos: [
        { id: 1, title: '3D Design', description: 'Panel 3D modeling' },
        { id: 2, title: 'Thermal Analysis', description: 'Heat dissipation study' },
        { id: 3, title: 'Layout Planning', description: 'Component arrangement' }
      ]
    },
    {
      id: 10,
      title: 'Quality Inspection',
      category: 'Testing',
      description: 'Final quality inspection',
      imageUrl: '/placeholder-inspection.jpg',
      isPlaceholder: true,
      fullDescription: 'Final quality inspection and certification for YZA Power Station. Comprehensive inspection including safety checks, performance verification, and documentation.',
      location: 'YZA Power Station, Chennai',
      completionDate: 'June 2023',
      duration: '1 week',
      teamSize: '3 engineers',
      challenges: 'High safety standards, regulatory compliance',
      solutions: 'Detailed inspection checklist, third-party verification',
      additionalPhotos: [
        { id: 1, title: 'Safety Checks', description: 'Safety system verification' },
        { id: 2, title: 'Performance Test', description: 'System performance verification' },
        { id: 3, title: 'Documentation', description: 'Final documentation review' }
      ]
    },
    {
      id: 11,
      title: 'Site Survey',
      category: 'Planning',
      description: 'Electrical site survey',
      imageUrl: '/placeholder-survey.jpg',
      isPlaceholder: true,
      fullDescription: 'Comprehensive electrical site survey for BCD Industrial Park. Detailed assessment including load analysis, infrastructure evaluation, and project planning.',
      location: 'BCD Industrial Park, Mumbai',
      completionDate: 'May 2023',
      duration: '1 week',
      teamSize: '2 engineers',
      challenges: 'Large facility, multiple buildings',
      solutions: 'Systematic survey approach, detailed documentation',
      additionalPhotos: [
        { id: 1, title: 'Site Assessment', description: 'Overall site evaluation' },
        { id: 2, title: 'Load Analysis', description: 'Electrical load assessment' },
        { id: 3, title: 'Infrastructure', description: 'Existing infrastructure review' }
      ]
    },
    {
      id: 12,
      title: 'Commissioning',
      category: 'Testing',
      description: 'System commissioning process',
      imageUrl: '/placeholder-commissioning.jpg',
      isPlaceholder: true,
      fullDescription: 'Complete system commissioning for EFG Manufacturing Unit. Includes system integration, performance testing, and operator training.',
      location: 'EFG Manufacturing Unit, Pune',
      completionDate: 'April 2023',
      duration: '2 weeks',
      teamSize: '4 engineers',
      challenges: 'System integration complexity, operator training',
      solutions: 'Phased commissioning, comprehensive training program',
      additionalPhotos: [
        { id: 1, title: 'Integration', description: 'System integration process' },
        { id: 2, title: 'Testing', description: 'Performance testing phase' },
        { id: 3, title: 'Training', description: 'Operator training session' }
      ]
    }
  ];

  const categories = ['All', 'HT Panels', 'LT Panels', 'Transformers', 'Maintenance', 'Testing', 'Design', 'Planning'];



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
            Explore our completed electrical projects and installations
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {image.isPlaceholder ? (
                    // Placeholder content - replace with actual images later
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
                    // Actual image will go here
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
                                            <Link 
                        to={`/project/${image.id}`}
                        className="mt-3 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
                      >
                        View Details
                      </Link>
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Load More Projects
            </button>
          </div>

          {/* Gallery Stats */}
          <div className="mt-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Gallery Statistics
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Our growing collection of successful electrical projects
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {galleryImages.length}+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years</div>
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


