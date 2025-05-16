
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Golfer } from '../types'
import LazyImage from './LazyImage'

interface GolferCardProps {
  golfer: Golfer
}

const GolferCard = memo(({ golfer }: GolferCardProps) => {
  return (
    <div className="golfer-card card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <LazyImage 
        src={golfer.imageUrl} 
        alt={golfer.name} 
        className="h-64 w-full"
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
})

GolferCard.displayName = 'GolferCard'

export default GolferCard