import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [loading, setLoading] = useState(true)

  // Updated gallery images structure to match your Gallery component
  // Updated Gallery Data Structure with Unique IDs
const galleryImagesBySite = {
  1: [ // Site 1 - Industrial Complex (MNO Engineering Works)
    {
      id: 6,  // Unique ID for Site 1 MCC Panel
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
      id: 8,  // Unique ID for Site 1 Emergency Repair
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
      id: 9,  // Unique ID for Site 1 Panel Design
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
  2: [ // Site 2 - Commercial Plaza
    {
      id: 106,  // CHANGED: Unique ID for Site 2 MCC Panel (was 6, now 106)
      title: 'MCC Panel',
      category: 'LT Panels',
      description: 'Motor Control Center panel for ABC Commercial Plaza',
      imageUrl: '/placeholder-mcc.jpg',
      isPlaceholder: true,
      fullDescription: 'Motor Control Center panel installation for ABC Commercial Plaza, Mumbai. Commercial-grade motor control systems with enhanced safety features and monitoring capabilities for the commercial complex.',
      location: 'ABC Commercial Plaza, Mumbai, Maharashtra', // CHANGED: Different location
      completionDate: 'December 2023', // CHANGED: Different date
      duration: '4 weeks', // CHANGED: Different duration
      teamSize: '5 engineers', // CHANGED: Different team size
      challenges: 'Commercial building regulations compliance, integration with building management system, 24/7 operational requirements',
      solutions: 'gdg',
      additionalPhotos: [
        { id: 1, title: 'Commercial MCC Design', description: 'Commercial-grade motor control center design' },
        { id: 2, title: 'BMS Integration', description: 'Building management system integration' },
        { id: 3, title: 'Safety Systems', description: 'Enhanced safety and monitoring systems' },
        { id: 4, title: 'Final Testing', description: 'Comprehensive testing and commissioning' }
      ]
    },
    {
      id: 108,  // CHANGED: Unique ID for Site 2 Emergency Repair (was 8, now 108)
      title: 'Emergency Repair',
      category: 'Maintenance',
      description: 'Emergency electrical system repair services',
      imageUrl: '/placeholder-repair.jpg',
      isPlaceholder: true,
      fullDescription: 'Emergency repair services for ABC Commercial Plaza electrical systems. Quick response team deployment to minimize business disruption and ensure continuous operations.',
      location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
      completionDate: 'November 2023',
      duration: '2 days',
      teamSize: '3 engineers',
      challenges: 'Minimal business disruption, working in occupied commercial space, coordination with multiple tenants',
      solutions: 'Phased repair approach, temporary power arrangements, 24/7 coordination with building management',
      additionalPhotos: [
        { id: 1, title: 'System Diagnosis', description: 'Rapid fault identification and analysis' },
        { id: 2, title: 'Repair Execution', description: 'Efficient repair with minimal disruption' },
        { id: 3, title: 'System Restoration', description: 'Full system restoration and testing' },
        { id: 4, title: 'Documentation', description: 'Complete repair documentation and preventive recommendations' }
      ]
    },
    {
      id: 109,  // CHANGED: Unique ID for Site 2 Panel Design (was 9, now 109)
      title: 'Panel Design',
      category: 'Design',
      description: 'Custom commercial electrical panel design',
      imageUrl: '/placeholder-design.jpg',
      isPlaceholder: true,
      fullDescription: 'Custom electrical panel design for ABC Commercial Plaza. Modern commercial-grade design with focus on energy efficiency, monitoring capabilities, and compliance with commercial building standards.',
      location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
      completionDate: 'September 2023',
      duration: '5 weeks',
      teamSize: '3 engineers',
      challenges: 'Commercial building codes compliance, energy efficiency requirements, integration with existing infrastructure',
      solutions: 'Energy-efficient design, smart monitoring systems, phased implementation approach',
      additionalPhotos: [
        { id: 1, title: 'Commercial Panel Design', description: 'Energy-efficient commercial panel design' },
        { id: 2, title: 'Smart Systems', description: 'Smart monitoring and control systems' },
        { id: 3, title: 'Energy Analysis', description: 'Energy efficiency optimization' },
        { id: 4, title: 'Code Compliance', description: 'Commercial building standards compliance verification' }
      ]
    },
    {
      id: 110,  // NEW: Additional project for Site 2
      title: 'HT Switchgear',
      category: 'HT Panels',
      description: 'High Tension switchgear installation',
      imageUrl: '/placeholder-ht.jpg',
      isPlaceholder: true,
      fullDescription: 'High Tension switchgear installation for ABC Commercial Plaza, Mumbai. Complete electrical distribution system for multi-story commercial complex with enhanced safety and monitoring features.',
      location: 'ABC Commercial Plaza, Mumbai, Maharashtra',
      completionDate: 'January 2024',
      duration: '6 weeks',
      teamSize: '6 engineers',
      challenges: 'High voltage safety protocols, complex installation in occupied building, coordination with utility providers',
      solutions: 'Phased installation approach, advanced safety measures, minimal disruption scheduling, utility coordination',
      additionalPhotos: [
        { id: 1, title: 'HT Panel Installation', description: 'High tension switchgear setup and installation' },
        { id: 2, title: 'Safety Protocols', description: 'Advanced safety measures and testing procedures' },
        { id: 3, title: 'System Integration', description: 'Integration with existing electrical infrastructure' },
        { id: 4, title: 'Final Commissioning', description: 'Comprehensive system testing and commissioning' }
      ]
    }
  ]
};

  useEffect(() => {
    // Search through all sites to find the project
    let foundProject = null;
    
    // Flatten all projects from all sites and search
    const allProjects = Object.values(galleryImagesBySite).flat();
    foundProject = allProjects.find(project => project.id === parseInt(projectId));
    
    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [projectId])

  // Function to download project report as PDF
  const downloadProjectReport = async (project) => {
    setIsGeneratingPDF(true);
    
    try {
      // Create a temporary div for PDF generation
      const pdfContainer = document.createElement('div');
      pdfContainer.style.position = 'absolute';
      pdfContainer.style.left = '-9999px';
      pdfContainer.style.top = '0';
      pdfContainer.style.width = '800px';
      pdfContainer.style.padding = '40px';
      pdfContainer.style.backgroundColor = 'white';
      pdfContainer.style.fontFamily = 'Arial, sans-serif';
      pdfContainer.style.color = '#333';
      
      // Generate PDF content with HTML structure
      pdfContainer.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1e40af; margin: 0; font-size: 28px;">JAGADEESH POWERFACTOR</h1>
          <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">Electrical Engineering Solutions</p>
          <hr style="border: 2px solid #1e40af; margin: 20px 0;">
        </div>
        
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px;">PROJECT REPORT</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; font-size: 20px; margin: 0 0 15px 0;">${project.title}</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 14px;">
              <div><strong>Category:</strong> ${project.category}</div>
              <div><strong>Project ID:</strong> #${project.id.toString().padStart(3, '0')}</div>
              <div><strong>Location:</strong> ${project.location}</div>
              <div><strong>Completion Date:</strong> ${project.completionDate}</div>
              <div><strong>Duration:</strong> ${project.duration}</div>
              <div><strong>Team Size:</strong> ${project.teamSize}</div>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">PROJECT OVERVIEW</h3>
          <p style="line-height: 1.6; font-size: 14px; text-align: justify;">${project.fullDescription}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">CHALLENGES & SOLUTIONS</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">
              <h4 style="color: #dc2626; margin: 0 0 10px 0; font-size: 16px;">Challenges</h4>
              <p style="margin: 0; font-size: 14px;">${project.challenges}</p>
            </div>
            <div style="background: #f0fdf4; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a;">
              <h4 style="color: #16a34a; margin: 0 0 10px 0; font-size: 16px;">Solutions</h4>
              <p style="margin: 0; font-size: 14px;">${project.solutions}</p>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">PROJECT PHASES</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${project.additionalPhotos.map(photo => `
              <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 14px;">${photo.title}</h4>
                <p style="margin: 0; font-size: 12px; color: #6b7280;">${photo.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">TECHNICAL SPECIFICATIONS</h3>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; font-size: 14px;">
            <div style="margin-bottom: 8px;"><strong>Project Category:</strong> ${project.category}</div>
            <div style="margin-bottom: 8px;"><strong>Project Complexity:</strong> ${project.teamSize.includes('5') ? 'High' : project.teamSize.includes('4') ? 'Medium-High' : project.teamSize.includes('3') ? 'Medium' : 'Standard'}</div>
            <div style="margin-bottom: 8px;"><strong>Quality Standards:</strong> ISO 9001:2015 Compliant</div>
            <div style="margin-bottom: 8px;"><strong>Safety Standards:</strong> IEC 61439, IEC 62271</div>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">CLIENT FEEDBACK</h3>
          <div style="background: #fefce8; padding: 20px; border-radius: 8px; border-left: 4px solid #eab308;">
            <p style="margin: 0; font-style: italic; font-size: 14px; color: #92400e;">"Excellent work quality and professional service. Project completed on time and within budget. The team demonstrated exceptional technical expertise and attention to detail."</p>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">CONTACT INFORMATION</h3>
          <div style="background: #1e40af; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="margin: 0 0 15px 0; font-size: 18px;">Jagadeesh PowerFactor</h4>
            <div style="font-size: 14px; line-height: 1.8;">
              <div>📞 Phone: +91 893 962 0577</div>
              <div>📧 Email: info@jagadeeshpowerfactor.com</div>
              <div>🌐 Website: www.jagadeeshpowerfactor.com</div>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p style="margin: 5px 0;">Report Generated: ${new Date().toLocaleDateString()}</p>
          <p style="margin: 5px 0;">Generated By: Jagadeesh PowerFactor Team</p>
          <p style="margin: 5px 0;">© 2024 Jagadeesh PowerFactor. All rights reserved.</p>
        </div>
      `;
      
      document.body.appendChild(pdfContainer);
      
      // Convert HTML to canvas
      const canvas = await html2canvas(pdfContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Remove temporary container
      document.body.removeChild(pdfContainer);
      
      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20; // 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 10; // 10mm top margin
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= (pdfHeight - 20); // Account for margins
      
      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= (pdfHeight - 20);
      }
      
      // Save PDF
      const fileName = `Project_Report_${project.title.replace(/\s+/g, '_')}_${project.id.toString().padStart(3, '0')}.pdf`;
      pdf.save(fileName);
      
      // Show success message
      alert(`PDF report for "${project.title}" has been downloaded successfully!`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Function to share project
  const shareProject = (project) => {
    if (navigator.share) {
      navigator.share({
        title: `${project.title} - Jagadeesh PowerFactor`,
        text: `Check out this amazing electrical project: ${project.title}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `${project.title} - Jagadeesh PowerFactor\n${project.description}\n\nView more at: ${window.location.href}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Project details copied to clipboard!');
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  // If project not found, show error message
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-gray-300 mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Project Not Found</h3>
          <p className="text-gray-500 mb-6">
            The project you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/gallery"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 pt-20 pb-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Link
              to="/gallery"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Gallery
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full">
              📍 {project.location.split(',')[0]}
            </span>
            <span className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full">
              📅 {project.completionDate}
            </span>
            <span className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full">
              🏷️ {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Project Overview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Project Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-gray-900">{project.location}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Completion Date:</span>
                  <span className="font-medium text-gray-900">{project.completionDate}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{project.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Team Size:</span>
                  <span className="font-medium text-gray-900">{project.teamSize}</span>
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Challenges & Solutions</h3>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="text-red-700 font-semibold mb-2">Challenges</h4>
                  <p className="text-red-600">{project.challenges}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="text-green-700 font-semibold mb-2">Solutions</h4>
                  <p className="text-green-600">{project.solutions}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Photos */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Photos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {project.additionalPhotos.map((photo) => (
                <div key={photo.id} className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition-colors">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">📸</span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{photo.title}</h4>
                  <p className="text-xs text-gray-500">{photo.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              Additional photos will be added as the project progresses
            </p>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Get Project Report</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => downloadProjectReport(project)}
                disabled={isGeneratingPDF}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isGeneratingPDF ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <span>📄</span>
                    Download PDF Report
                  </>
                )}
              </button>
              
              <button 
                onClick={() => shareProject(project)}
                className="px-8 py-4 bg-gray-600 text-white rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <span>📤</span>
                Share Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}