import type { StyleConfig } from '../../utils'
import {
  colorTransformer,
  spaceTransformer,
  sizeTransformer,
  fontSizeTransformer,
  fontWeightTransformer
} from './transformers'

const styleConfig: StyleConfig = {
  backgroundImage: {
    name: 'background-image'
  },
  bg: {
    name: 'background',
    transformer: colorTransformer
  },
  border: {
    name: 'border'
  },
  borderRadius: {
    name: 'border-radius',
    transformer: sizeTransformer
  },
  bottom: {
    name: 'bottom',
    transformer: sizeTransformer
  },
  boxShadow: {
    name: 'box-shadow'
  },
  color: {
    name: 'color',
    transformer: colorTransformer
  },
  cursor: {
    name: 'cursor'
  },
  display: {
    name: 'display'
  },
  fontSize: {
    name: 'font-size',
    transformer: fontSizeTransformer
  },
  fontWeight: {
    name: 'font-weight',
    transformer: fontWeightTransformer
  },
  height: {
    name: 'height',
    transformer: sizeTransformer
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
  position: {
    name: 'position'
  },
  right: {
    name: 'right',
    transformer: sizeTransformer
  },
  textAlign: {
    name: 'text-align'
  },
  textDecoration: {
    name: 'text-decoration'
  },
  top: {
    name: 'top',
    transformer: sizeTransformer
  },
  width: {
    name: 'width',
    transformer: sizeTransformer
  },
  zIndex: {
    name: 'z-index'
  }
}

export default styleConfig
