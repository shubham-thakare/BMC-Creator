import React from 'react';
import PropTypes from 'prop-types';
import {
  Popover as BPPopover,
  PopoverInteractionKind,
} from '@blueprintjs/core';

const Popover = ({ children, content, ...props }) => {
  return (
    <BPPopover
      interactionKind={PopoverInteractionKind.CLICK}
      content={content}
      transitionDuration={100}
      lazy={true}
      {...props}
    >
      {children}
    </BPPopover>
  );
};

Popover.propTypes = {
  content: PropTypes.node,
};

export default Popover;
