import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, Headphones } from 'lucide-react'
import { shows } from '../data/shows'

const backgroundImages = [
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
]

const featuredEpisodes = shows.flatMap(show => 
  show.episodes.map(episode => ({
    ...episode,
    showId: show.id,
    showTitle: show.title,
    coverImage: show.coverImage
  }))
).slice(0, 6)

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <section className="relative h-[500px] mb-12 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to PodcastHub</h1>
          <p className="text-2xl mb-8">Discover amazing shows and listen to your favorite episodes</p>
          <Link to="/shows" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            <Headphones size={24} className="mr-2" />
            Explore Shows
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEpisodes.map((episode) => (
            <div key={`${episode.showId}-${episode.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/shows/${episode.showId}`} className="block">
                <img src={episode.coverImage} alt={episode.showTitle} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <Link to={`/shows/${episode.showId}`} className="block mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600">{episode.showTitle}</h3>
                </Link>
                <Link to={`/shows/${episode.showId}/episodes/${episode.id}`} className="block mb-4">
                  <h4 className="text-lg font-medium text-gray-700 hover:text-indigo-600">{episode.title}</h4>
                  <p className="text-gray-500 line-clamp-2 hover:text-indigo-600">{episode.description}</p>
                </Link>
                <Link 
                  to={`/shows/${episode.showId}/episodes/${episode.id}`} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <Play size={20} className="mr-1" />
                  Listen Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home