// Gallery Data Component
export const GalleryData = {
  galleryImagesBySite: {
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
        title: 'Site Maintenance',
        category: 'Maintenance',
        description: 'Emergency switchgear repair services',
        imageUrl: '/placeholder-repair.jpg',
        isPlaceholder: false,
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
    // 2: [ // Site 2 - Commercial Plaza (ABC Commercial Ltd)
    //   {
    //     id: 206,
    //     title: 'HT Panel',
    //     category: 'HT Panels',
    //     description: 'High Tension panel for ABC Commercial Plaza',
    //     imageUrl: '/placeholder-ht.jpg',
    //     isPlaceholder: true,
    //     fullDescription: 'High Tension panel installation for ABC Commercial Plaza, Mumbai. Commercial-grade HT distribution systems with enhanced safety features and monitoring capabilities for the commercial complex.',
    //     location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
    //     completionDate: 'December 2024',
    //     duration: '5 weeks',
    //     teamSize: '6 engineers',
    //     challenges: 'Commercial building regulations compliance, integration with building management system, high voltage safety in occupied building',
    //     solutions: 'Smart building integration, automated monitoring systems, redundant safety mechanisms, compliance with Maharashtra state electrical codes',
    //     additionalPhotos: [
    //       { id: 1, title: 'HT Panel Design', description: 'High tension panel design and planning' },
    //       { id: 2, title: 'BMS Integration', description: 'Building management system integration' },
    //       { id: 3, title: 'Safety Systems', description: 'Enhanced safety and monitoring systems' },
    //       { id: 4, title: 'Final Testing', description: 'Comprehensive testing and commissioning' }
    //     ]
    //   },
    //   {
    //     id: 208,
    //     title: 'APFC System',
    //     category: 'Power Factor',
    //     description: 'Automatic Power Factor Correction system',
    //     imageUrl: '/placeholder-apfc.jpg',
    //     isPlaceholder: true,
    //     fullDescription: 'Automatic Power Factor Correction system installation for ABC Commercial Plaza. Advanced APFC panel with real-time monitoring and automatic capacitor switching for optimal power factor maintenance.',
    //     location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
    //     completionDate: 'November 2024',
    //     duration: '3 weeks',
    //     teamSize: '4 engineers',
    //     challenges: 'Power factor optimization for commercial loads, real-time monitoring requirements, integration with existing electrical infrastructure',
    //     solutions: 'Advanced APFC controller installation, real-time power monitoring, automatic capacitor bank switching, Mumbai utility compliance',
    //     additionalPhotos: [
    //       { id: 1, title: 'APFC Panel Installation', description: 'Automatic power factor correction panel setup' },
    //       { id: 2, title: 'Capacitor Bank Setup', description: 'Capacitor bank installation and wiring' },
    //       { id: 3, title: 'Controller Programming', description: 'APFC controller configuration and testing' },
    //       { id: 4, title: 'System Commissioning', description: 'Complete system testing and handover' }
    //     ]
    //   },
    //   {
    //     id: 209,
    //     title: 'Transformer Setup',
    //     category: 'Transformers',
    //     description: 'Distribution transformer installation and setup',
    //     imageUrl: '/placeholder-transformer.jpg',
    //     isPlaceholder: true,
    //     fullDescription: 'Distribution transformer installation for ABC Commercial Plaza. Complete transformer setup including foundation work, electrical connections, and protection systems for commercial power distribution.',
    //     location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
    //     completionDate: 'October 2024',
    //     duration: '4 weeks',
    //     teamSize: '5 engineers',
    //     challenges: 'Transformer positioning in commercial area, utility coordination, protection system integration',
    //     solutions: 'Crane installation method, utility coordination with MSEB, advanced protection relay systems, oil testing and commissioning',
    //     additionalPhotos: [
    //       { id: 1, title: 'Transformer Installation', description: 'Distribution transformer positioning and setup' },
    //       { id: 2, title: 'Protection Systems', description: 'Relay protection and monitoring systems' },
    //       { id: 3, title: 'Oil Testing', description: 'Transformer oil testing and analysis' },
    //       { id: 4, title: 'Final Commissioning', description: 'Complete transformer commissioning and testing' }
    //     ]
    //   },
    //   {
    //     id: 210,
    //     title: 'Load Testing',
    //     category: 'Testing',
    //     description: 'Comprehensive electrical load testing',
    //     imageUrl: '/placeholder-testing.jpg',
    //     isPlaceholder: true,
    //     fullDescription: 'Comprehensive electrical load testing for ABC Commercial Plaza, Mumbai. Complete electrical system validation including load analysis, capacity testing, and performance verification.',
    //     location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
    //     completionDate: 'January 2024',
    //     duration: '2 weeks',
    //     teamSize: '3 engineers',
    //     challenges: 'Load testing in operational commercial building, tenant coordination, comprehensive system validation',
    //     solutions: 'Phased testing approach, tenant notification systems, advanced testing equipment, minimal disruption scheduling',
    //     additionalPhotos: [
    //       { id: 1, title: 'Load Analysis', description: 'Comprehensive electrical load analysis' },
    //       { id: 2, title: 'Capacity Testing', description: 'System capacity and performance testing' },
    //       { id: 3, title: 'Performance Validation', description: 'Complete system performance verification' },
    //       { id: 4, title: 'Documentation', description: 'Load testing report and recommendations' }
    //     ]
    //   }
    // ]
  },

  siteNames: {
    1: "Site 1 - Industrial Complex",
    // 2: "Site 2 - Commercial Plaza", 
    // 3: "Site 3 - Manufacturing Unit",
    // 4: "Site 4 - Hospital Complex"
  },

  siteDetails: {
    1: {
      name: "Industrial Complex",
      location: "Chennai, Tamil Nadu",
      clientName: "MNO Engineering Works",
      completionYear: "2023",
      projectValue: "₹25 Lakhs"
    },
    // 2: {
    //   name: "Commercial Plaza", 
    //   location: "Mumbai, Maharashtra",
    //   clientName: "ABC Commercial Ltd",
    //   completionYear: "2024", 
    //   projectValue: "₹45 Lakhs"
    // },
    // 3: {
    //   name: "Manufacturing Unit",
    //   location: "Bangalore, Karnataka", 
    //   clientName: "XYZ Manufacturing Pvt Ltd",
    //   completionYear: "2025 (Ongoing)",
    //   projectValue: "₹60 Lakhs"
    // },
    // 4: {
    //   name: "Hospital Complex",
    //   location: "Delhi, India",
    //   clientName: "City Hospital Trust", 
    //   completionYear: "Coming Soon",
    //   projectValue: "₹80 Lakhs"
    // }
  },

  categories: ['All', 'HT Panels', 'LT Panels', 'Transformers', 'Maintenance', 'Testing', 'Design', 'Planning', 'Power Factor']
};

export default GalleryData;