
export const projectSitesData = [
    {
        siteId: 1,
        siteName: "Industrial Complex",
        location: "Chennai, Tamil Nadu",
        completionYear: "2023",
        totalProjects: 3,
        category: "Industrial",
        description: "Complete electrical infrastructure for industrial facility",
        imageUrl: '/images/sites/site1.jpg',
        isPlaceholder: false,
        clientName: "MNO Engineering Works",
        projectValue: "₹25 Lakhs",
        keyFeatures: ["MCC Panel Installation", "Emergency Repair Systems", "Custom Panel Design"],
        projects: ["MCC Panel", "Emergency Repair", "Panel Design"]
    },
    // {
    //     siteId: 2,
    //     siteName: "Commercial Plaza",
    //     location: "Mumbai, Maharashtra",
    //     completionYear: "2024",
    //     totalProjects: 4,
    //     category: "Commercial",
    //     description: "Modern electrical systems for commercial complex",
    //     imageUrl: '/placeholder-commercial.jpg',
    //     isPlaceholder: true,
    //     clientName: "ABC Commercial Ltd",
    //     projectValue: "₹45 Lakhs",
    //     keyFeatures: ["HT Panel Installation", "APFC Systems", "Load Testing"],
    //     projects: ["HT Panel", "APFC System", "Transformer Setup", "Load Testing"]
    // },
    
   
  
   
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