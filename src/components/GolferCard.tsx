
import { Link } from 'react-router-dom'
import { Golfer } from '../types'

interface GolferCardProps {
  golfer: Golfer
}

const GolferCard = ({ golfer }: GolferCardProps) => {
  return (
    <div className="golfer-card card overflow-hidden">
      <img 
        src={golfer.imageUrl} 
        alt={golfer.name} 
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{golfer.name}</h3>
        <p className="text-sm text-gray-500 mb-2">World Ranking: {golfer.worldRanking}</p>
        <p className="mb-4 line-clamp-3">{golfer.shortBio}</p>
        <Link to={`/golfer/${golfer.id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default GolferCard