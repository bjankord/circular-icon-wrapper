<h1 align="center">
  ⭕️ circular-icon-wrapper
</h1>
<p align="center" style="font-size: 1.2rem;">A react SVG component for rendering SVG icons in a circle</p>

<hr />

## The problem

You have an SVG icon that you want to put centered within a circle. Maybe you want the circle to have an outline or be completely filled in, or both.

## This solution

This is a component that renders SVG icons centered within a larger circular SVG with ability to set an outline and/or fill on the circular SVG.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
    - [children](#children)
    - [fill](#fill)
    - [stroke](#stroke)
    - [strokeWidth](#strokewidth)
    - [size](#size)
- [Examples](#examples)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install circular-icon-wrapper --save
```

> This package also depends on `react` and `prop-types`. Please make sure you have those installed as well.

## Usage

```jsx
import CircularIconWrapper from 'circular-icon-wrapper';

<CircularIconWrapper stroke="#27ae60" strokeWidth={50} size="10em">
  <svg viewBox="0 0 1000 1000" fill="#27ae60">
    <path d="M68 500.5c0-14.7 5-27.3 15-38l76-76c10.7-10.7 23.3…" />
  </svg>
</CircularIconWrapper>
```

## Props

### children
> `node`		

Sets children to render within circular icon wrapper

### fill
> `string` | defaults to `transparent`

Sets circular icon wrapper fill color

### stroke
> `string` | defaults to `transparent`

Sets circular icon wrapper stroke color

### strokeWidth
> `number` | defaults to 0

Sets circular icon wrapper stroke width. Note that this sets width in SVG that is being scaled. Value set for this will not be rendered at 1:1 ratio.

### size
> `string` | defaults to	`1em`

Sets height and width of circular icon wrapper SVG to same value. (px, em, percentage).

# Examples

https://bjankord.github.io/circular-icon-wrapper/

# License
MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
