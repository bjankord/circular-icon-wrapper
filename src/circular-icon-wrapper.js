import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Sets children to render within circular icon wrapper
   */
  children: PropTypes.node,
  /**
   * Sets circular icon wrapper fill color
   */
  fill: PropTypes.string,
  /**
   * Sets circular icon wrapper stroke color
   */
  stroke: PropTypes.string,
  /**
   * Sets circular icon wrapper stroke width. Note that this sets width in SVG that is being scaled. Value set for this will not be rendered at 1:1 ratio.
   */
  strokeWidth: PropTypes.number,
  /**
   * Sets height and width of circular icon wrapper SVG to same value. (px, em, percentage).
   */
  size: PropTypes.string,
};

const defaultProps = {
  fill: 'transparent',
  stroke: 'transparent',
  strokeWidth: 0,
  size: '1em'
}

const CircularIconWrapper = ({ strokeWidth, fill, stroke, children, size, ...customProps}) => {
  const height = customProps.height ? customProps.height : size;
  const width = customProps.width ? customProps.width : size;

  return (
    <svg {...customProps} height={height} width={width} viewBox="0 0 1000 1000">
      <circle cx="500" cy="500" r={(500 - (strokeWidth / 2))} strokeWidth={strokeWidth} fill={fill} stroke={stroke}></circle>
      <g transform="translate(500 500) scale(0.5) translate(-500 -500)">
       {children}
      </g>
    </svg>
  );
};

CircularIconWrapper.propTypes = propTypes;
CircularIconWrapper.defaultProps = defaultProps;
export default CircularIconWrapper;
