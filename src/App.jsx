import React from 'react';

const experiences = [
  {
    role: 'Site Engineer',
    company: 'AVIC KDN Airport Engineering Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Oct 2024 — Aug 2025',
    highlights: [
      'Supervised site workflows against live conditions, project drawings, specifications and contractual requirements.',
      'Coordinated survey engineers, site supervisors, technical teams and Chinese site leadership to keep delivery aligned.',
      'Improved daily work progress by 10% through better task allocation and practical site methods.',
      'Supported HSE experts in applying safe working practices, including during night-time NOTAM periods.',
    ],
  },
  {
    role: 'Team Leader',
    company: 'Entegra Sources Engineering Service',
    location: 'Kathmandu, Nepal',
    period: 'Mar 2023 — Jun 2024',
    highlights: [
      'Led a design team, allocated work and tracked daily progress against client and project requirements.',
      'Produced and modelled AutoCAD drawings and ran structural simulations using civil analysis software.',
      'Worked across managers, clients and departments to maintain smooth workflows and communicate progress.',
      'Increased team productivity by 5% and supported the Project Manager in improving team processes.',
    ],
  },
  {
    role: 'Supervisor / Assistant Leader',
    company: 'Entegra Sources Engineering Service',
    location: 'Kathmandu, Nepal',
    period: 'Nov 2021 — Oct 2022',
    highlights: [
      'Coordinated with project managers to meet client requirements and plan team workloads.',
      'Supported designers and junior colleagues with document preparation and day-to-day work.',
      'Prepared daily worksheets, recorded tasks and kept team leaders informed of progress.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Design & analysis',
    skills: ['AutoCAD', 'Civil 3D', 'SketchUp', 'ETABS', 'SAP2000', 'STAAD.Pro'],
  },
  {
    title: 'Rock engineering',
    skills: ['Rocscience', 'Phase2', 'Dips', 'Slide', 'UnWedge'],
  },
  {
    title: 'Productivity & collaboration',
    skills: ['Microsoft Office', 'Google Calendar', 'Outlook', 'Gantt charts'],
  },
];

const certifications = [
  'Certified Civil Engineer — Nepal Engineering Association',
  'AutoCAD Civil 3D — 10-day online course, Nepal Engineering Academy',
  'GIS modelling & remote sensing with Google Earth Engine — Khwopa Engineering College',
  'AutoCAD training — Khwopa Engineering College',
  'SAP2000 training — Khwopa Engineering College',
  'Geographic Information System — S4W-Nepal',
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
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
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO PLACEMENT &amp; PART-TIME OPPORTUNITIES
            </div>
            <p className="hero-kicker">Civil Engineer · Sustainability · Site Delivery</p>
            <h1>
              Building better
              <br />
              <span>for what comes next.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Dipan, a civil engineer with 3+ years of experience turning
              technical designs into real-world projects. Now advancing my
              expertise in sustainable engineering at the University of East
              London.
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
              <span>MSc candidate · University of East London</span>
              <span className="meta-divider" />
              <a href="mailto:dipanadhikari30@gmail.com">dipanadhikari30@gmail.com</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Civil engineering design illustration">
            <div className="visual-topline">
              <span>STRUCTURE / 001</span>
              <span>27° 41&apos; N — 85° 19&apos; E</span>
            </div>
            <div className="blueprint">
              <div className="blueprint-grid" />
              <svg className="bridge-art" viewBox="0 0 620 420" fill="none" role="img" aria-labelledby="bridge-title">
                <title id="bridge-title">Abstract bridge structure engineering drawing</title>
                <path className="art-faint" d="M48 330h520M76 330l50-172h62l51 172m57 0 51-172h62l51 172" />
                <path className="art-main" d="M54 242h512M100 242l26-84m62 84-26-84m83 84 26 88m57-88 26-88m62 88-26-88m62 88 26 88" />
                <path className="art-deck" d="M56 226h510M70 238h482M127 158h60m101 172h56m102-172h62" />
                <path className="art-support" d="M126 158v-43m61 43v-43m101 215v-43m56 43v-43m102-129v-43m62 43v-43" />
                <path className="art-dash" d="M126 115h61m101 215h56m102-215h62M86 260h74m91 0h63m91 0h77" />
                <circle cx="126" cy="158" r="5" className="art-node" />
                <circle cx="187" cy="158" r="5" className="art-node" />
                <circle cx="288" cy="330" r="5" className="art-node" />
                <circle cx="344" cy="330" r="5" className="art-node" />
                <circle cx="446" cy="158" r="5" className="art-node" />
                <circle cx="508" cy="158" r="5" className="art-node" />
                <path className="art-measure" d="M126 92h61m-61-5v10m61-10v10M288 354h56m-56-5v10m56-10v10" />
              </svg>
              <div className="drawing-label label-one"><span>01</span> LOAD PATH</div>
              <div className="drawing-label label-two"><span>02</span> STRUCTURAL FRAME</div>
              <div className="drawing-note">DESIGN WITH PURPOSE<br />DELIVER WITH PRECISION</div>
            </div>
            <div className="visual-footer">
              <span>ENGINEERING A MORE RESILIENT FUTURE</span>
              <span className="visual-index">01 — 04</span>
            </div>
          </div>
          <div className="hero-stats" aria-label="Career highlights">
            <div><strong>3+</strong><span>Years in civil engineering</span></div>
            <div><strong>10<span className="stat-unit">%</span></strong><span>Improvement in daily site progress</span></div>
            <div><strong>UK<span className="stat-plus">↗</span></strong><span>Studying at University of East London</span></div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Engineering with a wider perspective.">
            My experience spans hands-on site supervision, technical design, team
            leadership and international collaboration.
          </SectionHeading>
          <div className="about-content">
            <p>
              I enjoy connecting the detail on a drawing with the realities of
              building on site. Across airport engineering and design services,
              I&apos;ve coordinated multidisciplinary teams, helped projects stay
              on schedule and found practical ways to improve how work gets done.
            </p>
            <p>
              I&apos;m currently completing an MSc in Civil Engineering with
              Sustainability and Industrial Placement. I&apos;m keen to bring my
              practical project experience together with sustainable design
              thinking to contribute to meaningful engineering work.
            </p>
            <a className="text-link" href="#contact">More about working together <ArrowIcon /></a>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / CAREER JOURNEY" title="Experience that moves projects forward.">
              From site delivery to leading design teams, each role has strengthened
              my focus on clear coordination and dependable results.
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
                    <p className="experience-location">{job.location}</p>
                    <ul>
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="trial-note">
              <span className="trial-marker">EARLY EXPERIENCE</span>
              <p><strong>Engineering trial · AVIC KDN Airport Engineering</strong> — Completed a 20-day trial in 2023, independently learning Civil 3D and exceeding the assigned work on a hangar sectional drawing for Tribhuvan International Airport.</p>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="education">
          <SectionHeading eyebrow="03 / EDUCATION" title="Learning for a more sustainable built environment." />
          <div className="education-grid">
            <article className="education-card current-education">
              <div className="education-topline"><span>IN PROGRESS</span><span>2025 — PRESENT</span></div>
              <h3>MSc Civil Engineering with Sustainability</h3>
              <p className="education-school">University of East London</p>
              <p className="education-description">With Industrial Placement</p>
              <div className="module-block">
                <span className="module-label">SELECTED MODULES</span>
                <p>Advanced Structural Analysis · Circular Economy &amp; Sustainability · Environmental Impact Assessment · Mental Wealth: Professional Life</p>
              </div>
              <div className="dissertation"><span>Dissertation</span><strong>Effect of Corrosion in RC Column</strong></div>
            </article>
            <article className="education-card">
              <div className="education-topline"><span>BACHELOR&apos;S DEGREE</span><span>2016 — 2022</span></div>
              <h3>Bachelor in Civil Engineering</h3>
              <p className="education-school">Khwopa Engineering College</p>
              <p className="education-description">Bhaktapur, Nepal</p>
              <div className="module-block">
                <span className="module-label">SELECTED MODULES</span>
                <p>Rock Engineering · Transportation Engineering · Steel &amp; Concrete Design · GIS · Hydropower Engineering · Sanitary Engineering</p>
              </div>
              <div className="dissertation"><span>Dissertation</span><strong>Design of Hydro Tunnel and Support System</strong></div>
            </article>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / TOOLKIT" title="The tools behind the work." />
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
            <div className="strengths">
              <div className="strength-intro">
                <span className="eyebrow">HOW I WORK</span>
                <h3>Good engineering<br />is a team effort.</h3>
              </div>
              <div className="strength-item"><span>01</span><p>Clear communication across international and multidisciplinary teams</p></div>
              <div className="strength-item"><span>02</span><p>Adaptable, self-directed learner who gets to grips with new tools quickly</p></div>
              <div className="strength-item"><span>03</span><p>Reliable coordination, time management and a strong safety mindset</p></div>
            </div>
          </div>
        </section>

        <section className="credentials-section section-wrap">
          <div className="credentials-intro">
            <SectionHeading eyebrow="05 / CREDENTIALS" title="Always building on the basics." />
            <p>Professional certification and focused training across design, analysis and geospatial tools.</p>
          </div>
          <ul className="credential-list">
            {certifications.map((certification) => (
              <li key={certification}><span className="credential-check">↗</span>{certification}</li>
            ))}
          </ul>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <span className="eyebrow">06 / NEXT STEPS</span>
              <h2>Let&apos;s build<br />something that lasts.</h2>
              <p>I&apos;m looking for an industrial placement or part-time opportunity in civil engineering and sustainability.</p>
              <a className="button button-light" href="mailto:dipanadhikari30@gmail.com">
                Start a conversation <ArrowIcon />
              </a>
            </div>
            <div className="contact-details">
              <div><span>EMAIL</span><a href="mailto:dipanadhikari30@gmail.com">dipanadhikari30@gmail.com</a></div>
              <div><span>PHONE</span><a href="tel:+447352129589">+44 7352 129589</a></div>
              <div><span>LINKEDIN</span><a href="https://www.linkedin.com/in/dipan-adhikari-a17b29190" target="_blank" rel="noreferrer">Connect with me <ArrowIcon diagonal /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">DA</span><span>Dipan Adhikari</span></a>
          <p>Thoughtful engineering. Practical impact.</p>
          <span>© {new Date().getFullYear()} Dipan Adhikari</span>
        </div>
      </footer>
    </>
  );
}

export default App;
