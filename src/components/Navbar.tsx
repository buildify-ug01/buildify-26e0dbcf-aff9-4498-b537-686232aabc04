
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow'}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600">
            GolfElite
          </Link>
          
          <nav className="flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-green-600" 
                  : "text-gray-600 hover:text-green-600 transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/news" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-green-600" 
                  : "text-gray-600 hover:text-green-600 transition-colors"
              }
            >
              News
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar