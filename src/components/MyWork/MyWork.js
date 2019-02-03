import React, { Component } from 'react';

import { ScreenSizeConsumer } from '@providers/screenSizeProvider';

import ProjectCard from '@components/ProjectCard';

import BlobGreenish from '../../assets/svg/Blob_greenish';
import BlobPinkish2 from '../../assets/svg/Blob_pinkish_2';
import BlobYellowish2 from '../../assets/svg/Blob_yellowish_2';
import BlobBlueish2 from '../../assets/svg/Blob_blueish_2';
import RectanglePurple from '../../assets/svg/Rectangle_purple';

import TransferableImg from '../../assets/png/transferable_project_screenshot.png';
import DoohniborImg from '../../assets/png/doohnibor_project_screenshot.png';

import './style.scss';

const projects = [
  {
    title: 'Transferable',
    imgUrl: TransferableImg,
    subtitle: 'Website re-design',
    description: 'An early-stage education technology startup that helps community college students find the four-year program perfect for them...',
    titleColor: '#4457AE',
    backgroundColorOnHover: '#4457AE',
    subtitleColorOnHover: '#F2994A'
  },
  {
    title: 'Doohnibor',
    imgUrl: DoohniborImg,
    subtitle: 'Robinhood-clone, just for fun.',
    description: 'Robinhood-clone app. Front End built with React/Redux Backend build with Node, Express, and MongoDB.',
    titleColor: '#3BCC9B',
    backgroundColorOnHover: '#3BCC9B',
    subtitleColorOnHover: '#000'
  },
];

for (let i = 0; i < projects.length; i++) {
  projects[i]['id'] = i;
}


export default class MyWork extends Component {
  render() {
    return (
      <ScreenSizeConsumer>
        {({ screenWidth, breakpoints }) => (
          <section className="my-work">
            <div className="blob_greenish">
              <BlobGreenish screenWidth={screenWidth} breakpoints={breakpoints} />
            </div>
            <div className="rectangle_purple">
              <RectanglePurple screenWidth={screenWidth} breakpoints={breakpoints} />
            </div>

            <div className="my-work__intro">
              <h2 className="my-work__intro-header">
                My work
              </h2>

              <p className="my-work__intro-paragraph">
                This is a small collection of projects I’ve worked on over the past few months. Some for clients, some just for my own enrichment. Where appropriate, I’ve included links to code repos for the nerds out there.
              </p>
            </div>

            <div className="blob_pinkish_2">
              <BlobPinkish2 screenWidth={screenWidth} breakpoints={breakpoints} />
            </div>

            <div className="blob_yellowish_2">
              <BlobYellowish2 screenWidth={screenWidth} breakpoints={breakpoints} />
            </div>

            <div className="my-work__projects">
              {
                projects.map(project => (
                  <ProjectCard project={project} />
                ))
              }
            </div>

            <div className="blob_blueish_2">
              <BlobBlueish2 screenWidth={screenWidth} breakpoints={breakpoints} />
            </div>

          </section>
        )}
      </ScreenSizeConsumer>
    );
  }
}
