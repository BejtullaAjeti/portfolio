export interface Certification {
  issuer: string;
  name: string;
  date: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    issuer: 'Unity Technologies',
    name: 'Unity Certified User: Programmer',
    date: 'April 2024',
  },
  {
    issuer: 'Education',
    name: 'MSc Software Engineering — SEEU, Tetovo',
    date: 'Oct 2025 – Present',
  },
  {
    issuer: 'Education',
    name: 'BSc Computer Science — SEEU, Tetovo',
    date: 'Sep 2020 – Jun 2024',
  },
];
