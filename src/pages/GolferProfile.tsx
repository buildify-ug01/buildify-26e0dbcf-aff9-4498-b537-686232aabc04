
import { useParams, Link } from 'react-router-dom'
import { golfers } from '../data/golfers'

const GolferProfile = () => {
  const { id } = useParams<{ id: string }>()
  const golfer = golfers.find(g => g.id === id)

  if (!golfer) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Golfer not found</h2>
        <p className="mb-8">The golfer you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <img 
            src={golfer.imageUrl} 
            alt={golfer.name} 
            className="w-full rounded-lg shadow-md mb-6"
          />
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">World Ranking:</span>
                <span className="font-medium">{golfer.worldRanking}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Country:</span>
                <span className="font-medium">{golfer.country}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Born:</span>
                <span className="font-medium">{golfer.birthDate}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Turned Pro:</span>
                <span className="font-medium">{golfer.turnedPro}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{golfer.name}</h1>
          <p className="text-gray-500 mb-6">{golfer.nickname}</p>
          
          <div className="prose max-w-none mb-8">
            <h2>Biography</h2>
            <p>{golfer.bio}</p>
            
            <h2>Career Highlights</h2>
            <ul>
              {golfer.careerHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            
            <h2>Major Championships</h2>
            <ul>
              {golfer.majorChampionships.map((major, index) => (
                <li key={index}>{major}</li>
              ))}
            </ul>
          </div>
          
          {golfer.videoUrl && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Career Highlights Video</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={golfer.videoUrl} 
                  title={`${golfer.name} career highlights`}
                  className="w-full h-96 rounded-lg"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GolferProfile