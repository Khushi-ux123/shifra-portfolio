import { SkillCategory, Experience, Project, Education, Certification, Achievement, ContactInfo } from './types';

export const personalInfo: ContactInfo = {
  name: "Shifra Panwar",
  role: "Software Developer | Java Developer | Full Stack Developer",
  email: "shifrapanwar23@gmail.com",
  phone: "+91 7895395899",
  linkedInUrl: "https://linkedin.com/in/shifra-panwar-3499a730a",
  githubUrl: "https://github.com/shifrapanwar",
  location: "Baghpat, Uttar Pradesh, India"
};

export const aboutMe = {
  intro: "I am a B.Tech Information Technology graduate with strong knowledge of Java, SQL, JavaScript, React, HTML, CSS, and full-stack development.",
  details: "I enjoy developing practical software solutions, learning new technologies, and building applications that improve user experience. My interests include software engineering, web development, database management, and AI-powered applications."
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Frontend Dev",
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Advanced Java", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "JDBC", level: 85 },
      { name: "Servlets & JSP", level: 80 },
      { name: "Spring Boot", level: 82 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "NetBeans", level: 75 },
      { name: "VS Code", level: 90 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 88 },
      { name: "Teamwork", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Time Management", level: 85 }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Solitaire Infosys Pvt. Ltd.",
    location: "Mohali, India",
    period: "June 2024 – July 2024",
    bullets: [
      "Worked on Java-based projects, applying clean coding and architecture guidelines.",
      "Applied Core Object-Oriented Programming (OOP) concepts to build robust software segments.",
      "Implemented advanced file handling mechanisms and integrated SQL relational database operations.",
      "Developed modular, clean, and highly maintainable code aligning with team standards.",
      "Collaborated constructively with team developers and mentors to troubleshoot and resolve technical challenges."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "MindWell AI",
    subtitle: "AI-Powered Mental Wellness Platform",
    techStack: ["React.js", "JavaScript", "AI APIs", "CSS"],
    description: [
      "Developed an AI-powered mental wellness platform supporting personalized mood tracking and emotional pattern analysis.",
      "Designed and implemented an interactive analytics dashboard for monitoring mental health insights over time.",
      "Created a responsive, modern glassmorphic theme and interface in React for optimal user engagement.",
      "Integrated secure API interactions to deliver custom, context-aware wellness recommendations based on tracked states."
    ],
    githubUrl: "https://github.com/shifrapanwar",
    category: "web"
  },
  {
    title: "SmartLib",
    subtitle: "Library Management System",
    techStack: ["Java", "MySQL", "JDBC"],
    description: [
      "Developed a robust library database and inventory solution for automated book tracker and student account management.",
      "Streamlined automated issue and return logs, securing immediate book record tracking.",
      "Designed and executed structured SQL database schemas, handling secure CRUD processes via JDBC drivers.",
      "Significantly reduced manual paperwork protocols and elevated administrative database updates."
    ],
    githubUrl: "https://github.com/shifrapanwar",
    category: "java"
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat",
    grade: "CGPA: 8.31 / 10",
    details: "Focused on core modules: Data Structures & Algorithms, Database Management Systems, Software Engineering, and Web Development. Active participant in technical collectives."
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "CBSE Board",
    grade: "Aggregate: 90%",
    details: "Concentrated on Science (Physics, Chemistry, Mathematics) and Computer Science."
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "CBSE Board",
    grade: "Aggregate: 87%",
    details: "Acquired fundamental training in Math, Science, and IT."
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Java Programming Training Certification",
    issuer: "Solitaire Infosys Pvt. Ltd.",
    year: "2024"
  },
  {
    title: "Data Analytics Workshop & Hackathon",
    issuer: "Indian Institute of Technology (IIT), Delhi",
    year: "2023"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Class Representative",
    description: "Appointed Class Representative for 3.5 consecutive years, successfully organizing academic schedules, driving communication between students & administration, and leading community projects."
  },
  {
    title: "Placement Coordinator",
    description: "Served as central point of contact for company HR teams, scheduling placement drives, preparing candidates with mock exams, and facilitating recruitment drives."
  },
  {
    title: "Technical Hackathons & Workshops",
    description: "Active participant in regional engineering events, collaborative workshops, and brainstorming hackathons centered around full-stack development and Web engineering."
  }
];
