import { useEffect, useState } from 'react'
import './App.css'

type Skill = {
  name: string;
  category: string;
  level: string;
  years: number | null;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
};

type Experience = {
  company: string;
  role: string;
  startedAt: string;
  finishedAt: string | null;
  description: string;
  stack: string[];
};

type Profile = {
  fullName: string;
  headline: string;
  location: string;
  summary: string;
  email: string;
  githubUrl: string | null;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Profile {
                profile {
                  fullName
                  headline
                  location
                  summary
                  githubUrl
                  email
                  skills {
                    name
                    category
                    level
                    years
                  }
                  projects {
                    title
                    description
                    stack
                    highlights
                  }
                  experiences {
                    company
                    role
                    startedAt
                    finishedAt
                    description
                    stack
                  }
                }
              }
            `,
          }),
        });
        
        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        setProfile(result.data.profile);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);



 if (isLoading) {
    return <main className="page state">Loading...</main>;
  }

  if (error) {
    return <main className="page state">Error: {error}</main>;
  }

  if (!profile) {
    return <main className="page state">Profile not found</main>;
  }

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Digital Business Card</p>
          <h1>{profile.fullName}</h1>
          <h2>{profile.headline}</h2>
          <p className="location">{profile.location}</p>
          <p className="summary">{profile.summary}</p>
        </div>

        <div className="contacts">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.githubUrl && (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skillGrid">
          {profile.skills.map((skill) => (
            <article className="card" key={skill.name}>
              <strong>{skill.name}</strong>
              <span>{skill.category}</span>
              <small>
                {skill.level}
                {skill.years ? ` / ${skill.years}y` : ''}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="list">
          {profile.projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tags">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="list">
          {profile.experiences.map((experience) => (
            <article className="card" key={`${experience.company}-${experience.role}`}>
              <h3>{experience.role}</h3>
              <p className="meta">{experience.company}</p>
              <p>{experience.description}</p>
              <div className="tags">
                {experience.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App
