import { css } from 'styled-components'

export const truncate = width => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const sizes = {
  giant: 1800,
  desktop: 1300,
  medium: 1130,
  tablet: 900,
  phone: 600,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const boxShadow = () => `
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.08);
`
