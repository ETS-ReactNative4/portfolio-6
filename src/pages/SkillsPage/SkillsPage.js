import React from 'react';
import Skills from '@components/Skills';

import './style.scss';

const SkillsPage = () => (
  <div className="skills_page">
    <div className="skills_page__title">
      <h2>
        Technological Skills
      </h2>
    </div>

    <div className="skills_page__container">
      <Skills />
    </div>
  </div>
);

export default SkillsPage;
