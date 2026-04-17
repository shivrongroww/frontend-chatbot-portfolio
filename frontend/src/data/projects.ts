export interface Project {
  id: string
  title: string
  company: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  thumbnail: string
  images: string[]
  caseStudyUrl?: string
  /** 4–5 short prompts shown as chips in the chat when this project is open. */
  suggestedQuestions: string[]
}

export const projects: Project[] = [
  {
    id: 'eddy-finance',
    title: 'Prediction Markets Platform',
    company: 'Eddy Finance',
    year: '2024–2025',
    description:
      'End-to-end design as founding designer for a fintech startup in prediction markets and DeFi.',
    longDescription:
      'Joined as the founding designer at Eddy Finance, a fintech startup in the prediction markets and decentralised finance space. Owned the entire design process — from defining the product\'s visual language and design system to conducting user research and shipping core product flows. Worked in close partnership with the founders to shape product strategy.',
    tags: ['DeFi', 'Web3', 'Design Systems', 'Founding Designer'],
    thumbnail: '/projects-eddy.png',
    images: [
      '/eddy-2.png',
      '/eddy-3.png',
      '/eddy-4.png',
      '/eddy-5.png',
      '/eddy-6.png',
      '/eddy-7.png',
      '/eddy-8.png',
      '/eddy-9.png',
      '/eddy-10.png',
      '/eddy-11.png',
      '/eddy-12.png',
      '/eddy-13.png',
      '/eddy-14.png',
      '/eddy-15.png',
      '/eddy-16.png',
      '/eddy-17.png',
      '/eddy-18.png',
      '/eddy-19.png',
    ],
    suggestedQuestions: [
      'What is Eddy Finance?',
      'What does a founding designer actually do?',
      'How did you build the design system?',
      'Biggest lesson from a startup?',
    ],
  },
  {
    id: 'raize',
    title: 'Raize',
    company: 'Raize',
    year: '2025',
    description:
      'Product design work for Raize.',
    longDescription:
      'Product design work for Raize. Add the long-form description here.',
    tags: ['Product Design'],
    thumbnail: '/projects-raize.png',
    images: ['/projects-raize.png'],
    suggestedQuestions: [
      'What is Raize?',
      'What did you design for Raize?',
      'Who are the users?',
      'Favourite thing you shipped here?',
    ],
  },
  {
    id: 'uber-kids',
    title: 'Uber Kids',
    company: 'Uber',
    year: '2025',
    description:
      'Designing a kid-friendly ride experience within the Uber ecosystem.',
    longDescription:
      'Concept and product design for Uber Kids — a ride experience tailored for younger riders and their guardians. Add the long-form description here.',
    tags: ['Mobile', 'Service Design'],
    thumbnail: '/projects-uberkids.png',
    images: ['/projects-uberkids.png'],
    suggestedQuestions: [
      'What is Uber Kids?',
      'How do you design for safety?',
      'Who is the primary user?',
      'Hardest UX problem here?',
    ],
  },
]
