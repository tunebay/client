// @flow
/* eslint key-spacing: 0 */
export default {
  // colors
  primaryRed:    '#ee5150',
  darkRed:       '#E43D3C',

  deepBlue:      '#1a1e28',

  white:         '#ffffff',
  lightestGrey:  '#f7f7f7',
  lighterGrey:   '#d9d9d9',
  lightGrey:     '#ccc',
  grey:          '#999',
  darkGrey:      '#666',
  black:         '#111111',

  deepBlueGradient: 'linear-gradient(to right bottom, rgba(44, 53, 71, 0.7), rgba(26, 30, 40, 1))',

  boxShadow: '0 4px 28px 0 rgba(0,0,0,0.08)',
  boxShadowFlat: '0 2px 16px 0 rgba(0,0,0,0.15)',

  contentWidth: '123rem',

  primaryRedOpacity: (opacity: number) => `rgba(238, 81, 80, ${opacity})`,
}
