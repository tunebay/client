// @flow
import { css } from 'styled-components'

export const truncate = (width: string) => `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `

const sizes = {
  giant: 1800,
  desktop: 1200,
  tablet: 900,
  phone: 600,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args: *) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
