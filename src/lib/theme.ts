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

  /**
   * Primary red color with given opacity
   * @param opacity `number` 0 to 1
   */
  primaryRedOpacity(opacity: number): string;

  /**
   * Black color with given opacity
   * @param opacity `number` 0 to 1
   */
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

/* 
  There's currently no way in TypeScript to pass a generic type to a tagged template literal
  https://github.com/Microsoft/TypeScript/issues/11947

  workaround: Create a withProps helper that wraps the component with defined props 
  however this means we lose css syntax highlighting and autocomplete for these components 😢
  https://github.com/styled-components/styled-components/issues/630#issuecomment-317277803
*/
export const withProps = <U>() => <P, T, O>(
  fn: styledComponents.ThemedStyledFunction<P, T, O>
) => fn as styledComponents.ThemedStyledFunction<P & U, T, O & U>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
