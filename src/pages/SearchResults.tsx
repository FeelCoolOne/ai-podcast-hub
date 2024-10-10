import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { shows } from '../data/shows'

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = shows.flatMap(show => {
    const matchingEpisodes = show.episodes.filter(episode =>
      episode.title.toLowerCase().includes(query.toLowerCase()) ||
      episode.description.toLowerCase().includes(query.toLowerCase())
    )

    if (show.title.toLowerCase().includes(query.toLowerCase()) ||
        show.description.toLowerCase().includes(query.toLowerCase()) ||
        matchingEpisodes.length > 0) {
      return [{
        type: 'show',
        id: show.id,
        title: show.title,
        description: show.description,
        coverImage: show.coverImage,
        matchingEpisodes
      }]
    }
    return []
  })

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="space-y-8">
          {results.map(result => (
            <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Link to={`/shows/${result.id}`} className="flex items-center space-x-4">
                  <img src={result.coverImage} alt={result.title} className="w-24 h-24 object-cover rounded-md" />
                  <div>
                    <h3 className="text-xl font-semibold">{result.title}</h3>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                </Link>
              </div>
              {result.matchingEpisodes.length > 0 && (
                <div className="bg-gray-100 p-4">
                  <h4 className="font-semibold mb-2">Matching Episodes:</h4>
                  <ul className="space-y-2">
                    {result.matchingEpisodes.map(episode => (
                      <li key={episode.id}>
                        <Link to={`/shows/${result.id}/episodes/${episode.id}`} className="text-indigo-600 hover:underline">
                          {episode.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults