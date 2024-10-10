import React from 'react'

interface CommentProps {
  text: string
  timestamp: string
}

const Comment: React.FC<CommentProps> = ({ text, timestamp }) => {
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleString()

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="text-gray-800">{text}</p>
      <p className="text-sm text-gray-500 mt-2">Posted on {formattedDate}</p>
    </div>
  )
}

export default Comment