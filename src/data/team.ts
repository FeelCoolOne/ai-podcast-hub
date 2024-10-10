export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    description: "Podcast enthusiast with a background in tech and media.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "John Smith",
    role: "Head of Content",
    description: "Former radio producer with a passion for storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Chen",
    role: "Lead Developer",
    description: "Full-stack developer with a love for creating intuitive user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Johnson",
    role: "Marketing Director",
    description: "Digital marketing expert with a focus on community building.",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Andrew Huang",
    role: "Product Manager",
    description: "Digital marketing expert with a focus on community building.",
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];