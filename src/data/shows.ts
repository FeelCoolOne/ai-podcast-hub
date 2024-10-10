export const shows = [
  {
    id: 'tech-talk',
    title: 'Tech Talk',
    description: 'Exploring the latest trends and innovations in technology',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    episodes: [
      {
        id: 'ai-revolution',
        title: 'The AI Revolution',
        description: 'Discussing the impact of artificial intelligence on various industries',
        audioUrl: 'https://example.com/tech-talk/ai-revolution.mp3',
        duration: '45:30',
        publishDate: 'May 15, 2024',
        host: 'Sarah Johnson',
        guests: ['Dr. Alan Turing', 'Prof. Fei-Fei Li'],
        topics: [
          'Introduction to AI and its current state',
          'AI applications in healthcare',
          'Ethical considerations in AI development',
          'Future predictions for AI technology'
        ],
        resources: [
          { title: 'AI Ethics Guidelines', url: 'https://example.com/ai-ethics' },
          { title: 'Machine Learning Basics', url: 'https://example.com/ml-basics' }
        ],
        comments: [
          { id: '1', text: 'Great episode! Really insightful.', timestamp: '2024-05-16T10:30:00Z' },
          { id: '2', text: 'I learned so much about AI from this.', timestamp: '2024-05-17T14:45:00Z' },
        ],
      },
      {
        id: 'future-of-vr',
        title: 'The Future of Virtual Reality',
        description: 'Exploring the potential applications of VR technology',
        audioUrl: 'https://example.com/tech-talk/future-of-vr.mp3',
        duration: '38:45',
        publishDate: 'May 22, 2024',
        host: 'Sarah Johnson',
        guests: ['Mark Zuckerberg', 'Palmer Luckey'],
        topics: [
          'Current state of VR technology',
          'VR in gaming and entertainment',
          'Applications of VR in education and training',
          'Challenges and limitations of VR'
        ],
        resources: [
          { title: 'VR Development Tools', url: 'https://example.com/vr-dev-tools' },
          { title: 'History of Virtual Reality', url: 'https://example.com/vr-history' }
        ],
        comments: [],
      },
      {
        id: 'blockchain-explained',
        title: 'Blockchain Explained',
        description: 'Demystifying blockchain technology and its potential applications',
        audioUrl: 'https://example.com/tech-talk/blockchain-explained.mp3',
        duration: '52:15',
        publishDate: 'May 29, 2024',
        host: 'Sarah Johnson',
        guests: ['Vitalik Buterin', 'Andreas Antonopoulos'],
        topics: [
          'What is blockchain technology?',
          'Cryptocurrencies and their impact',
          'Smart contracts and decentralized applications',
          'Potential use cases beyond finance'
        ],
        resources: [
          { title: 'Blockchain for Beginners', url: 'https://example.com/blockchain-basics' },
          { title: 'Ethereum Whitepaper', url: 'https://ethereum.org/whitepaper/' }
        ],
        comments: [],
      },
    ],
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    description: 'Empowering you to live your best, healthiest life',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    episodes: [
      {
        id: 'nutrition-myths',
        title: 'Debunking Common Nutrition Myths',
        description: 'Separating fact from fiction in the world of nutrition',
        audioUrl: 'https://example.com/health-wellness/nutrition-myths.mp3',
        duration: '41:20',
        publishDate: 'May 18, 2024',
        host: 'Dr. Emily Chen',
        guests: ['Dr. Michael Greger', 'Registered Dietitian Jane Smith'],
        topics: [
          'The truth about fad diets',
          'Superfoods: fact or marketing hype?',
          'The role of supplements in a healthy diet',
          "Personalized nutrition: one size doesn't fit all"
        ],
        resources: [
          { title: "Nutrition Facts Database", url: 'https://example.com/nutrition-facts' },
          { title: 'Healthy Eating Guidelines', url: 'https://example.com/healthy-eating' }
        ],
        comments: [],
      },
      {
        id: 'mindfulness-meditation',
        title: 'The Power of Mindfulness and Meditation',
        description: 'Exploring the benefits of mindfulness practices for mental health',
        audioUrl: 'https://example.com/health-wellness/mindfulness-meditation.mp3',
        duration: '35:45',
        publishDate: 'May 25, 2024',
        host: 'Dr. Emily Chen',
        guests: ['Jon Kabat-Zinn', 'Tara Brach'],
        topics: [
          'Introduction to mindfulness meditation',
          'Scientific benefits of regular meditation practice',
          'Incorporating mindfulness into daily life',
          'Guided meditation session'
        ],
        resources: [
          { title: 'Mindfulness Apps Comparison', url: 'https://example.com/mindfulness-apps' },
          { title: 'Guided Meditation Library', url: 'https://example.com/guided-meditations' }
        ],
        comments: [],
      },
    ],
  },
  {
    id: 'true-crime',
    title: 'Unsolved Mysteries',
    description: 'Diving deep into perplexing unsolved cases and mysterious events',
    coverImage: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    episodes: [
      {
        id: 'zodiac-killer',
        title: 'The Zodiac Killer: A Cold Case Revisited',
        description: 'Examining the infamous Zodiac Killer case and recent developments',
        audioUrl: 'https://example.com/true-crime/zodiac-killer.mp3',
        duration: '58:30',
        publishDate: 'May 20, 2024',
        host: 'Detective Alex Morgan',
        guests: ['Former FBI Profiler John Douglas', 'Cryptography Expert Dr. Sarah Lee'],
        topics: [
          'Overview of the Zodiac Killer case',
          "Analysis of the Zodiac's ciphers",
          'Potential suspects and theories',
          'Impact of modern forensic techniques on cold cases'
        ],
        resources: [
          { title: 'Zodiac Killer Case Files', url: 'https://example.com/zodiac-files' },
          { title: 'Cryptography in Criminal Investigations', url: 'https://example.com/crypto-forensics' }
        ],
        comments: [],
      },
      {
        id: 'bermuda-triangle',
        title: 'The Bermuda Triangle: Fact vs. Fiction',
        description: 'Investigating the myths and realities of the Bermuda Triangle',
        audioUrl: 'https://example.com/true-crime/bermuda-triangle.mp3',
        duration: '45:15',
        publishDate: 'May 27, 2024',
        host: 'Detective Alex Morgan',
        guests: ['Oceanographer Dr. James Smith', 'Aviation Expert Captain Maria Rodriguez'],
        topics: [
          'History of Bermuda Triangle incidents',
          'Scientific explanations for disappearances',
          'Analysis of popular theories and myths',
          'Modern navigation and safety in the region'
        ],
        resources: [
          { title: 'Bermuda Triangle Incident Database', url: 'https://example.com/bermuda-incidents' },
          { title: 'Ocean Current Patterns', url: 'https://example.com/ocean-currents' }
        ],
        comments: [],
      },
    ],
  },
  {
    id: 'startup-stories',
    title: 'Startup Stories',
    description: 'Inspiring tales of entrepreneurship and innovation',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    episodes: [
      {
        id: 'airbnb-journey',
        title: 'Airbnb: From Air Mattresses to Billion-Dollar Empire',
        description: 'The inspiring story of how Airbnb disrupted the hospitality industry',
        audioUrl: 'https://example.com/startup-stories/airbnb-journey.mp3',
        duration: '49:30',
        publishDate: 'May 21, 2024',
        host: 'Emma Thompson',
        guests: ['Brian Chesky', 'Venture Capitalist Tim Draper'],
        topics: [
          'The founding story of Airbnb',
          'Overcoming early challenges and pivots',
          'Scaling a marketplace business',
          'Impact on the travel and hospitality industry'
        ],
        resources: [
          { title: "Airbnb's Growth Strategy", url: 'https://example.com/airbnb-growth' },
          { title: 'Disruption in Hospitality', url: 'https://example.com/hospitality-disruption' }
        ],
        comments: [],
      },
      {
        id: 'spacex-revolution',
        title: 'SpaceX: Revolutionizing Space Travel',
        description: "How Elon Musk's SpaceX is making space exploration accessible",
        audioUrl: 'https://example.com/startup-stories/spacex-revolution.mp3',
        duration: '55:15',
        publishDate: 'May 28, 2024',
        host: 'Emma Thompson',
        guests: ['Former NASA Administrator Jim Bridenstine', 'Space Industry Analyst Dr. Joan Martinez'],
        topics: [
          'The founding vision of SpaceX',
          'Technological innovations in rocket design',
          'Challenges and milestones in private space exploration',
          'Future plans for Mars colonization'
        ],
        resources: [
          { title: 'SpaceX Launch Archive', url: 'https://example.com/spacex-launches' },
          { title: 'The Economics of Space Travel', url: 'https://example.com/space-economics' }
        ],
        comments: [],
      },
    ],
  },
]