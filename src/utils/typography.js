import Typography from 'typography'
import {
  MIN_MOBILE_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const titleFont = 'Josefin Slab'
const titleFontFamily = [titleFont, 'serif']
const bodyFont = 'Montserrat'
const bodyFontFamily = [bodyFont, 'Helvetica', 'Arial', 'sans-serif']
const baseFontSize = 16
const baseLineHeight = 1.5

const typography = new Typography({
  title: 'alex.codes',
  baseFontSize,
  baseLineHeight,
  scaleRatio: 3,
  googleFonts: [
    {
      name: titleFont,
      styles: ['300'],
    },
    {
      name: bodyFont,
      styles: ['300', '400', '500'],
    },
  ],
  headerFontFamily: bodyFontFamily,
  bodyFontFamily,
  headerColor: '#333',
  bodyColor: '#444',
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 500,
  blockMarginBottom: 1,
  includeNormalize: true,
  roundToNearestHalfLine: false,
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    'html,body': {
      backgroundColor: '#fff',
    },
    a: {
      color: '#000',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    h1: {
      color: '#000',
      fontFamily: titleFontFamily.join(','),
      fontWeight: 300,
      ...adjustFontSizeTo('3rem', 2),
    },
    h2: {
      ...adjustFontSizeTo('1.2rem', 1),
    },
    h3: {
      ...adjustFontSizeTo('1.2rem', 1),
    },
    h4: {
      ...adjustFontSizeTo('1.2rem', 1),
    },
    h5: {
      ...adjustFontSizeTo('1rem', 1),
      color: '#666',
    },
    h6: {
      ...adjustFontSizeTo('1rem', 1),
      color: '#999',
    },
    input: {
      marginBottom: rhythm(1),
    },
    li: {
      marginBottom: 0,
    },
    'p:last-child': {
      marginBottom: 0,
    },
    svg: {
      fill: 'currentColor',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fontSize: '1.5em',
      userSelect: 'none',
      flexShrink: 0,
    },
    textarea: {
      marginBottom: rhythm(1),
    },
    'ul:last-child': {
      marginBottom: 0,
    },
    [MIN_MOBILE_MEDIA_QUERY]: {
      h1: {
        ...adjustFontSizeTo('4rem', 3),
      },
      h2: {
        ...adjustFontSizeTo('1.6rem', 2),
      },
      h3: {
        ...adjustFontSizeTo('1.6rem', 2),
      },
    },
    [MIN_TABLET_MEDIA_QUERY]: {
      h1: {
        ...adjustFontSizeTo('6rem', 5),
      },
      h2: {
        ...adjustFontSizeTo('2.4rem', 2),
      },
      h3: {
        ...adjustFontSizeTo('2rem', 2),
      },
    },
  }),
})
const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
