import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { shows } from '../data/shows'
import Comment from '../components/Comment'

const EpisodeDetails: React.FC = () => {
  const { showId, episodeId } = useParams<{ showId: string; episodeId: string }>()
  const show = shows.find((s) => s.id === showId)
  const episode = show?.episodes.find((e) => e.id === episodeId)

  const [newComment, setNewComment] = useState('')

  if (!episode) {
    return <div>Episode not found</div>
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        text: newComment.trim(),
        timestamp: new Date().toISOString(),
      }
      episode.comments.push(comment)
      setNewComment('')
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{episode.title}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <audio controls className="w-full mb-6">
          <source src={episode.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xl mb-4">{episode.description}</p>
        <div className="text-gray-600">
          <p>Duration: {episode.duration}</p>
          <p>Published: {episode.publishDate}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4">Show Notes</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">Host</h4>
            <p>{episode.host || 'Information not available'}</p>
          </div>
          {episode.guests && (
            <div>
              <h4 className="text-lg font-medium">Guests</h4>
              <ul className="list-disc list-inside">
                {episode.guests.map((guest, index) => (
                  <li key={index}>{guest}</li>
                ))}
              </ul>
            </div>
          )}
          {episode.topics && (
            <div>
              <h4 className="text-lg font-medium">Topics Covered</h4>
              <ul className="list-disc list-inside">
                {episode.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
          {episode.resources && (
            <div>
              <h4 className="text-lg font-medium">Additional Resources</h4>
              <ul className="list-disc list-inside">
                {episode.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Post Comment
          </button>
        </form>
        {episode.comments.length > 0 ? (
          episode.comments.map((comment) => (
            <Comment key={comment.id} text={comment.text} timestamp={comment.timestamp} />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}

export default EpisodeDetails