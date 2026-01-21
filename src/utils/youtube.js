// Extract YouTube video ID from URL or use direct ID
export const getYouTubeEmbedUrl = (id) => {
  if (!id) return ''
  // If it's already just an ID, use it directly
  if (id.length === 11 && !id.includes('/') && !id.includes('=')) {
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0&disablekb=1&fs=0`
  }
  // If it's a full URL, extract the ID
  const match = id.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
  const extractedId = match ? match[1] : id
  return `https://www.youtube.com/embed/${extractedId}?autoplay=1&rel=0&modestbranding=1`
}

