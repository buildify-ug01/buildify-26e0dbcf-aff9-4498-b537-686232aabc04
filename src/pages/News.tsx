
import { useMemo } from 'react'
import NewsCard from '../components/NewsCard'
import { news } from '../data/news'

const News = () => {
  // Memoize news to prevent unnecessary re-renders
  const newsItems = useMemo(() => news, [])

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Golf News</h1>
      
      <div className="mb-12">
        {newsItems.map(item => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter to receive the latest news about your favorite golfers.</p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default News