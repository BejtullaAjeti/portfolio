export interface SkillGroup {
  category: string;
  skills: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'Tailwind CSS', 'HTML', 'CSS', 'React'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'Dropwizard', 'Go', 'Node.js', 'Python', 'REST API Design', 'GraphQL'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Apache Solr', 'Schema Design'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana', 'Nginx', 'Git', 'Bash'],
  },
  {
    category: 'Game Dev',
    skills: ['Unity', 'C#', 'WheelCollider', 'Three.js', 'Blender'],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'Distributed Systems', 'Full-Stack', 'System Design', 'Unit Testing', 'Integration Testing'],
  },
];
