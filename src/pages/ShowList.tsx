import React from 'react'
import { Link } from 'react-router-dom'
import { shows } from '../data/shows'

const ShowList: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Shows</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show) => (
          <Link key={show.id} to={`/shows/${show.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={show.coverImage} alt={show.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
              <p className="text-gray-600">{show.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShowList