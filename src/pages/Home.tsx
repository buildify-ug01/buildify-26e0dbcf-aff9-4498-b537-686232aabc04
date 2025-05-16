
import { Link } from 'react-router-dom'
import GolferCard from '../components/GolferCard'
import { golfers } from '../data/golfers'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to GolfElite</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your premier destination for information about the world's top golfers.
          </p>
          <Link to="/news" className="btn btn-primary">
            Latest News
          </Link>
        </div>
      </section>

      {/* Top Golfers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Top 5 Golfers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {golfers.map(golfer => (
              <GolferCard key={golfer.id} golfer={golfer} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About GolfElite</h2>
            <p className="text-lg mb-8">
              GolfElite is dedicated to providing golf enthusiasts with comprehensive information about the world's top golfers. 
              Our mission is to celebrate the achievements of these exceptional athletes and keep fans updated with the latest news and developments in the world of golf.
            </p>
            <p className="text-gray-600">
              Stay connected with us for the most up-to-date profiles, statistics, and news about your favorite golfers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home