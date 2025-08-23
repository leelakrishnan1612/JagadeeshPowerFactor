import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { galleryImagesBySite } from '../Data/ProjectDetails'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

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
          <div className="grid grid-cols-1 mb-8">
            {/* Project Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
              <div className="space-y-1">
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
           
          </div>

          {/* Project Photos */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Photos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {project.additionalPhotos.map((photo) => (
                <div key={photo.id} className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  {/* Check if photo has imageUrl, otherwise show placeholder */}
                  {photo.imageUrl ? (
                    <div className="aspect-square relative">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder (hidden by default) */}
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center absolute top-0 left-0" style={{ display: 'none' }}>
                        <span className="text-4xl">📸</span>
                      </div>
                    </div>
                  ) : (
                    // Show placeholder if no imageUrl
                    <div className="aspect-square bg-blue-100 flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                  )}

                  <div className="p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{photo.title}</h4>
                    <p className="text-xs text-gray-500">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Show different message based on whether images are available */}
            {project.additionalPhotos.some(photo => photo.imageUrl) ? (
              <p className="text-sm text-gray-500 mt-6 text-center">
                Click on images to view full size
              </p>
            ) : (
              <p className="text-sm text-gray-500 mt-6 text-center">
                Additional photos will be added as the project progresses
              </p>
            )}
          </div>

          {/* Share Button */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Share Project</h3>
            <div className="flex justify-center">
              <button
                onClick={() => shareProject(project)}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-lg"
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