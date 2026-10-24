import React from 'react';

const experiences = [
  {
    role: 'Site Engineer',
    company: 'AVIC KDN Airport Engineering Pvt. Ltd., Kathmandu',
    period: 'October 2024 – August 2025',
    highlights: [
      'Supervised the workflow on the site as per the site conditions.',
      'Coordinate with supervising engineers and team leaders regarding the workflow of the work.',
      'Coordinate with survey engineers and site supervisors and manage the working environment.',
      'Collaborated with the technical department engineering regarding the work progress and executed the work as per the drawings, specifications and terms and conditions.',
      'Cooperated with the Chinese site supervisor during the NOTAM duration at nighttime.',
      'Boosted the daily work progress by 10% by implementing different techniques and assigning the work to the team members.',
      'Evaluated and assisted the HSE experts during work by following safety precautions.',
    ],
  },
  {
    role: 'Team Leader',
    company: 'Entegra Sources Engineering Service, Kathmandu',
    period: 'March 2023 – June 2024',
    highlights: [
      'Managed the work and allocated the task to the team.',
      'Modelled the AutoCAD drawing and conducted the simulation of the structural drawings in civil analysis software.',
      'Attended different meetings with managers to provide the work progress of the team.',
      'Arranged meetings with team members to collect the daily work progress.',
      'Deal with clients and different departments for smooth workflows.',
      'Improved team productivity by 5% after handling the position.',
      'Assisted the Project Manager during several meetings and changed the system with the team to increase productivity.',
    ],
  },
  {
    role: 'Supervisor/Assistant Leader',
    company: 'Entegra Sources Engineering Service, Kathmandu',
    period: 'November 2021-October 2022',
    highlights: [
      'Coordinated with the project manager to fulfil client requirements.',
      'Facilitated juniors to prepare different types of documents.',
      'Documented the daily task and updated the team leader.',
      'Supported all the members and supervised the work of the designer.',
      'Collaborated with the team leader and planned the work.',
      'Prepared the daily worksheet of the team and updated the leaders.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Designing Software',
    skills: ['AutoCAD', 'SKETCHUP', 'Civil 3D', 'ETABS', 'SAP2000', 'STAAD Pro'],
  },
  {
    title: 'Rock Engineering Software',
    skills: ['Phase2', 'Dips', 'Slide', 'UnWedge', 'Rocscience software'],
  },
  {
    title: 'Other Skills',
    skills: ['Microsoft Office Package', 'Google Calendar', 'Outlook', 'GIS', 'Communication', 'Team Leadership'],
  },
];

const certifications = [
  'Certified Civil Engineer from Nepal Engineering Association.',
  'AutoCAD Civil 3D 10-day online course: Nepal Engineering Academy',
  'Online GIS modelling and remote sensing using Google Earth Engine: Khwopa Engineering College',
  'AutoCAD training: Khwopa Engineering College',
  'SAP2000 training: Khwopa Engineering College',
  'Geographic Information System: S4W-Nepal',
];

const otherSkills = [
  'Good communication skills while working in an international company and with people while working in AVIC KDN Airport Engineering Pvt. Ltd.',
  'Used Google Calendar and Outlook to complete the project work on time.',
  'Flexible working during nighttime, which helped the company to make progress during the NOTAM period.',
  'Learned and used new software (Phase2, Gantt Chart) during dissertation work and led the project group to complete it on time.',
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="none">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Dipan Adhikari, home">
            <span className="brand-mark">DA</span>
            <span>Dipan Adhikari</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
          </div>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="hero-profile">
              <img
                className="profile-photo"
                src="/images/dipan-adhikari-profile.jpg"
                alt="Dipan Adhikari wearing safety equipment at a construction site"
              />
              <p className="hero-kicker">Civil Engineer</p>
            </div>
            <h1>Dipan Adhikari</h1>
            <p className="hero-intro">
              A highly skilled Civil Engineer with over three years of diverse experience in site supervision, technical design, and team leadership. My proven track record includes successfully coordinating international teams and translating complex drawings into real-world projects using various engineering software. I am currently advancing my expertise through a postgraduate degree in Civil Engineering with Sustainability with Industrial Placement.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get in touch <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/cv.html">
                View printable CV <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-meta">
              <span>dipanadhikari30@gmail.com</span>
              <span className="meta-divider" />
              <a href="https://www.linkedin.com/in/dipan-adhikari-a17b29190" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="meta-divider" />
              <a href="tel:+447352129589">07352129589</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-topline">
              <span>TUNNEL WORKS / 001</span>
              <span>27° 41&apos; N — 85° 19&apos; E</span>
            </div>
            <div className="blueprint">
              <img
                className="structure-photo"
                src="/images/tunnel-site.jpg"
                alt="Tunnel excavation site with an excavator and surveying equipment"
              />
            </div>
            <div className="visual-footer">
              <span>TUNNEL EXCAVATION — SITE OPERATIONS</span>
              <span className="visual-index">01 — 04</span>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading eyebrow="01 / PERSONAL STATEMENT" title="Profile.">
            Civil Engineer with practical site experience and sustainable design focus.
          </SectionHeading>
          <div className="about-content">
            <p>
              A highly skilled Civil Engineer with over three years of diverse experience in site supervision, technical design, and team leadership. My proven track record includes successfully coordinating international teams and translating complex drawings into real-world projects using various engineering software.
            </p>
            <p>
              I am currently advancing my expertise through a postgraduate degree in Civil Engineering with Sustainability with Industrial Placement. I am now seeking an industrial placement or part-time role where I can apply my integrated knowledge of sustainable practices and practical project execution to make meaningful contributions to your organisation’s objectives.
            </p>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / WORK EXPERIENCE" title="Career experience.">
              Developed through site supervision, project coordination, and team leadership.
            </SectionHeading>
            <div className="experience-list">
              {experiences.map((job, index) => (
                <article className="experience-card" key={job.role}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-main">
                    <div className="experience-title-row">
                      <div>
                        <h3>{job.role}</h3>
                        <p className="company">{job.company}</p>
                      </div>
                      <span className="experience-period">{job.period}</span>
                    </div>
                    <ul>
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="trial-note">
              <span className="trial-marker">OTHER EXPERIENCE</span>
              <p><strong>Trial: AVIC KDN Airport Engineering Pvt. Ltd., Kathmandu</strong> February 2023—February 2023 (20 Days)</p>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="education">
          <SectionHeading eyebrow="03 / EDUCATION" title="Academic background." />
          <div className="education-grid">
            <article className="education-card current-education">
              <div className="education-topline"><span>2025-PRESENT</span><span>POSTGRADUATE</span></div>
              <h3>MSc in Civil Engineering with Sustainability with Industrial Placement</h3>
              <p className="education-school">University of East London</p>
              <div className="module-block">
                <span className="module-label">MODULES</span>
                <p>Advanced Structural Analysis, Circular Economy and Sustainability, Environmental Impact Assessment, Mental Wealth Professional Life</p>
              </div>
              <div className="dissertation"><span>Dissertation</span><strong>Effect of Corrosion in RC Column</strong></div>
            </article>
            <article className="education-card">
              <div className="education-topline"><span>2016-2022</span><span>BACHELOR</span></div>
              <h3>Bachelor in Civil Engineering</h3>
              <p className="education-school">Khwopa Engineering College</p>
              <div className="module-block">
                <span className="module-label">MODULES</span>
                <p>Rock Engineering, Transportation Engineering, Estimation and Valuation, Design of Steel and Concrete Structure, Sanitary Engineering, Hydropower Engineering, Geographic Information Systems (GIS)</p>
              </div>
              <div className="dissertation"><span>Dissertation</span><strong>Design of Hydro Tunnel and Support System</strong></div>
            </article>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / TECHNICAL SKILLS" title="Core technical strengths." />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-card-number">/ {String(skillGroups.indexOf(group) + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials-section section-wrap">
          <div className="credentials-intro">
            <SectionHeading eyebrow="05 / CERTIFICATIONS" title="Key skills, certifications and achievements." />
          </div>
          <ul className="credential-list">
            {certifications.map((item) => (
              <li key={item}><span className="credential-check">↗</span>{item}</li>
            ))}
          </ul>
        </section>

        <section className="credentials-section section-wrap">
          <div className="credentials-intro">
            <SectionHeading eyebrow="06 / OTHER SKILLS" title="Professional strengths." />
          </div>
          <ul className="credential-list">
            {otherSkills.map((item) => (
              <li key={item}><span className="credential-check">↗</span>{item}</li>
            ))}
          </ul>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <span className="eyebrow">07 / CONTACT</span>
              <h2>Let&apos;s build something that lasts.</h2>
              <p>I am now seeking an industrial placement or part-time role where I can apply my integrated knowledge of sustainable practices and practical project execution.</p>
              <a className="button button-light" href="mailto:dipanadhikari30@gmail.com">
                Email me <ArrowIcon />
              </a>
            </div>
            <div className="contact-details">
              <div><span>EMAIL</span><a href="mailto:dipanadhikari30@gmail.com">dipanadhikari30@gmail.com</a></div>
              <div><span>PHONE</span><a href="tel:+447352129589">07352129589</a></div>
              <div><span>LINKEDIN</span><a href="https://www.linkedin.com/in/dipan-adhikari-a17b29190" target="_blank" rel="noreferrer">linkedin.com/in/dipan-adhikari-a17b29190 <ArrowIcon diagonal /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">DA</span><span>Dipan Adhikari</span></a>
          <p>References Available upon request</p>
          <span>© {new Date().getFullYear()} Dipan Adhikari</span>
        </div>
      </footer>
    </>
  );
}

export default App;
