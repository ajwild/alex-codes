import Typography from 'typography'
import {
  MIN_MOBILE_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const titleFont = 'Josefin Slab'
const titleFontFamily = [titleFont, 'serif']
const headerFont = 'Montserrat'
const headerFontFamily = [bodyFont, 'Helvetica', 'Arial', 'sans-serif']
const bodyFont = headerFont.slice()
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
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: bodyFontFamily,
  bodyFontFamily,
  headerColor: '#666',
  bodyColor: '#333',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 1,
  includeNormalize: true,
  roundToNearestHalfLine: false,
  overrideStyles: (
    { adjustFontSizeTo, establishBaseline, linesForFontSize, rhythm, scale },
    options,
    styles
  ) => ({
    'html,body': {
      backgroundColor: '#ddd',
    },
    h1: {
      color: '#000',
      fontFamily: titleFontFamily.join(','),
      fontWeight: 300,
      ...adjustFontSizeTo('3rem', 2),
    },
    h2: {
      ...adjustFontSizeTo('1.2rem', 2),
    },
    h3: {
      ...adjustFontSizeTo('1.2rem', 1),
    },
    'p:last-child': {
      marginBottom: 0,
    },
    [MIN_MOBILE_MEDIA_QUERY]: {
      h1: {
        ...adjustFontSizeTo('5rem', 4),
      },
      h2: {
        ...adjustFontSizeTo('2rem', 2),
      },
      h3: {
        ...adjustFontSizeTo('2rem', 2),
      },
    },
    [MIN_TABLET_MEDIA_QUERY]: {
      h1: {
        ...adjustFontSizeTo('7rem', 6),
      },
      h2: {
        ...adjustFontSizeTo('2.8rem', 3),
      },
      h3: {
        ...adjustFontSizeTo('2rem', 2),
      },
    },
  }),
})

export default typography
