import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
  primaryRed: string;
  darkRed: string;
  green: string;
  darkGreen: string;
  deepBlue: string;
  white: string;
  lightestGrey: string;
  lighterGrey: string;
  lightGrey: string;
  grey: string;
  darkGrey: string;
  darkestGrey: string;
  black: string;
  facebook: string;
  deepBlueGradient: string;
  boxShadow: string;
  boxShadowFlat: string;
  contentWidth: string;
  layoutBottomPadding: string;
  headerHeight: string;

  primaryRedOpacity(opacity: number): string;
  blackOpacity(opacity: number): string;
}

export const theme = {
  primaryRed: '#ee5150',
  darkRed: '#E43D3C',
  green: '#43AC6A',
  darkGreen: '#40A164',
  deepBlue: '#1a1e28',
  white: '#ffffff',
  lightestGrey: '#f7f7f7',
  lighterGrey: '#EEEEEE',
  lightGrey: '#d9d9d9',
  grey: '#ccc',
  darkGrey: '#999',
  darkestGrey: '#666',
  black: '#111111',
  facebook: '#3b5998',
  deepBlueGradient:
    'linear-gradient(to right bottom, rgba(44, 53, 71, 0.7), rgba(26, 30, 40, 1))',
  boxShadow: '0 8px 28px 0 rgba(0,0,0,0.1)',
  boxShadowFlat: '0 0.5px 4px 0 rgba(0,0,0,0.1)',
  contentWidth: '123rem',
  layoutBottomPadding: '10rem',
  headerHeight: '6rem',

  primaryRedOpacity: (opacity: number) => `rgba(238, 81, 80, ${opacity})`,
  blackOpacity: (opacity: number) => `rgba(17, 17, 17, ${opacity})`,
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
