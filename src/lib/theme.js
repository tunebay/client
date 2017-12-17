// @flow
/* eslint key-spacing: 0 */
export default {
  // colors
  primaryRed:    '#ee5150',
  darkRed:       '#E43D3C',

  green:         '#43AC6A',
  darkGreen:     '#40A164',
  // maybe new green 389E5E
  // flux made current green look awesome

  deepBlue:      '#1a1e28',

  white:         '#ffffff',
  lightestGrey:  '#f7f7f7',
  lighterGrey:   '#EEEEEE',
  lightGrey:     '#d9d9d9',
  grey:          '#ccc',
  darkGrey:      '#999',
  darkestGrey:   '#666',
  black:         '#111111',

  deepBlueGradient: 'linear-gradient(to right bottom, rgba(44, 53, 71, 0.7), rgba(26, 30, 40, 1))',

  boxShadow: '0 8px 28px 0 rgba(0,0,0,0.1)',
  boxShadowFlat: '0 0.5px 4px 0 rgba(0,0,0,0.1)',

  contentWidth: '123rem',

  layoutBottomPadding: '10rem',
  headerHeight: '6rem',

  primaryRedOpacity: (opacity: number) => `rgba(238, 81, 80, ${opacity})`,
};
