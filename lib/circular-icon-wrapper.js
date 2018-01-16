'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Sets children to render within circular icon wrapper
   */
  children: _propTypes2.default.node,
  /**
   * Sets circular icon wrapper fill color
   */
  fill: _propTypes2.default.string,
  /**
   * Sets circular icon wrapper stroke color
   */
  stroke: _propTypes2.default.string,
  /**
   * Sets circular icon wrapper stroke width. Note that this sets width in SVG that is being scaled. Value set for this will not be rendered at 1:1 ratio.
   */
  strokeWidth: _propTypes2.default.number,
  /**
   * Sets height and width of circular icon wrapper SVG to same value. (px, em, percentage).
   */
  size: _propTypes2.default.string
};

var defaultProps = {
  fill: 'transparent',
  stroke: 'transparent',
  strokeWidth: 0,
  size: '1em'
};

var CircularIconWrapper = function CircularIconWrapper(_ref) {
  var strokeWidth = _ref.strokeWidth,
      fill = _ref.fill,
      stroke = _ref.stroke,
      children = _ref.children,
      size = _ref.size,
      customProps = _objectWithoutProperties(_ref, ['strokeWidth', 'fill', 'stroke', 'children', 'size']);

  var height = customProps.height ? customProps.height : size;
  var width = customProps.width ? customProps.width : size;

  return _react2.default.createElement(
    'svg',
    _extends({}, customProps, { height: height, width: width, viewBox: '0 0 1000 1000' }),
    _react2.default.createElement('circle', { cx: '500', cy: '500', r: 500 - strokeWidth / 2, strokeWidth: strokeWidth, fill: fill, stroke: stroke }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(500 500) scale(0.5) translate(-500 -500)' },
      children
    )
  );
};

CircularIconWrapper.propTypes = propTypes;
CircularIconWrapper.defaultProps = defaultProps;
exports.default = CircularIconWrapper;