import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">InFo</h1>
          </div>
          
          {/* Navigation - now always visible but responsive */}
          <nav className="block">
            <div className="flex items-baseline space-x-2 sm:space-x-4 md:space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                Home
              </NavLink>
   
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <span className="hidden sm:inline">Javascript</span>
                <span className="sm:hidden">JS</span>
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <span className="hidden sm:inline">About us</span>
                <span className="sm:hidden">About</span>
              </NavLink>
              
              <NavLink 
                to='/skill'
                className={({ isActive }) => 
                  `px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <span className="hidden sm:inline">Your skill</span>
                <span className="sm:hidden">Skill</span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}