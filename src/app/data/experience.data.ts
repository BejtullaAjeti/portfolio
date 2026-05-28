export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Moonlight',
    period: 'Oct 2024 – Present',
    location: 'Tetovo, NM',
    points: [
      'Platform serves 60k+ registered users; contributed end-to-end across social, content, and account systems',
      'Led Angular v12 → v20 migration and full Tailwind CSS rewrite (under 10% SCSS remaining)',
      'Designed and delivered 50+ REST endpoints — comments, replies, claps, reporting, bookmarking, notifications, and more — including database schema per domain',
      'Built complete story creation pipeline: publishing flows, reading progress tracking, chapter navigation, and content discovery',
      'Improved account system: username login, password reset, user search, follower/following views, mentions, and profile interactions',
      'Migrated components to Angular standalone architecture; resolved production issues across auth, mobile, and cross-browser compatibility',
    ],
  },
  {
    role: 'Backend Developer — Go',
    company: 'Shortcut Balkans',
    period: 'May 2024 – Oct 2024',
    location: 'Tetovo — Internship',
    points: [
      'Built RESTful microservices in idiomatic Go for Golang-Landmarks — full CRUD across countries, regions, cities, landmarks, reviews, and photos',
      'Integrated S3-compatible object storage for photo uploads and added GeoJSON export endpoints',
      'Implemented PostgreSQL data layer with modular handler/model/route separation and database schema design',
      'Contributed to API documentation and conducted code reviews ensuring idiomatic Go standards',
    ],
  },
];
