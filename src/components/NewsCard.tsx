
import { News } from '../types'
import { format } from 'date-fns'

interface NewsCardProps {
  news: News
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="h-48 w-full object-cover rounded-md"
            loading="lazy"
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
            className="text-green-600 font-medium hover:underline"
          >
            Read full article →
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard