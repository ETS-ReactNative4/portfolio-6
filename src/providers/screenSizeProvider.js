import React, { Component } from 'react';

const ScreenSizeContext = React.createContext();

export class ScreenSizeProvider extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      screenWidth: window.innerWidth,
      breakpoints: {
        phone: 376,
        tablet: 615,
        laptop: 825,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  render() {
    return (
      <ScreenSizeContext.Provider value={this.state}>
        { this.props.children }
      </ScreenSizeContext.Provider>
    );
  }
}

export const ScreenSizeConsumer = ScreenSizeContext.Consumer;
