import type { StyleConfig } from '../../utils'
import {
  colorTransformer,
  spaceTransformer,
  sizeTransformer,
  fontSizeTransformer,
  fontWeightTransformer
} from './transformers'

const styleConfig: StyleConfig = {
  alignContent: {
    name: 'align-content'
  },
  alignItems: {
    name: 'align-items'
  },
  alignSelf: {
    name: 'align-self'
  },
  animation: {
    name: 'animation'
  },
  backgroundImage: {
    name: 'background-image'
  },
  backdropFilter: {
    name: 'backdrop-filter'
  },
  backgroundPosition: {
    name: 'background-position'
  },
  backgroundSize: {
    name: 'background-size'
  },
  bg: {
    name: 'background',
    transformer: colorTransformer
  },
  border: {
    name: 'border'
  },
  borderCollapse: {
    name: 'border-collapse'
  },
  borderColor: {
    name: 'border-color',
    transformer: colorTransformer
  },
  borderTop: {
    name: 'border-top'
  },
  borderRight: {
    name: 'border-right'
  },
  borderBottom: {
    name: 'border-bottom'
  },
  borderLeft: {
    name: 'border-left'
  },
  borderRadius: {
    name: 'border-radius',
    transformer: sizeTransformer
  },
  borderStyle: {
    name: 'border-style'
  },
  borderTopLeftRadius: {
    name: 'border-top-left-radius',
    transformer: sizeTransformer
  },
  borderTopRightRadius: {
    name: 'border-top-right-radius',
    transformer: sizeTransformer
  },
  borderBottomLeftRadius: {
    name: 'border-bottom-left-radius',
    transformer: sizeTransformer
  },
  borderBottomRightRadius: {
    name: 'border-bottom-right-radius',
    transformer: sizeTransformer
  },
  borderWidth: {
    name: 'border-width',
    transformer: sizeTransformer
  },
  bottom: {
    name: 'bottom',
    transformer: sizeTransformer
  },
  boxShadow: {
    name: 'box-shadow'
  },
  boxSizing: {
    name: 'box-sizing'
  },
  color: {
    name: 'color',
    transformer: colorTransformer
  },
  columnGap: {
    name: 'column-gap',
    transformer: spaceTransformer
  },
  cursor: {
    name: 'cursor'
  },
  display: {
    name: 'display'
  },
  filter: {
    name: 'filter'
  },
  flex: {
    name: 'flex'
  },
  flexDirection: {
    name: 'flex-direction'
  },
  flexFlow: {
    name: 'flex-flow'
  },
  flexGrow: {
    name: 'flex-grow'
  },
  flexShrink: {
    name: 'flex-shrink'
  },
  flexWrap: {
    name: 'flex-wrap'
  },
  fontFamily: {
    name: 'font-family'
  },
  fontSize: {
    name: 'font-size',
    transformer: fontSizeTransformer
  },
  fontWeight: {
    name: 'font-weight',
    transformer: fontWeightTransformer
  },
  gridArea: {
    name: 'grid-area'
  },
  gridColumn: {
    name: 'grid-column'
  },
  gridRow: {
    name: 'grid-row'
  },
  gap: {
    name: 'gap',
    transformer: spaceTransformer
  },
  gridAutoFlow: {
    name: 'grid-auto-flow'
  },
  gridAutoColumns: {
    name: 'grid-auto-columns'
  },
  gridTemplateColumns: {
    name: 'grid-template-columns'
  },
  gridTemplateRows: {
    name: 'grid-template-rows'
  },
  height: {
    name: 'height',
    transformer: sizeTransformer
  },
  lineClamp: {
    name: 'line-clamp'
  },
  lineHeight: {
    name: 'line-height'
  },
  listStyle: {
    name: 'list-style'
  },
  justifyContent: {
    name: 'justify-content'
  },
  justifySelf: {
    name: 'justify-self'
  },
  left: {
    name: 'left',
    transformer: sizeTransformer
  },
  m: {
    name: 'margin',
    transformer: spaceTransformer
  },
  mx: {
    names: ['margin-left', 'margin-right'],
    transformer: spaceTransformer
  },
  my: {
    names: ['margin-top', 'margin-bottom'],
    transformer: spaceTransformer
  },
  mt: {
    name: 'margin-top',
    transformer: spaceTransformer
  },
  mr: {
    name: 'margin-right',
    transformer: spaceTransformer
  },
  mb: {
    name: 'margin-bottom',
    transformer: spaceTransformer
  },
  ml: {
    name: 'margin-left',
    transformer: spaceTransformer
  },
  minHeight: {
    name: 'min-height',
    transformer: sizeTransformer
  },
  minWidth: {
    name: 'min-width',
    transformer: sizeTransformer
  },
  maxHeight: {
    name: 'max-height',
    transformer: sizeTransformer
  },
  maxWidth: {
    name: 'max-width',
    transformer: sizeTransformer
  },
  objectFit: {
    name: 'object-fit'
  },
  opacity: {
    name: 'opacity'
  },
  order: {
    name: 'order'
  },
  outline: {
    name: 'outline'
  },
  overflow: {
    name: 'overflow'
  },
  overflowX: {
    name: 'overflow-x'
  },
  overflowY: {
    name: 'overflow-y'
  },
  overflowWrap: {
    name: 'overflow-wrap'
  },
  p: {
    name: 'padding',
    transformer: spaceTransformer
  },
  px: {
    names: ['padding-left', 'padding-right'],
    transformer: spaceTransformer
  },
  py: {
    names: ['padding-top', 'padding-bottom'],
    transformer: spaceTransformer
  },
  pt: {
    name: 'padding-top',
    transformer: spaceTransformer
  },
  pr: {
    name: 'padding-right',
    transformer: spaceTransformer
  },
  pb: {
    name: 'padding-bottom',
    transformer: spaceTransformer
  },
  pl: {
    name: 'padding-left',
    transformer: spaceTransformer
  },
  placeSelf: {
    name: 'padding-self'
  },
  pointerEvents: {
    name: 'pointer-events'
  },
  position: {
    name: 'position'
  },
  right: {
    name: 'right',
    transformer: sizeTransformer
  },
  rowGap: {
    name: 'row-gap',
    transformer: spaceTransformer
  },
  size: {
    name: 'font-size',
    transformer: fontSizeTransformer
  },
  textAlign: {
    name: 'text-align'
  },
  textDecoration: {
    name: 'text-decoration'
  },
  textOverflow: {
    name: 'text-overflow'
  },
  textShadow: {
    name: 'text-shadow'
  },
  textTransform: {
    name: 'text-transform'
  },
  top: {
    name: 'top',
    transformer: sizeTransformer
  },
  transform: {
    name: 'transform'
  },
  transition: {
    name: 'transition'
  },
  userSelect: {
    name: 'user-select'
  },
  webkitAppearance: {
    name: '-webkit-appearance'
  },
  weight: {
    name: 'font-weight',
    transformer: fontWeightTransformer
  },
  whiteSpace: {
    name: 'white-space'
  },
  width: {
    name: 'width',
    transformer: sizeTransformer
  },
  wordBreak: {
    name: 'word-break'
  },
  wordWrap: {
    name: 'word-wrap'
  },
  zIndex: {
    name: 'z-index'
  }
}

export default styleConfig
