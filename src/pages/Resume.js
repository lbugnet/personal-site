import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Prizes from '../components/Resume/Prizes';
import Grants from '../components/Resume/Grants';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import prizes from '../data/resume/prizes';
import grants from '../data/resume/grants';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Research -',
  'Education -',
  'Research Grants -',
  'Prizes & Awards -',
  // 'Skills',
  // 'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="CV"
    description="Lisa Bugnet's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">CV</Link></h2>
          <a href="https://github.com/lbugnet/personal-site/public/CV_Lisa_Bugnet.pdf" className="download" download="download">Download CV</a>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Grants data={grants} />
      <Prizes data={prizes} />
      {/* <Courses data={courses} />  */}
      <References />

      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} /> */}

    </article>
  </Main>
);

export default Resume;
