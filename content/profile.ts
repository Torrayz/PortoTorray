/** The owner supplied these details. Do not invent tenure, grades, awards or document proofs. */
export const profile = {
  name: 'Tri Puji Antoro',
  nickname: 'Torrayz',
  location: 'Tangerang, Banten, Indonesia',
  github: 'https://github.com/Torrayz',
  avatar: 'https://avatars.githubusercontent.com/u/152534285?v=4',
  headline: 'Building digital systems, end-to-end.',
  role: 'Full-Stack Developer & Tech Lead',
  companyRole: 'Co-Founder & Tech Lead',
  company: 'CV. Prabaswara Gandar Prima',
  education: 'S1 Teknik Informatika, Universitas Pamulang (UNPAM)',
  expertise: [
    {title:'Full-Stack & Mobile',description:'Next.js, React, TypeScript, React Native (Expo), PHP',icon:'code'},
    {title:'Backend & Data',description:'Node.js, Express, Go, PostgreSQL, SQL Server, MySQL, SQLite',icon:'database'},
    {title:'DevOps & Linux',description:'Arch Linux, Hyprland, Docker, Nginx, server operations',icon:'terminal'},
    {title:'Applied AI / ML',description:'Python, Random Forest, LLM integration, agent workflows',icon:'cpu'}
  ],
  certificates:[
    {name:'TOEFL',status:'Evidence pending'},
    {name:'BNSP',status:'Evidence pending'},
    {name:'Programming',status:'Evidence pending'}
  ]
} as const;