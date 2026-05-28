export interface Project {
  number: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'GameStore',
    description: 'Microservices gaming platform — 4 independent services (Auth with JWT+RBAC, Games with REST+GraphQL, Orders, Reviews) deployed across Dev/Staging/Prod Kubernetes tiers. Full observability with Prometheus, Grafana, and Nginx API gateway. Full-text search via Apache Solr, distributed caching with Redis.',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'React'],
    githubUrl: 'https://github.com/ba29267/gamestore',
    imageUrl: 'assets/images/gamestore-image.png',
  },
  {
    number: '02',
    name: 'On The Road',
    description: 'MSc capstone Unity racing game with WheelCollider physics, configurable RWD/FWD/AWD drivetrain, 7-speed automatic gearbox, RPM simulation, downforce, and anti-roll bars. Features 5 tracks including a SPA-Francorchamps-inspired circuit, checkpoint timing, and dynamic engine audio.',
    stack: ['Unity', 'C#', 'WheelCollider', 'Unity Audio Mixer', 'PlayerPrefs'],
    liveUrl: 'https://b1t0o.itch.io/on-the-road-in-unity-capstone-driving-game',
    imageUrl: 'assets/images/on-the-road-image.png',
  },
  {
    number: '03',
    name: 'Audi R8 Showcase',
    description: 'Interactive 3D car showcase built with Three.js and WebGL. Features full GLB model loading with textures, drag-to-rotate orbit controls, zoom, multiple camera presets, environment switching, wireframe mode, and mobile touch support. Built as a portfolio demo showcasing real-time 3D web capabilities.',
    stack: ['JavaScript', 'Three.js', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/BejtullaAjeti/audi-r8-showcase',
    liveUrl: 'https://bejtullaajeti.github.io/audi-r8-showcase/',
    imageUrl: 'assets/images/r8-showcase-image.png',
  },
  {
    number: '04',
    name: 'Golang-Landmarks',
    description: 'Production-style Go REST API — full CRUD for geographic entities (countries, regions, cities, landmarks), S3-compatible photo storage, GeoJSON export, and modular idiomatic Go structure with clean handler/model/route separation.',
    stack: ['Go', 'PostgreSQL', 'S3', 'GeoJSON'],
    githubUrl: 'https://github.com/BejtullaAjeti/Golang-Landmarks',
    imageUrl: 'assets/images/golang-landmarks-image.png',
  },
  {
    number: '05',
    name: 'ThreeJS Driving Simulator',
    description: 'Browser-based 3D driving simulation built from scratch in vanilla JavaScript — custom vehicle physics, controls, and dynamic camera with no game engine dependency. A pure web experiment pushing Three.js to its limits.',
    stack: ['JavaScript', 'Three.js', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/BejtullaAjeti/ThreeJSDriving',
    liveUrl: 'https://bejtullaajeti.github.io/ThreeJSDriving/',
    imageUrl: 'assets/images/threejs-image.png',
  },
];
