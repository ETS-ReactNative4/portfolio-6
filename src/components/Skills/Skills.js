import React from 'react';
import Icon from 'react-icons-kit';
import { html5, css3 } from 'react-icons-kit/fa/';
import { git, github, wordpress } from 'react-icons-kit/icomoon/'
import {
  socialJavascript,
  socialSass,
  socialNodejs,
  socialPython,
} from 'react-icons-kit/ionicons/'

import './style.scss';

//@TODO: Find icons for all of my skills; Edit skills list as needed

const Skills = () => (
  <div className="skills">
    <div className="row">
      <p className="row__elem">
        HTML5
        <Icon icon={html5} />
      </p>
      <p className="row__elem">
        CSS3
        <Icon icon={css3} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        JavaScript
        <Icon icon={socialJavascript} />
      </p>
      <p className="row__elem">
        Sass
        <Icon icon={socialSass} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        jQuery
        <Icon icon={css3} />
      </p>
      <p className="row__elem">
        git
        <Icon icon={git} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        Bootstrap
        <Icon icon={css3} />
      </p>
      <p className="row__elem">
        GitHub
        <Icon icon={github} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        React
        <Icon icon={css3} />
      </p>
      <p className="row__elem">
        Redux
        <Icon icon={css3} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        Node.js
        <Icon icon={socialNodejs} />
      </p>
      <p className="row__elem">
        MongoDB
        <Icon icon={css3} />
      </p>
    </div>
    <div className="row">
      <p className="row__elem">
        Python
        <Icon icon={socialPython} />
      </p>
      <p className="row__elem">
        WordPress
        <Icon icon={wordpress} />
      </p>
    </div>
  </div>
);

export default Skills;
