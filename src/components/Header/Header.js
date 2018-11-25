import React from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/';

import './style.scss';

export default (ChildComponent) => {
  function Header() {
    return (
      <div className="composed_component">
        <div className="header">
          <Icon icon={menu} size={28} />
        </div>
        <div className="child_component">
          <ChildComponent />
        </div>
      </div>
    );
  }
  return Header;
}
