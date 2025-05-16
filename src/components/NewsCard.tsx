
import { memo } from 'react'
import { News } from '../types'
import { format } from 'date-fns'
import LazyImage from './LazyImage'

interface NewsCardProps {
  news: News
}

const NewsCard = memo(({ news }: NewsCardProps) => {
  return (
    <div className="news-item py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <LazyImage 
            src={news.imageUrl} 
            alt={news.title} 
            className="h-48 w-full rounded-md"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-sm text-gray-500 mb-2">
            {format(new Date(news.date), 'MMMM d, yyyy')}
          </p>
          <h3 className="text-xl font-bold mb-2">{news.title}</h3>
          <p className="mb-4 text-gray-700">{news.summary}</p>
          <a 
            href={news.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary font-medium hover:underline"
          >
            Read full article →
          </a>
        </div>
      </div>
    </div>
  )
})

NewsCard.displayName = 'NewsCard'

export default NewsCard