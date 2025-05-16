
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            GolfElite
          </Link>
          
          <nav className="flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "font-medium text-primary" : "text-gray-600 hover:text-primary"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/news" 
              className={({ isActive }) => 
                isActive ? "font-medium text-primary" : "text-gray-600 hover:text-primary"
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