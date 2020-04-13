import React from "react";
import PropTypes from "prop-types";
import {
  Popover as BPPopover,
  PopoverInteractionKind
} from "@blueprintjs/core";

export const Popover = ({ children, content }) => {
  return (
    <BPPopover
      interactionKind={PopoverInteractionKind.HOVER}
      content={content}
      transitionDuration={100}
      lazy={true}
    >
      {children}
    </BPPopover>
  );
};

Popover.propTypes = {
  content: PropTypes.node
};
