import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import CircularIconWrapper from '../src/circular-icon-wrapper';

const thStyles = {padding: '.5em', borderBottom: '1px solid #ccc'};
const tdStyles = {padding: '.5em', borderBottom: '1px solid #ccc'};

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td style={{padding: '.5em', borderBottom: '1px solid #ccc', fontWeight: 'bold'}}>
            {property}
            {required ? <span style={{ color: "red" }}>*</span> : null}
          </td>
          <td style={tdStyles}>{propType.name}</td>
          <td style={tdStyles}><span style={{fontFamily: 'monospace'}}>{defaultValue}</span></td>
          <td style={tdStyles}>{description}</td>
        </tr>
      );
    }
  );

  return (
    <table style={{'borderCollapse': 'collapse', 'borderSpacing': '0'}}>
      <thead>
        <tr>
          <th style={thStyles}>Name</th>
          <th style={thStyles}>Type</th>
          <th style={thStyles}>Default</th>
          <th style={thStyles}>Description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

storiesOf('Circular Icon Wrapper', module)
  .add('Outline',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Outline</h1>Nested icon with square viewbox (1000 x 1000)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper stroke="#27ae60" strokeWidth={50} size="10em">
         <svg viewBox="0 0 1000 1000" fill="#27ae60"><path d="M68 500.5c0-14.7 5-27.3 15-38l76-76c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l164 165 366-367c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l76 76c10 10.7 15 23.3 15 38s-5 27.3-15 38l-404 404-76 76c-10.7 10-23.3 15-38 15s-27.3-5-38-15l-76-76-202-202c-10-10.7-15-23.3-15-38z"></path></svg>
      </CircularIconWrapper>
    )
  )
  .add('Fill',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Fill</h1>Nested icon with square viewbox (1000 x 1000)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper fill="#2ecc71" size="10em">
         <svg viewBox="0 0 1000 1000" fill="#fff"><path d="M68 500.5c0-14.7 5-27.3 15-38l76-76c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l164 165 366-367c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l76 76c10 10.7 15 23.3 15 38s-5 27.3-15 38l-404 404-76 76c-10.7 10-23.3 15-38 15s-27.3-5-38-15l-76-76-202-202c-10-10.7-15-23.3-15-38z"></path></svg>
      </CircularIconWrapper>
    )
  )
  .add('Fill With Outline',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Fill With Outline</h1>Nested icon with square viewbox (1000 x 1000)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper fill="#2ecc71" stroke="#27ae60" strokeWidth={50} size="10em">
         <svg viewBox="0 0 1000 1000" fill="#fff"><path d="M68 500.5c0-14.7 5-27.3 15-38l76-76c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l164 165 366-367c10.7-10.7 23.3-16 38-16s27.3 5.3 38 16l76 76c10 10.7 15 23.3 15 38s-5 27.3-15 38l-404 404-76 76c-10.7 10-23.3 15-38 15s-27.3-5-38-15l-76-76-202-202c-10-10.7-15-23.3-15-38z"></path></svg>
      </CircularIconWrapper>
    )
  );


storiesOf('Circular Icon Wrapper - Narrow Icon', module)
  .add('Outline',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Outline</h1>Nested icon with narrow viewbox (517 x 1024)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper stroke="#27ae60" strokeWidth={50} size="10em">
         <svg viewBox="0 0 517 1024" fill="#27ae60"><path d="M508 282q-9 9-22.5 9t-22.5-9L291 110v882q0 13-9.5 22.5T259 1024t-22.5-9.5T227 992V109L55 281q-9 10-22.5 10T10 281q-10-9-10-22.5T10 236L236 9q9-9 22.5-9T281 9l227 228q9 9 9 22.5t-9 22.5z"></path></svg>
      </CircularIconWrapper>
    )
  )
  .add('Fill',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Fill</h1>Nested icon with narrow viewbox (517 x 1024)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper fill="#2ecc71" size="10em">
         <svg viewBox="0 0 517 1024" fill="#fff"><path d="M508 282q-9 9-22.5 9t-22.5-9L291 110v882q0 13-9.5 22.5T259 1024t-22.5-9.5T227 992V109L55 281q-9 10-22.5 10T10 281q-10-9-10-22.5T10 236L236 9q9-9 22.5-9T281 9l227 228q9 9 9 22.5t-9 22.5z"></path></svg>
      </CircularIconWrapper>
    )
  )
  .add('Fill With Outline',
    withInfo({
      header: false,
      inline: true,
      text: '<div><h1>Circular Icon Wrapper - Fill With Outline</h1>Nested icon with narrow viewbox (517 x 1024)</div>',
      TableComponent
    })(() =>
      <CircularIconWrapper fill="#2ecc71" stroke="#27ae60" strokeWidth={50} size="10em">
         <svg viewBox="0 0 517 1024" fill="#fff"><path d="M508 282q-9 9-22.5 9t-22.5-9L291 110v882q0 13-9.5 22.5T259 1024t-22.5-9.5T227 992V109L55 281q-9 10-22.5 10T10 281q-10-9-10-22.5T10 236L236 9q9-9 22.5-9T281 9l227 228q9 9 9 22.5t-9 22.5z"></path></svg>
      </CircularIconWrapper>
    )
  );

  storiesOf('Circular Icon Wrapper - Wide Icon', module)
    .add('Outline',
      withInfo({
        header: false,
        inline: true,
        text: '<div><h1>Circular Icon Wrapper - Outline</h1>Nested icon with wide viewbox (1024 x 517)</div>',
        TableComponent
      })(() =>
        <CircularIconWrapper stroke="#27ae60" strokeWidth={50} size="10em">
          <svg viewBox="0 0 1024 517" fill="#27ae60"><path d="M742 508q-9-9-9-22.5t9-22.5l172-172H32q-13 0-22.5-9.5T0 259t9.5-22.5T32 227h883L743 55q-10-9-10-22.5T743 10q9-10 22.5-10T788 10l227 226q9 9 9 22.5t-9 22.5L787 508q-9 9-22.5 9t-22.5-9z"></path></svg>
        </CircularIconWrapper>
      )
    )
    .add('Fill',
      withInfo({
        header: false,
        inline: true,
        text: '<div><h1>Circular Icon Wrapper - Fill</h1>Nested icon with wide viewbox (1024 x 517)</div>',
        TableComponent
      })(() =>
        <CircularIconWrapper fill="#2ecc71" size="10em">
        <svg viewBox="0 0 1024 517" fill="#fff"><path d="M742 508q-9-9-9-22.5t9-22.5l172-172H32q-13 0-22.5-9.5T0 259t9.5-22.5T32 227h883L743 55q-10-9-10-22.5T743 10q9-10 22.5-10T788 10l227 226q9 9 9 22.5t-9 22.5L787 508q-9 9-22.5 9t-22.5-9z"></path></svg>
        </CircularIconWrapper>
      )
    )
    .add('Fill With Outline',
      withInfo({
        header: false,
        inline: true,
        text: '<div><h1>Circular Icon Wrapper - Fill With Outline</h1>Nested icon with wide viewbox (1024 x 517)</div>',
        TableComponent
      })(() =>
        <CircularIconWrapper fill="#2ecc71" stroke="#27ae60" strokeWidth={50} size="10em">
          <svg viewBox="0 0 1024 517" fill="#fff"><path d="M742 508q-9-9-9-22.5t9-22.5l172-172H32q-13 0-22.5-9.5T0 259t9.5-22.5T32 227h883L743 55q-10-9-10-22.5T743 10q9-10 22.5-10T788 10l227 226q9 9 9 22.5t-9 22.5L787 508q-9 9-22.5 9t-22.5-9z"></path></svg>
        </CircularIconWrapper>
      )
    );
