import React, { Component } from 'react';

import './style.scss';

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler(e) {
    let cardToUpdate = e.currentTarget;
    this.applyHoverStyling(cardToUpdate);
  }

  onMouseOutHandler(e) {
    let cardToReset = e.currentTarget;
    this.resetCardStyling(cardToReset);
  }

  applyHoverStyling(cardToUpdate) {
    const { backgroundColorOnHover, subtitleColorOnHover } = this.props.project;

    cardToUpdate.style.backgroundColor = backgroundColorOnHover;
    cardToUpdate.children[1].style.color = '#fff';
    cardToUpdate.children[2].style.color = subtitleColorOnHover;
  }

  resetCardStyling(cardToReset) {
    const { titleColor } = this.props.project;

    cardToReset.style.backgroundColor = '';
    cardToReset.children[1].style.color = titleColor;
    cardToReset.children[2].style.color = '#C4C4C4';
  }

  render() {

    const { project } = this.props;

    return (
      <div
        className="project-card"
        key={project.id}
        onMouseOver={this.onMouseOverHandler}
        onMouseOut={this.onMouseOutHandler}
      >
        <img
          className="project-card__img"
          src={project.imgUrl}
          alt={`Screenshot of ${project.title} project`}
        />

        <h3 className="project-card__title" key={project.title} style={{ color: project.titleColor }}>
          { project.title }
        </h3>
        <h5 className="project-card__subtitle" key={project.subtitle}>
          { project.subtitle }
        </h5>

        <p className="project-card__description">
          { project.description }
        </p>
      </div>
    );
  }
}

export default ProjectCard;
