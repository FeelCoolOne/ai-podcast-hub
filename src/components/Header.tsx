import React from 'react'
import { Link } from 'react-router-dom'
import { Headphones } from 'lucide-react'
import SearchBar from './SearchBar'

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Headphones size={32} />
          <span>PodcastHub</span>
        </Link>
        <div className="flex items-center space-x-6">
          <SearchBar />
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
              <li><Link to="/shows" className="hover:text-indigo-200">Shows</Link></li>
              <li><Link to="/about" className="hover:text-indigo-200">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header