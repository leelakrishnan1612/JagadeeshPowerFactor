// src/utils/cloudinary.js

// Replace 'your-cloud-name' with your actual Cloudinary cloud name
// You'll get this after signing up at cloudinary.com
const CLOUD_NAME = 'dc2jaaipp' // Change this!

/**
 * Get optimized image URL from Cloudinary
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImage = (publicId, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'center'
  } = options

  // Build transformation string
  const transformations = `w_${width},h_${height},c_${crop},g_${gravity},q_${quality},f_${format}`
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`
}

/**
 * Get responsive image URLs for different screen sizes
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @returns {object} - Object with different image sizes
 */
export const getResponsiveImages = (publicId) => {
  return {
    // For thumbnails and previews
    thumbnail: getOptimizedImage(publicId, { 
      width: 200, 
      height: 200, 
      crop: 'thumb',
      quality: 'auto'
    }),
    
    // For mobile devices
    small: getOptimizedImage(publicId, { 
      width: 400, 
      height: 300, 
      quality: 'auto'
    }),
    
    // For tablets
    medium: getOptimizedImage(publicId, { 
      width: 800, 
      height: 600, 
      quality: 'auto'
    }),
    
    // For desktop
    large: getOptimizedImage(publicId, { 
      width: 1200, 
      height: 900, 
      quality: 'auto'
    }),
    
    // For hero images
    hero: getOptimizedImage(publicId, { 
      width: 1600, 
      height: 1200, 
      quality: 'auto'
    })
  }
}

/**
 * Get image URL with custom transformations
 * @param {string} publicId - The public ID of the image
 * @param {string} transformations - Raw transformation string
 * @returns {string} - Image URL with custom transformations
 */
export const getCustomImage = (publicId, transformations) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`
}

/**
 * Get placeholder image (very small, blurred) for loading states
 * @param {string} publicId - The public ID of the image
 * @returns {string} - Tiny placeholder image URL
 */
export const getPlaceholderImage = (publicId) => {
  return getOptimizedImage(publicId, {
    width: 50,
    height: 50,
    quality: 20,
    crop: 'thumb'
  })
}

/**
 * Upload image to Cloudinary (for future use)
 * @param {File} file - Image file to upload
 * @param {string} folder - Folder name in Cloudinary
 * @returns {Promise} - Upload response
 */
export const uploadImage = async (file, folder = 'projects') => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'your-upload-preset') // You'll create this in Cloudinary
  formData.append('folder', folder)

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    )
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}