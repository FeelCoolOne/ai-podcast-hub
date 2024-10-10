import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { shows } from '../data/shows'

const ShowDetails: React.FC = () => {
  const { showId } = useParams<{ showId: string }>()
  const show = shows.find((s) => s.id === showId)

  if (!show) {
    return <div>Show not found</div>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{show.title}</h2>
      <img src={show.coverImage} alt={show.title} className="w-full max-w-2xl mb-6 rounded-lg shadow-md" />
      <p className="text-xl mb-8">{show.description}</p>
      <h3 className="text-2xl font-semibold mb-4">Episodes</h3>
      <ul className="space-y-4">
        {show.episodes.map((episode) => (
          <li key={episode.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/shows/${showId}/episodes/${episode.id}`} className="text-lg font-semibold hover:text-indigo-600">
              {episode.title}
            </Link>
            <p className="text-gray-600 mt-2">{episode.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowDetails