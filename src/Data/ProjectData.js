
// ProjectData.js - Separate data component
export const projectSitesData = [
  {
    siteId: 1,
    siteName: "Industrial Complex",
    location: "Chennai, Tamil Nadu",
    completionYear: "2023",
    totalProjects: 3,
    category: "Industrial",
    description: "Complete electrical infrastructure for industrial facility",
    imageUrl: '/placeholder-industrial.jpg',
    isPlaceholder: true,
    clientName: "MNO Engineering Works",
    projectValue: "₹25 Lakhs",
    keyFeatures: ["MCC Panel Installation", "Emergency Repair Systems", "Custom Panel Design"],
    projects: ["MCC Panel", "Emergency Repair", "Panel Design"]
  },
  {
    siteId: 2,
    siteName: "Commercial Plaza",
    location: "Mumbai, Maharashtra", 
    completionYear: "2024",
    totalProjects: 4,
    category: "Commercial",
    description: "Modern electrical systems for commercial complex",
    imageUrl: '/placeholder-commercial.jpg',
    isPlaceholder: true,
    clientName: "ABC Commercial Ltd",
    projectValue: "₹45 Lakhs",
    keyFeatures: ["HT Panel Installation", "APFC Systems", "Load Testing"],
    projects: ["HT Panel", "APFC System", "Transformer Setup", "Load Testing"]
  },
  {
    siteId: 3,
    siteName: "Residential Complex",
    location: "Bangalore, Karnataka",
    completionYear: "2024",
    totalProjects: 5,
    category: "Residential",
    description: "Complete electrical setup for luxury residential towers",
    imageUrl: '/placeholder-residential.jpg',
    isPlaceholder: true,
    clientName: "ABC Builders",
    projectValue: "₹35 Lakhs",
    keyFeatures: ["Smart Home Systems", "Energy Efficient Lighting", "Backup Power Solutions"],
    projects: ["Smart Wiring", "LED Installation", "UPS Systems", "Solar Setup", "Security Systems"]
  },
  {
    siteId: 4,
    siteName: "Healthcare Facility",
    location: "Pune, Maharashtra",
    completionYear: "2023",
    totalProjects: 6,
    category: "Healthcare",
    description: "Critical electrical systems for medical facility",
    imageUrl: '/placeholder-healthcare.jpg',
    isPlaceholder: true,
    clientName: "MediCare Hospitals",
    projectValue: "₹55 Lakhs",
    keyFeatures: ["Emergency Power Backup", "Medical Equipment Wiring", "Fire Safety Systems"],
    projects: ["ICU Wiring", "OT Power Systems", "Emergency Backup", "Fire Alarms", "Medical Gas Alarms", "UPS Installation"]
  },
  {
    siteId: 5,
    siteName: "Educational Institute",
    location: "Hyderabad, Telangana",
    completionYear: "2024",
    totalProjects: 4,
    category: "Educational",
    description: "Modern electrical infrastructure for educational campus",
    imageUrl: '/placeholder-educational.jpg',
    isPlaceholder: true,
    clientName: "Bright Future Schools",
    projectValue: "₹30 Lakhs",
    keyFeatures: ["Smart Classroom Systems", "Campus-wide Networking", "Energy Management"],
    projects: ["Classroom Wiring", "IT Infrastructure", "Auditorium Systems", "Sports Complex"]
  },
  {
    siteId: 6,
    siteName: "Manufacturing Unit",
    location: "Coimbatore, Tamil Nadu",
    completionYear: "2023",
    totalProjects: 7,
    category: "Industrial",
    description: "Heavy-duty electrical systems for manufacturing operations",
    imageUrl: '/placeholder-manufacturing.jpg',
    isPlaceholder: true,
    clientName: "TechnoManuf Industries",
    projectValue: "₹65 Lakhs",
    keyFeatures: ["High Voltage Systems", "Motor Control Centers", "Industrial Automation"],
    projects: ["HV Panels", "Motor Controls", "Automation Systems", "Power Distribution", "Safety Systems", "Instrumentation", "Control Room Setup"]
  }
];

// Portfolio statistics (computed from data)
export const getPortfolioStats = () => {
  const totalSites = projectSitesData.length;
  const totalProjects = projectSitesData.reduce((total, site) => total + site.totalProjects, 0);
  const categories = [...new Set(projectSitesData.map(site => site.category))];
  const totalValue = projectSitesData.reduce((total, site) => {
    const value = parseFloat(site.projectValue.replace(/[₹,\s]/g, '').replace('Lakhs', ''));
    return total + value;
  }, 0);

  return {
    totalSites,
    totalProjects,
    categoriesCount: categories.length,
    totalValue: `₹${totalValue} Lakhs`,
    categories,
    yearsExperience: 15,
    successRate: 100
  };
};

// Filter functions
export const filterSitesByCategory = (category) => {
  if (!category || category === 'All') return projectSitesData;
  return projectSitesData.filter(site => site.category === category);
};

export const filterSitesByLocation = (location) => {
  if (!location || location === 'All') return projectSitesData;
  return projectSitesData.filter(site => site.location.includes(location));
};

export const filterSitesByYear = (year) => {
  if (!year || year === 'All') return projectSitesData;
  return projectSitesData.filter(site => site.completionYear === year);
};

// Search function
export const searchSites = (searchTerm) => {
  if (!searchTerm) return projectSitesData;
  const term = searchTerm.toLowerCase();
  return projectSitesData.filter(site => 
    site.siteName.toLowerCase().includes(term) ||
    site.location.toLowerCase().includes(term) ||
    site.category.toLowerCase().includes(term) ||
    site.clientName.toLowerCase().includes(term) ||
    site.description.toLowerCase().includes(term) ||
    site.projects.some(project => project.toLowerCase().includes(term))
  );
};

// Get unique values for filters
export const getUniqueCategories = () => {
  return ['All', ...new Set(projectSitesData.map(site => site.category))];
};

export const getUniqueLocations = () => {
  const states = projectSitesData.map(site => site.location.split(', ')[1]);
  return ['All', ...new Set(states)];
};

export const getUniqueYears = () => {
  return ['All', ...new Set(projectSitesData.map(site => site.completionYear))];
};

// Get site by ID
export const getSiteById = (siteId) => {
  return projectSitesData.find(site => site.siteId === parseInt(siteId));
};

export default {
  projectSitesData,
  getPortfolioStats,
  filterSitesByCategory,
  filterSitesByLocation,
  filterSitesByYear,
  searchSites,
  getUniqueCategories,
  getUniqueLocations,
  getUniqueYears,
  getSiteById
};