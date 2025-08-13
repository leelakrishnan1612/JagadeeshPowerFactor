import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    // Find the project based on the ID from URL params
    const foundProject = galleryImages.find(img => img.id === parseInt(projectId))
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

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            to="/gallery" 
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
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
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="mb-6">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              Project #{project.id.toString().padStart(3, '0')}
            </span>
          </div>
        </div>
      </section>

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
              <button className="px-8 py-4 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors text-lg">
                Request Similar Project
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
