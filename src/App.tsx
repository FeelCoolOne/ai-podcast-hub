import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShowList from './pages/ShowList'
import ShowDetails from './pages/ShowDetails'
import EpisodeDetails from './pages/EpisodeDetails'
import SearchResults from './pages/SearchResults'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<ShowList />} />
            <Route path="/shows/:showId" element={<ShowDetails />} />
            <Route path="/shows/:showId/episodes/:episodeId" element={<EpisodeDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App